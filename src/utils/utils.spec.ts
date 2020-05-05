import { getIonMode } from './utils';

describe('Utils', () => {
  it('getIonMode()', () => {
    expect(getIonMode()).toBe('md');
  });
});
