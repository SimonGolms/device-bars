import { newSpecPage } from '@stencil/core/testing';
import { DeviceStatusBar } from './device-status-bar';

describe('device-status-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DeviceStatusBar],
      html: `<device-status-bar></device-status-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <device-status-bar style="--height: 0px">
        <mock:shadow-root></mock:shadow-root>
      </device-status-bar>
    `);
  });
});
