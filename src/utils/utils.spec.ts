import { getIonMode, isIonApp, getStyleElement } from './utils';

describe('Utils', () => {
  it('getIonMode()', () => {
    expect(getIonMode()).toBe('md');
  });
  it('isIonApp()', () => {
    expect(isIonApp()).toBe(false);
  });
});
