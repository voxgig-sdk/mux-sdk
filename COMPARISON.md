# Mux: the Voxgig SDK and the Stainless SDK compared

Vergleich: Stainless. Compared with muxinc/mux-node-sdk (@mux/ts 15.3.0 and @mux/mcp, generated with Stainless's stlc). Spec: www.mux.com/api-spec.json, OAS 3.1.0, 121 paths / 153 ops, Apache-2.0 (inherited from muxinc/mux-node-sdk). Added 2026-09-28. Rebuilt 2026-09-29 on sdkgen 4.32.1 and apidef 8.22.0.

This repository is on the admin **vergleich** list. It is built only to be compared, and it is not published.

## Scorecard

| | Voxgig | Stainless |
|---|---|---|
| SDK | this repository, commit `6570428`: eight targets (go, go-cli, go-mcp, ts, py, rb, lua, php) | `@mux/mux-node@15.3.0` (TypeScript) |
| Input | `mux-openapi.json`: OAS 3.1.0, `info.version` v1, 121 paths, 153 operations | the vendor's own generation; the note above names the definition version it came from |
| Operations callable | 153 of 153 | 154 operation methods |
| Entities | 73 | not applicable |
| ts package | 3.60 MB, 536 files | 4.79 MB, 1017 files |
| Runtime dependencies | 0 | 0 |
| Generated tests | ts 658 pass / 0 fail / 8 skipped; py 490 pass / 57 skipped; rb 514 runs / 0 fail; lua 488 pass / 0 fail; php 514 tests / 0 fail; go, go-cli, go-mcp build, vet and test | not run: a published package |
| Determinism | a second generation on the same toolchain is byte-identical | not measured |
| Scenario against a mock | 4 of 4 steps right, 0 returned wrong data, 0 request violations (static) | 4 of 4 steps right, 0 request violations (static) |

## Features

Voxgig's features are opt-in; these builds enable the standard set. The Stainless column is read from the published package, with the evidence below.

| Feature | Voxgig | Stainless |
|---|---|---|
| Retries | yes | yes |
| Timeouts | yes | yes |
| Pagination helper | partial | yes |
| Idempotency keys | yes | no |
| Rate-limit handling | yes | yes |
| Logging / debug | yes | yes |
| Built-in offline test mode | yes | no |
| Metrics / telemetry | partial | no |
| Cancellation | yes | yes |
| Hooks / middleware | yes | partial |

**Evidence, Stainless.**

- Retries: client.js makeRequest/shouldRetry: connection errors, timeouts, 408, 409, 429, >=500 or x-should-retry: true. maxRetries default 2 (client or per request); 0.5s x 2^n backoff, max 8s.
- Timeouts: timeout (ms) on ClientOptions (client.d.ts) and per request (internal/request-options.d.ts); default Mux.DEFAULT_TIMEOUT 60000, per attempt; APIConnectionTimeoutError.
- Pagination helper: core/pagination.js AbstractPage: hasNextPage/getNextPage/iterPages, plus for-await auto-pagination via PagePromise; 21 list methods use BasePage, CursorPage or PageWithTimeframe.
- Idempotency keys: client.js buildHeaders would generate stainless-node-retry-<uuid> only if idempotencyHeader is set; it is declared (client.d.ts) but never assigned, so no key is sent.
- Rate-limit handling: 429 is retried by default; client.js retryRequest honours retry-after-ms and Retry-After (seconds or HTTP date); RateLimitError once retries run out. No client-side throttling.
- Logging / debug: logLevel option (off/error/warn/info/debug), default env MUX_LOG else 'warn'; logger option (default console); internal/utils/log.js redacts auth headers.
- Built-in offline test mode: Searched mock/testMode/fake outside resources/: 0 hits. bin/cli is only a v13-to-v14 code migration runner.
- Metrics / telemetry: No OpenTelemetry, tracing or metrics callback. Only X-Stainless-* platform, retry-count and timeout headers (internal/detect-platform.js, client.js). data.metrics is an API resource.
- Cancellation: Per-request signal (internal/request-options.d.ts), linked to the SDK's AbortController in client.js fetchWithTimeout; throws APIUserAbortError.
- Hooks / middleware: No hook or middleware API. ClientOptions.fetch (custom fetch wrapper) and fetchOptions; protected prepareOptions/prepareRequest (client.d.ts) can be overridden only by subclassing.
- Auth: tokenId + tokenSecret -> HTTP Basic (env MUX_TOKEN_ID / MUX_TOKEN_SECRET), or authorizationToken -> Bearer (MUX_AUTHORIZATION_TOKEN). webhookSecret, jwtSigningKey and jwtPrivateKey serve helpers.
- Errors: Yes. core/error.js APIError.generate: 400 BadRequest, 401 Authentication, 403 PermissionDenied, 404 NotFound, 409 Conflict, 422 UnprocessableEntity, 429 RateLimit, >=500 InternalServer.

**Evidence, Voxgig.**

- Retries: retry feature: 408, 425, 429 and 5xx, honouring Retry-After.
- Timeouts: timeout feature: 30 s per attempt by default.
- Pagination helper: paging feature: page and cursor state carried between calls (ctrl.paging); no iterator.
- Idempotency keys: idempotency feature: generates an Idempotency-Key for mutating calls, stable across retries.
- Rate-limit handling: ratelimit feature: client-side token bucket; retry honours Retry-After on 429.
- Logging / debug: debug feature: request and response logging with auth headers redacted.
- Built-in offline test mode: test feature: an offline mock transport; every generated suite runs on it.
- Metrics / telemetry: metrics feature: per-operation counts and timings; no OpenTelemetry.
- Cancellation: an AbortSignal per call (callopts.signal).
- Hooks / middleware: extend: custom features hook every pipeline stage.

## Scenario

✓ right, ⚠ returned without error but with the wrong data, ✗ failed.

Each SDK lists one resource, loads and removes the first item it listed, and creates one from the definition's own example or required fields, against a mock built from the same vendor definition. The mock is Prism: static mode answers with the definition's examples, and dynamic mode generates schema-valid data. Each SDK is credited with its better mode. Request violations are Prism's verdicts on what the SDK sent.

- **Voxgig, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Voxgig, dynamic:** 1 of 4 steps right, 0 request violations.
  - ⚠ `list`: 0 items, because the mock generated an empty page (`data: []`)
  - ✗ `load`: no listed item to load; on a fallback id it returned the asset
  - ✓ `create`
  - ✗ `remove`: no listed item to remove
- **Stainless, static:** 4 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✓ `load`
  - ✓ `create`
  - ✓ `remove`
- **Stainless, dynamic:** 2 of 4 steps right, 0 request violations.
  - ✓ `list`
  - ✗ `load`: Path parameters result in path with invalid segments:
  - ✓ `create`
  - ✗ `remove`: Path parameters result in path with invalid segments:

## Voxgig toolchain findings

- **QUERY-ECHO** (@voxgig/sdkgen, PrepareQuery). Every match field, path parameters included, was also sent as a query parameter, such as `?id=` on a load. Fixed in voxgig/sdkgen#222, released in 4.31.0: query parameters go out under the definition's names, and the rebuild's scenario requests carry no echoed parameter.
- **ERGONOMICS** (@voxgig/apidef). Mux's assets were listed through a separate ListAsset entity, named after the list response, and loaded, created and removed through Asset. Fixed in apidef 8.19.0: Asset carries all five operations.
- **DOCS-QA** (@voxgig/docgen, the generated Documentation workflow). The generated API pages quote the vendor's own descriptions, and the workflow runs its prose checks over them, so the step fails on the vendor's identifiers and repeated words rather than on anything the generator wrote. Open: voxgig/docgen#33.

## How this was measured

- Operations: the definition's operations are counted over its paths. Voxgig's are the generated model's points, less those under an op no target generates. The compared SDK's are the operation methods in its published package, counted per generator (method declarations, request-builder verbs, or functions per operation).
- Package size and file count: `npm pack --dry-run` for the Voxgig ts target, and the registry's `dist.unpackedSize` and `dist.fileCount` for the compared package.
- Tests: `admin/scripts/cedar-test-all.sh` runs each target's generated suite.
- Features: read from the code of the published package, crediting a feature only for a mechanism, not a word in the API's own models.
- Rebuild: 2026-09-29, on create-sdkgen 0.30.4, sdkgen 4.32.1, apidef 8.22.0, model 12.0.0 and @tabnas/yaml 0.5.14, all as published, with no overlay.
- Toolchain refresh: 2026-09-30, to apidef 8.22.1 and @tabnas/yaml 0.5.15, as published. A regeneration on them writes the same SDK, so only `.sdk/package-lock.json` moved.
- Tests on the rebuild: all eight targets, the lua suite under Lua 5.4 with busted 2.2.0.
- Scenario on the rebuild: the Voxgig side was re-run on 2026-09-29; the compared SDK's run is from 2026-09-28, and its package is unchanged. The generated create input honours the definition's minimums, which the first run did not.
