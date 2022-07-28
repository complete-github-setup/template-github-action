import * as core from '@actions/core';
import { run } from './main';

describe('Test for main', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should print with core.info', async () => {
    const infoMock = jest.spyOn(core, 'info');
    await run();
    expect(infoMock).toBeCalledTimes(1);
    expect(infoMock).toHaveBeenCalledWith('The action is running');
  });

  it('should print with core.setFailed if Error', async () => {
    const FailedMock = jest.spyOn(core, 'setFailed');
    jest.spyOn(core, 'info').mockImplementation(() => {
      throw new Error('error message');
    });
    await run();
    expect(FailedMock).toBeCalledTimes(1);
    expect(FailedMock).toHaveBeenCalledWith('error message');
  });

  it('should print with core.error if not Error', async () => {
    const errorMock = jest.spyOn(core, 'error');
    jest.spyOn(core, 'info').mockImplementation(() => {
      throw 'error message';
    });
    await run();
    expect(errorMock).toBeCalledTimes(1);
    expect(errorMock).toHaveBeenCalledWith('Unexpected execution flow. Error was thrown that was not of type Error');
  });
});
