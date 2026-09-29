# Upload entity test

import json
import os
import time

import pytest

from mux_sdk.utility.voxgig_struct import voxgig_struct as vs
from mux_sdk import MuxSDK
from mux_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestUploadEntity:

    def test_should_create_instance(self):
        testsdk = MuxSDK.test(None, None)
        ent = testsdk.Upload(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "upload": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = MuxSDK.test(seed, None)
        seen = list(base.Upload(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from mux_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = MuxSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Upload(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _upload_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "upload." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MUX_TEST_UPLOAD_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        upload_ref01_ent = client.Upload(None)
        upload_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.upload"), "upload_ref01"))

        upload_ref01_data = helpers.to_map(runner.entity_data(upload_ref01_ent.create(upload_ref01_data, None)))
        assert upload_ref01_data is not None
        assert upload_ref01_data["id"] is not None

        # LIST
        upload_ref01_match = {}

        upload_ref01_list_result = upload_ref01_ent.list(upload_ref01_match, None)
        assert isinstance(upload_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(upload_ref01_list_result),
            {"id": upload_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        upload_ref01_data_up0_up = {
            "id": upload_ref01_data["id"],
        }

        upload_ref01_markdef_up0_name = "asset_id"
        upload_ref01_markdef_up0_value = "Mark01-upload_ref01_" + str(setup["now"])
        upload_ref01_data_up0_up[upload_ref01_markdef_up0_name] = upload_ref01_markdef_up0_value

        upload_ref01_resdata_up0 = helpers.to_map(runner.entity_data(upload_ref01_ent.update(upload_ref01_data_up0_up, None)))
        assert upload_ref01_resdata_up0 is not None
        assert upload_ref01_resdata_up0["id"] == upload_ref01_data_up0_up["id"]
        assert upload_ref01_resdata_up0[upload_ref01_markdef_up0_name] == upload_ref01_markdef_up0_value

        # LOAD
        upload_ref01_match_dt0 = {
            "id": upload_ref01_data["id"],
        }
        upload_ref01_data_dt0_loaded = upload_ref01_ent.load(upload_ref01_match_dt0, None)
        upload_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(upload_ref01_data_dt0_loaded))
        assert upload_ref01_data_dt0_load_result is not None
        assert upload_ref01_data_dt0_load_result["id"] == upload_ref01_data["id"]



def _upload_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/upload/UploadTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MuxSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["upload01", "upload02", "upload03"],
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
        "MUX_TEST_UPLOAD_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MUX_TEST_UPLOAD_ENTID": idmap,
        "MUX_TEST_LIVE": "FALSE",
        "MUX_TEST_EXPLAIN": "FALSE",
        "MUX_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("MUX_TEST_UPLOAD_ENTID"))
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
