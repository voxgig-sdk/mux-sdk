<?php
declare(strict_types=1);

// Mux SDK exists test

require_once __DIR__ . '/../mux_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MuxSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
