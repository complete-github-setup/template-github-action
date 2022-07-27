import * as core from '@actions/core';
import { run } from './main';

describe('Test for main', () => {
  jest.spyOn(core, 'info');

  it('should print with core.info', async () => {
    await run();
    expect(core.info).toBeCalledTimes(1);
    expect(core.info).toHaveBeenCalledWith('The action is running');
  });
});
