# UpdateAssetTrack entity test

import json
import os
import time

import pytest

from mux_sdk.utility.voxgig_struct import voxgig_struct as vs
from mux_sdk import MuxSDK
from mux_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestUpdateAssetTrackEntity:

    def test_should_create_instance(self):
        testsdk = MuxSDK.test(None, None)
        ent = testsdk.UpdateAssetTrack(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _update_asset_track_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "update_asset_track." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MUX_TEST_UPDATE_ASSET_TRACK_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        update_asset_track_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.update_asset_track")))
        update_asset_track_ref01_data = None
        if len(update_asset_track_ref01_data_raw) > 0:
            update_asset_track_ref01_data = helpers.to_map(update_asset_track_ref01_data_raw[0][1])

        # UPDATE
        update_asset_track_ref01_ent = client.UpdateAssetTrack(None)
        update_asset_track_ref01_data_up0_up = {
            "id": update_asset_track_ref01_data["id"],
            "asset_id": setup["idmap"]["asset_id"],
        }

        update_asset_track_ref01_markdef_up0_name = "language_code"
        update_asset_track_ref01_markdef_up0_value = "Mark01-update_asset_track_ref01_" + str(setup["now"])
        update_asset_track_ref01_data_up0_up[update_asset_track_ref01_markdef_up0_name] = update_asset_track_ref01_markdef_up0_value

        update_asset_track_ref01_resdata_up0 = helpers.to_map(runner.entity_data(update_asset_track_ref01_ent.update(update_asset_track_ref01_data_up0_up, None)))
        assert update_asset_track_ref01_resdata_up0 is not None
        assert update_asset_track_ref01_resdata_up0["id"] == update_asset_track_ref01_data_up0_up["id"]
        assert update_asset_track_ref01_resdata_up0[update_asset_track_ref01_markdef_up0_name] == update_asset_track_ref01_markdef_up0_value



def _update_asset_track_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/update_asset_track/UpdateAssetTrackTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MuxSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["update_asset_track01", "update_asset_track02", "update_asset_track03", "asset01", "asset02", "asset03"],
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
        "MUX_TEST_UPDATE_ASSET_TRACK_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MUX_TEST_UPDATE_ASSET_TRACK_ENTID": idmap,
        "MUX_TEST_LIVE": "FALSE",
        "MUX_TEST_EXPLAIN": "FALSE",
        "MUX_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MUX_TEST_UPDATE_ASSET_TRACK_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("asset_id") is None:
        idmap_resolved["asset_id"] = idmap_resolved.get("asset01")

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
