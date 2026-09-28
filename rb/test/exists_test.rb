# Mux SDK exists test

require "minitest/autorun"
require_relative "../Mux_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MuxSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
