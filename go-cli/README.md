# mux-cli

boru-driven command-line client **and** interactive REPL for the Mux
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/mux-cli)
make build

# 2. See usage (words, entities, env vars)
./mux-cli --help

# 3. Provide credentials once, via the environment
export MUX_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./mux-cli list annotation
./mux-cli load 1 annotation            # {id:1} shorthand
./mux-cli load '{id:1}' annotation       # explicit match map
./mux-cli update '{name:"x"}' annotation
./mux-cli list ask_question

# 5. Override the API base URL for a single call
MUX_BASE=https://api.example.com ./mux-cli list annotation

# 6. No arguments -> interactive REPL
./mux-cli
mux> list annotation
mux> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/mux-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export MUX_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/mux-cli list annotation
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./mux-cli list annotation
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./mux-cli load 1 annotation          # scalar shorthand for {id:1}
./mux-cli load '{id:1}' annotation     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./mux-cli update '{id:1,name:"new"}' annotation
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export MUX_APIKEY=sk_live_xxx            # API key
export MUX_BASE=https://api.example.com  # optional: override the API base URL
./mux-cli list annotation
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `mux>`). Each line is
evaluated as its own boru expression:

```text
$ ./mux-cli
mux> list annotation
mux> /help
mux> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 73 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `annotation`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `MUX_APIKEY` | API key sent with every request. |
| `MUX_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/mux-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 73 entities this SDK exposes (any is valid as `<entity>`):

annotation ask_question asset asset_or_live_stream_id asset_playback_id asset_shot create_playback_id create_track directive directive_run_detail drm_configuration edit_caption engagement_heatmap engagement_hotspot find_best_thumbnail find_key_moment find_scene generate_asset_shot generate_chapter generate_engagement_insight generate_premium_caption generate_track_subtitle incident input_info job_summary list_all_metric_value list_breakdown_value list_delivery_usage list_dimension_value list_error list_export list_filter_value list_insight list_monitoring_dimension list_monitoring_metric list_real_time_dimension list_real_time_metric list_related_incident list_subview_breakdown_value list_subview_comparison_value list_subview_dimension list_subview_dimension_value list_video_view_export live_stream live_stream_playback_id metric_timeseries_data moderate monitoring_breakdown monitoring_breakdown_timeseries monitoring_histogram_timeseries monitoring_timeseries overall playback_restriction real_time_breakdown real_time_histogram_timeseries real_time_timeseries signal_live_stream_complete signing_key simulcast_target static_rendition subview_breakdown_timeseries subview_overall_value summarize transcription_vocabulary translate_audio translate_caption update_asset_track upload url_signing_key usage_export video_view webhook who_am_i

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./mux-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
