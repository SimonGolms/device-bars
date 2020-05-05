import { newSpecPage } from '@stencil/core/testing';
import { DeviceNavigationBar } from './device-navigation-bar';

describe('device-navigation-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DeviceNavigationBar],
      html: `<device-navigation-bar></device-navigation-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <device-navigation-bar style="--height: 0px">
        <mock:shadow-root></mock:shadow-root>
      </device-navigation-bar>
    `);
  });
});
