# Mux SDK exists test

import pytest
from mux_sdk import MuxSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MuxSDK.test(None, None)
        assert testsdk is not None
