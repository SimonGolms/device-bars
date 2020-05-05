import { newE2EPage } from '@stencil/core/testing';

describe('device-status-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<device-status-bar></device-status-bar>');

    const element = await page.find('device-status-bar');
    expect(element).toHaveClass('hydrated');
  });
});
