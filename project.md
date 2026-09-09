# Delivery protocol — v2

This is the single operational specification for agent persistence, Kanban,
worktrees, QA and completion. ADR-010 refines ADR-008/009; architecture and
product acceptance remain in their existing sources.
See the [operator guide](../runbooks/delivery-harness.md) for executable examples.

## Source ownership and persistence

| Record | Owner | Update rule |
|---|---|---|
| current_gateway.md backlog and FIX queue | primary coordinator / PM | Sole current task status; one writer |
| Gate contract and original task briefs | PM before execution | Freeze baseline; scope changes require a linked amendment |
| Activity log in gateway | coordinator | Append EVT IDs; never rewrite prior evidence |
| Session checkpoint | coordinator | Mutable pointer to revision, task, worktree, blocker and next command |
| Structured iteration JSON | assigned specialist or QA | Exclusive creation; reference it from an EVT entry |
| Completed gateway + final acceptance receipt | coordinator after QA | Archive verbatim, hash and never overwrite |
| HTML/Mermaid, context packets and learning reports | generated views | Regenerate from records; never edit status through a view |

Persist product domain state according to architecture/data-lifecycle.md and
architecture/engineering-rules.md, not in this development Kanban.
Git is the history/backup boundary. Exclusive file creation and SHA-256 detect
accidental overwrite/drift; they are not cryptographic authentication against
a writer who can replace both evidence and its baseline.

Legacy G0/G1 records remain readable. Do not retroactively fabricate structured
logs, contracts, costs or acceptance receipts for historical runs.
Use the baseline comparison hook before accepting a gateway edit:
`python scripts/gateway_control.py guard --baseline <before.md> --gateway <after.md>`.
Compare with the last reviewed Git snapshot, not a newly overwritten baseline.
The candidate must pass validation. A legacy inconsistent baseline may be
repaired with additive evidence; its invalid state cannot be accepted as output.

## Task packet and readiness

Each assignment contains: ID, parent (for FIX), gate, user-visible deliverable,
dependencies, owner, exclusive files, non-goals, DoD, acceptance command(s),
actual consumer interface, issue URL (optional), base revision, target branch,
worktree, delivery destination, and current checkpoint.
Use stable product IDs from the execution plan. FIX-<parent>-<n> stays attached
to that parent; local IDs suffice when no external issue tracker is configured.
Do not create external issues without authorization.

`context --task ID` extracts the brief, dependencies, assignment and relevant
recent evidence. Read referenced source sections once, not every role's full history.
A BACKLOG row with satisfied dependencies is eligible for assignment, not already READY.
Include packaging/root lock and the installed consumer smoke test in scope
when the deliverable adds a package. This prevents scope-induced repair loops.

## Kanban transitions and completion

| State | Entry condition | Next action |
|---|---|---|
| BACKLOG | Identified work | Resolve dependencies and assignment |
| READY | Complete packet; dependencies satisfied | Assign owner, mark IN_PROGRESS |
| IN_PROGRESS | Active implementation/repair | Run bounded loop |
| REVIEW | Candidate and reproducible evidence exist | Independent QA |
| BLOCKED | QA failure or evidenced dependency/environment blocker | Linked FIX or explicit unblock action |
| DONE | Independent QA PASS recorded by coordinator | Confirm integration/delivery destination |

Keep this vocabulary for compatibility. DONE is QA completion, not proof that
a specialist branch reached main. A delivery needs the reviewed target revision
and runnable artifact; track integration under a linked G<n>-INT task when needed.
A parent in BLOCKED with its FIX child in REVIEW is eligible for original-parent retest.
Only QA issues PASS; PM writes that exact result. Do not use self-reported PASS.
A gate becomes PASSED only when all required tasks/fixes are done, integrated,
and its independent final acceptance command succeeds with a hashed receipt.

## Bounded Ralph loop

The loop is a work protocol, not an automatic shell/LLM retry daemon.

1. Read the current acceptance and last iteration; inspect the failing boundary.
2. Implement one coherent step and run the narrow test that can falsify it.
3. Persist one JSON iteration with task, actor, revision, iteration, hypothesis,
   changed_files, checks (argv/exit_code), outcome, artifact references and next_action.
   Use `record --input <iteration.json> --output <new-log.json>`.
