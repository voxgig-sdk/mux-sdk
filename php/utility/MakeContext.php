<?php
declare(strict_types=1);

// Mux SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MuxMakeContext
{
    public static function call(array $ctxmap, ?MuxContext $basectx): MuxContext
    {
        return new MuxContext($ctxmap, $basectx);
    }
}
