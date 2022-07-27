import * as core from '@actions/core';

export async function run(): Promise<void> {
  try {
    core.info('The action is running');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.error('Unexpected execution flow. Error was thrown that was not of type Error');
    }
  }
}
