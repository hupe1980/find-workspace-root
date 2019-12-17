import fs from 'fs-extra';
import path from 'path';
import micromatch from 'micromatch';

const cwd = process.cwd();

type PackageJson = { workspaces?: string | string[] };

const readPackageJson = async (cwd: string): Promise<PackageJson | null> => {
  const loc = path.join(cwd, 'package.json');
  if (await fs.pathExists(loc)) {
    return fs.readJSON(loc);
  }
  return null;
};

export default async (initial = cwd): Promise<string | null> => {
  let previous = null;
  let current = path.normalize(initial);

  do {
    const pkgJson = await readPackageJson(current);

    if (pkgJson?.workspaces) {
      const relativePath = path.relative(current, initial);

      return relativePath === '' ||
        micromatch([relativePath], pkgJson.workspaces).length > 0
        ? current
        : null;
    }

    previous = current;
    current = path.dirname(current);
  } while (current !== previous);

  return null;
};
