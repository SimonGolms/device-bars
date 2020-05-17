const fs = require('fs');
const { webkit, devices } = require('playwright');

// Target directory in which the screenshots are saved.
const TARGET_DIR = './screenshots';

// Actual List of Devices
// https://github.com/Microsoft/playwright/blob/master/src/deviceDescriptors.ts
const DEVICES = ['Pixel 2', 'Nexus 10', 'iPhone 11 Pro', 'iPad Pro 11'].map((item) => {
  return { ...devices[item], name: item.replace(' ', '-') };
});

// Which languages should be processed.
const LANGUAGES = ['en-US', 'de-DE'];

// Which websites should be processed.
const BASE_URL = 'https://github.com/';
const PAGES = ['home', 'features', 'about'];

const addDeviceBars = async (page) => {
  await page.addScriptTag({
    url: 'https://unpkg.com/device-bars@1.1.0/dist/device-bars/device-bars.esm.js',
    type: 'module',
  });

  await page.addScriptTag({
    content: `
  var body = document.body;

  var statusbar = document.createElement('device-status-bar');
  statusbar.setAttribute('color', '#fff')
  statusbar.setAttribute('background', '#24292e')

  var navigationbar = document.createElement('device-navigation-bar');

  document.body.insertBefore(statusbar, body.firstElementChild)
  document.body.insertBefore(navigationbar, body.lastElementChild)
  `,
  });

  await page.waitForSelector('device-status-bar.hydrated');
  await page.waitForSelector('device-navigation-bar.hydrated');
};

(async () => {
  try {
    // Prepare / Clean-up Target Directory
    await fs.promises.rmdir(TARGET_DIR, { recursive: true });

    const browser = await webkit.launch();

    for (const DEVICE of DEVICES) {
      for (const LANGUAGE of LANGUAGES) {
        const context = await browser.newContext({
          ...DEVICE,
          bypassCSP: true, // bypassing page's Content-Security-Policy
          locale: `${LANGUAGE}`,
        });

        const contextPage = await context.newPage({});

        // Create Target Directory for Screenshots
        const directoryPath = `${TARGET_DIR}/${DEVICE.name}/${LANGUAGE}`;
        await fs.promises.mkdir(directoryPath, { recursive: true });

        for (let i = 0; i < PAGES.length; i++) {
          console.log(`Create Screenshot ${DEVICE.name} ${LANGUAGE} ${PAGES[i]}`);

          await contextPage.goto(`${BASE_URL}${PAGES[i]}`);
          await addDeviceBars(contextPage);
          await contextPage.screenshot({
            path: `${directoryPath}/screenshot-${i}${PAGES[i] ? '-' + PAGES[i] : ''}.png`,
          });
        }
      }
    }
    await browser.close();
  } catch (error) {
    throw error;
  }
  process.exit();
})();
