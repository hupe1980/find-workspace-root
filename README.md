# find-workspace-root

> Find the root of a multi-package repo with Yarn workspaces

## Installation

```bash
yarn add find-workspace-root
```

## How to use

```javascript
import findWorkspaceRoot from 'find-workspace-root';

const rootDir = await findWorkspaceRoot(/** intialDir [default=process.cwd()]**/);
```

## License

[MIT](LICENSE)
