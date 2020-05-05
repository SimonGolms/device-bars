type Size = { width: number; height: number };

type SafeArea = { top?: string; right?: string; bottom?: string; left?: string };

export type DeviceDescriptor = {
  userAgent: string;
  viewport: Size;
  deviceScaleFactor: number;
  isMobile: boolean;
  hasTouch: boolean;
  name?: string;
  cssClass?: string;
  safeArea?: SafeArea;
  platform?: string;
  mode: 'md' | 'ios';
};

type Devices = { [name: string]: DeviceDescriptor };

export const DEVICES: Devices = {
  'Galaxy Note 3': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy Note 3',
    cssClass: 'galaxy-note-3',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy Note 3 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy Note 3 landscape',
    cssClass: 'galaxy-note-3',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy Note II': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy Note II',
    cssClass: 'galaxy-note-2',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy Note II landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy Note II landscape',
    cssClass: 'galaxy-note-2',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy S III': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 360,
      height: 640,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy S III',
    cssClass: 'galaxy-s-3',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy S III landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    viewport: {
      width: 640,
      height: 360,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy S III landscape',
    cssClass: 'galaxy-s-3',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy S5': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 640,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy S5',
    cssClass: 'galaxy-s-5',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Galaxy S5 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 360,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Galaxy S5 landscape',
    cssClass: 'galaxy-s-5',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'iPad (gen 6)': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 768,
      height: 1024,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad (gen 6)',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad (gen 6) landscape': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1024,
      height: 768,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad (gen 6) landscape',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad (gen 7)': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 810,
      height: 1080,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad (gen 7)',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad (gen 7) landscape': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1080,
      height: 810,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad (gen 7)',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Mini': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 768,
      height: 1024,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Mini',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Mini landscape': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1024,
      height: 768,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Mini landscape',
    cssClass: 'ipad',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Pro 11': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 834,
      height: 1194,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Pro 11',
    cssClass: 'ipad-pro',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Pro 11 landscape': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1194,
      height: 834,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Pro 11 landscape',
    cssClass: 'ipad-pro',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Pro 13': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1024,
      height: 1366,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Pro 13',
    cssClass: 'ipad-pro',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPad Pro 13 landscape': {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 1366,
      height: 1024,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPad Pro 13 landscape',
    cssClass: 'ipad-pro',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 6': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 6',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 6 landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 6 landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 6 Plus': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 6 Plus',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 6 Plus landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 6 Plus landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 7': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 7',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 7 landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 7 landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 7 Plus': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 7 Plus',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 7 Plus landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 7 Plus landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 8': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 667,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 8',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 8 landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 667,
      height: 375,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 8 landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 8 Plus': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 414,
      height: 736,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 8 Plus',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 8 Plus landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 736,
      height: 414,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 8 Plus landscape',
    cssClass: 'iphone-6-7-8',
    safeArea: { top: '20px', bottom: '20px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone SE': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 320,
      height: 568,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone SE',
    cssClass: 'iphone-5-SE',
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone SE landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    viewport: {
      width: 568,
      height: 320,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone SE landscape',
    cssClass: 'iphone-5-SE',
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone X': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone X',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone X landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone X landscape',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone XR': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 896,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone XR',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone XR landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 896,
      height: 414,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone XR landscape',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 896,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11 landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 896,
      height: 414,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11 landscape',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11 Pro': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 375,
      height: 812,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11 Pro',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11 Pro landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 812,
      height: 375,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11 Pro landscape',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11 Pro Max': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 414,
      height: 896,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11 Pro Max',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'iPhone 11 Pro Max landscape': {
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1',
    viewport: {
      width: 896,
      height: 414,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'iPhone 11 Pro Max landscape',
    cssClass: 'iphone-x-xr-11',
    safeArea: { top: '44px', bottom: '44px' },
    platform: 'ios',
    mode: 'ios',
  },
  'Nexus 10': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 800,
      height: 1280,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 10',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 10 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 1280,
      height: 800,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 10 landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 4': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 384,
      height: 640,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 4',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 4 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 384,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 4 landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 5': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 360,
      height: 640,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 5',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 5 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 640,
      height: 360,
    },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 5 landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 5X': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
    },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 5X',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 5X landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
    },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 5X',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 6': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 6',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 6 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 6',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 6P': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 412,
      height: 732,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 6P',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 6P landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 732,
      height: 412,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 6P landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 7': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 600,
      height: 960,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 7',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Nexus 7 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36',
    viewport: {
      width: 960,
      height: 600,
    },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    name: 'Nexus 7 landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Pixel 2': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 411,
      height: 731,
    },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    name: 'Pixel 2',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Pixel 2 landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 731,
      height: 411,
    },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    name: 'Pixel 2 landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Pixel 2 XL': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 411,
      height: 823,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Pixel 2 XL',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
  'Pixel 2 XL landscape': {
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
    viewport: {
      width: 823,
      height: 411,
    },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    name: 'Pixel 2 XL landscape',
    cssClass: 'android',
    safeArea: { top: '24px', bottom: '48px' },
    platform: 'android',
    mode: 'md',
  },
};

export const getDeviceInfo = (device: keyof Devices) => {
  return DEVICES[device];
};

export const detectDevice = (viewport: Screen = window.screen) => {
  const device = Object.values(DEVICES).find((device) => {
    return device.viewport.width === viewport.width && device.viewport.height === viewport.height;
  });
  return device;
};