4. If it fails, repair locally and retest. Keep the same parent and worktree.
5. When acceptance is met, send REVIEW with evidence; the coordinator immediately
   starts independent QA, applies any linked repair and continues through delivery.

Default diagnostic window: three iterations or two consecutive failures with the
same signature and no changed evidence. This triggers diagnosis/re-scoping within
the task, not silent abandonment. Never retry an identical failing command forever.
If only an external permission/service/user decision can unblock the task, persist
the precise cause, attempted alternatives and next action; finish independent work.
Long-running commands use a resumable process session and progress polling; do not
restart successful setup for each poll. Paid operations need their own idempotency.
Record actual token/cost metrics only when supplied by the runtime; otherwise null.

## Coordination and worktrees

Default to one primary agent implementing/coordinating a coherent parent and one
independent reviewer. Use at most two independent implementation writers when there
are disjoint scopes; read-only review may share the checkout. No automatic full wave.
Close finished agents; specialists do not recursively spawn more agents.

For concurrent writes, inspect status/worktrees once and allocate an ADR-008
sibling worktree per writer. Record absolute path, task branch, exact base,
exclusive scope and integration order. Never nest or share writable state.
For sequential remediation, reuse the same worktree/branch and create a FIX record.
New worktrees require an isolation or base-change reason, not a new iteration number.
The primary agent may serve as PM; direct user assignments need no intermediary.

Freeze the candidate/base pair at QA dispatch. If main advances, inspect
`git diff <base>..<new-main>`: metadata-only changes can be reconciled serially,
while changed dependencies need a new candidate and affected tests.
Integrate reviewed changes in a clean target/integration checkout; preserve unrelated
dirty files and stashes. Never force-reset/clean. Remove worktrees only after verified
integration and clean status; a recorded worktree is not proof of active work.

## Hooks and final proof

These are explicit task/CLI hooks, not hidden Codex lifecycle callbacks:

- `gateway-context`: bounded read packet for resume/assignment.
- `gateway-check`: Markdown consistency, dependency and QA-evidence checks.
- `guard`: compare original briefs, gate intent and append-only events against baseline.
- `record`: create a structured iteration without overwriting prior evidence.
- `gateway-view`: regenerate the standalone interactive HTML view.
- `accept`: run the reviewed final-test argv with a timeout and write a receipt
  containing gateway hash, Git revision, command, exit code and output hashes.
- `archive`: require PASSED, complete tasks/fixes and matching successful receipt.
- `rollover`: validate/render the next gate first, archive the verified predecessor,
  then replace current atomically; rerunning against changed state must fail safely.
- `gateway-learn`: summarize recorded outcomes/repair counts, never auto-edit policy.
- `test-harness`: deterministic end-to-end and failure tests for these hooks.

The final-test argv is in the immutable Gate contract section. QA must review that
it covers the actual gate exit condition; a successful trivial command is insufficient.
Acceptance on a dirty checkout is refused. Receipts do not independently prove
a deployment: record the deployed artifact/target evidence separately when required.
The gateway must be tracked inside the tested checkout and match its commit.
Archival checks the receipt's repository-relative gateway path against that exact
Git revision, as well as hash formats and the latest independent task/FIX decisions.
Use `--repo` when validating a fixture or another worktree.
Hash the exact gateway snapshot after recording its QA decision and before archive.
Use a unique archive directory per gate; interrupted rollover leaves the old current
or the fully validated next current, plus a verifiable archive, never an erased record.

## Learning and efficiency

Use harness-learning on archived gateways and structured logs. For each proposed
change cite evidence IDs, failure mechanism, one minimal rule change and a replay
test. Separate product bugs, environment constraints and workflow failures.
Apply only changes authorized by the request; never automatically promote a lesson
to a universal rule or weaken acceptance to improve pass counts.

Measure completed/integrated parents, acceptance pass rate, repair iterations,
handoffs, elapsed time and token usage when available. Compare equivalent tasks
before asserting savings. Instruction bytes/context size are proxies, not billed tokens.


