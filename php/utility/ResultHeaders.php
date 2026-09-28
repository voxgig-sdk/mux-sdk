<?php
declare(strict_types=1);

// Mux SDK utility: result_headers

class MuxResultHeaders
{
    public static function call(MuxContext $ctx): ?MuxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
