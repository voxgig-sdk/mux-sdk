<?php
declare(strict_types=1);

// Mux SDK utility: result_body

class MuxResultBody
{
    public static function call(MuxContext $ctx): ?MuxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
