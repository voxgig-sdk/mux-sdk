# SimulcastTarget entity test

import json
import os
import time

import pytest

from mux_sdk.utility.voxgig_struct import voxgig_struct as vs
from mux_sdk import MuxSDK
from mux_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSimulcastTargetEntity:

    def test_should_create_instance(self):
        testsdk = MuxSDK.test(None, None)
        ent = testsdk.SimulcastTarget(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _simulcast_target_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "simulcast_target." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MUX_TEST_SIMULCAST_TARGET_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        simulcast_target_ref01_ent = client.SimulcastTarget(None)
        simulcast_target_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.simulcast_target"), "simulcast_target_ref01"))
        simulcast_target_ref01_data["live_stream_id"] = setup["idmap"]["live_stream01"]

        simulcast_target_ref01_data = helpers.to_map(runner.entity_data(simulcast_target_ref01_ent.create(simulcast_target_ref01_data, None)))
        assert simulcast_target_ref01_data is not None
        assert simulcast_target_ref01_data["id"] is not None

        # LOAD
        simulcast_target_ref01_match_dt0 = {
            "id": simulcast_target_ref01_data["id"],
        }
        simulcast_target_ref01_data_dt0_loaded = simulcast_target_ref01_ent.load(simulcast_target_ref01_match_dt0, None)
        simulcast_target_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(simulcast_target_ref01_data_dt0_loaded))
        assert simulcast_target_ref01_data_dt0_load_result is not None
        assert simulcast_target_ref01_data_dt0_load_result["id"] == simulcast_target_ref01_data["id"]



def _simulcast_target_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/simulcast_target/SimulcastTargetTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MuxSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["simulcast_target01", "simulcast_target02", "simulcast_target03", "live_stream01", "live_stream02", "live_stream03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "MUX_TEST_SIMULCAST_TARGET_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MUX_TEST_SIMULCAST_TARGET_ENTID": idmap,
        "MUX_TEST_LIVE": "FALSE",
        "MUX_TEST_EXPLAIN": "FALSE",
        "MUX_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MUX_TEST_SIMULCAST_TARGET_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("MUX_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("MUX_APIKEY"),
            },
            extra or {},
        ])
        client = MuxSDK(helpers.to_map(merged_opts))

    _live = env.get("MUX_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("MUX_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
