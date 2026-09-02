# Contributing

Thanks for your interest in Edu SDK.

## Prerequisites

- Node.js 22
- [pnpm](https://pnpm.io) (see `packageManager` in the root `package.json`)

## Setup

```bash
pnpm install
pnpm build
pnpm test:run
pnpm dev:web
```

## Repository layout

| Path | Package / app |
| --- | --- |
| `packages/core` | `edu-sdk` — generation API |
| `packages/react` | `@edu-sdk/react` — React components |
| `apps/web` | Docs and marketing site |
| `apps/playground` | Local playground |

## Workflow

1. Branch from `main`.
2. Keep changes focused (one concern per PR when possible).
3. Add or update tests for behavior changes.
4. Run `pnpm test:run` and `pnpm build` locally.
5. Open a pull request against `main`. CI must pass.

## Code of conduct

Participation is governed by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security

Do not report vulnerabilities in public issues. See [SECURITY.md](./SECURITY.md).

## License

By contributing, you agree that your contributions are licensed under the [MIT License](./LICENSE).