# Media Factory — Codex Project Instructions

## Mission and boundaries

Deliver the reproducible vertical slice: Discover → Analyze → Generate → Render.
MVP: one niche, one competitor, 10–30 videos, five original ideas, one approved
script, scene/asset/timeline generation, and one validated YouTube-ready MP4.
Protect original content, provenance, version history, idempotency, and secrets.

Accepted stack: Airflow 3.3; DuckDB/Quack behind adapters; Parquet history;
MinIO/S3 media; uv/committed uv.lock + taskipy; FFmpeg; Compose + Portainer.
Airflow metadata stays separate from domain state. No new infrastructure or
post-MVP publishing without a measured requirement and explicit decision.

## Context routing

Read the [delivery protocol](docs/kanban/PROTOCOL.md) once per delivery session.
It centralizes persistence of agent work, Kanban, handoffs and completion.
Use `python scripts/gateway_control.py context --task <ID>` for a task packet
from the [current gateway](docs/kanban/current_gateway.md); read its referenced
contracts before editing. Read full history only to resolve a conflict.

Read the relevant sections of:

- [Architecture](docs/decisions/project_architecture.md) for boundaries.
- [Execution plan](docs/decisions/youtube-faceless-platform-execution-plan-rebuilt.md)
  for MVP and gate acceptance.
- [Engineering rules](docs/architecture/engineering-rules.md) for implementation,
  data ownership, content rights and tests.
- [ADR-007](docs/decisions/007-product-visual-design-system.md) before styling.
- [ADR-006](docs/decisions/006-docker-compose-portainer.md) and the
  [Compose runbook](infra/compose/README.md) before infrastructure changes.
- [ADR-008](docs/decisions/008-isolated-worktrees-for-parallel-delivery.md) for
  concurrent writes; [ADR-009](docs/decisions/009-durable-gateway-checkpoints.md)
  and [ADR-010](docs/decisions/010-delivery-harness.md) for gateway persistence.

Current milestone and next task come from the gateway, never a hardcoded G0 priority.
User instructions may change an accepted decision; record cross-cutting changes in an ADR.

## Dependency rules

Web owns presentation/API consumption; API owns HTTP/auth/validation; services
own executable capabilities; DAGs own orchestration. Domain imports no framework,
database, storage or vendor SDK. Providers and persistence use protocols/adapters.
No services → apps/dags, domain → infrastructure, or raw provider/SQL/FFmpeg
implementation inside DAGs. Logical services need not be separately deployed.

## Execute through delivery

The primary agent owns the user's outcome and may perform the coordination role.
A named PM subprocess is optional; independent QA remains required for tracked
product acceptance. Direct user assignments are valid.
Use one implementation owner by default, at most two independent write tasks.
Delegate only bounded work with explicit inputs, scope, acceptance and evidence.
Do not recursively delegate or copy the conversation/full plan to each agent.

Continue implement → focused test → repair until acceptance or an evidenced blocker.
A plan, REVIEW handoff or QA-passed branch is not a delivered feature.
Coordinate review and integration during the same authorized task.
Never mark a gate PASSED without its final acceptance test and recorded artifacts.
Only QA supplies independent PASS; the coordinator serializes the gateway update.

Preserve dirty user work, stashes and other worktrees. Concurrent writers need
isolated worktrees; sequential fixes reuse the assigned worktree.
Do not reset, force-remove, auto-stash or merge over unrelated dirty files.
Validate the candidate and target base before integration. A metadata-only main
advance is assessed by its diff, not automatically repaired with another worktree.

Prefer configured taskipy commands. Check tool versions once; use the documented
direct equivalent if installed uv cannot run a task. Report that fallback.
Run focused checks during development, consolidated checks at review/integration,
and rerun after relevant changes. Do not repeat unchanged expensive checks.
Update the checkpoint on material transitions or interruption, not every read.

## Handoff

Report the result, changed paths, commands/results, artifact/revision, remaining
blocker and next action. Never invent usage, QA, deployment or gate evidence.
A dirty implementation may be reviewable but is not committed/integrated delivery.
