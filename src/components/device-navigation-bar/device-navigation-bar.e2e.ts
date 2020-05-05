import { newE2EPage } from '@stencil/core/testing';

describe('device-navigation-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<device-navigation-bar></device-navigation-bar>');

    const element = await page.find('device-navigation-bar');
    expect(element).toHaveClass('hydrated');
  });
});
