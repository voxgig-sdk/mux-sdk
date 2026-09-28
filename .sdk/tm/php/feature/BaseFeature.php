<?php
declare(strict_types=1);

// Mux SDK base feature

class MuxBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MuxContext $ctx, array $options): void {}
    public function PostConstruct(MuxContext $ctx): void {}
    public function PostConstructEntity(MuxContext $ctx): void {}
    public function SetData(MuxContext $ctx): void {}
    public function GetData(MuxContext $ctx): void {}
    public function GetMatch(MuxContext $ctx): void {}
    public function SetMatch(MuxContext $ctx): void {}
    public function PrePoint(MuxContext $ctx): void {}
    public function PreSpec(MuxContext $ctx): void {}
    public function PreRequest(MuxContext $ctx): void {}
    public function PreResponse(MuxContext $ctx): void {}
    public function PreResult(MuxContext $ctx): void {}
    public function PreDone(MuxContext $ctx): void {}
    public function PreUnexpected(MuxContext $ctx): void {}
}
