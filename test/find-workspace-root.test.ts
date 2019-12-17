import path from 'path';
import findWorkspaceRoot from '../src';

const fixtureDirectory = path.resolve(__dirname, './fixtures');

test('package in yarn workspace', async () => {
    const intialDir = path.join(fixtureDirectory, 'yarn-workspace', 'packages', 'package-a');

    const rootDir = await findWorkspaceRoot(intialDir);

    expect(rootDir).toBe(path.join(fixtureDirectory, 'yarn-workspace'));
})