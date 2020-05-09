import { Build } from '@stencil/core';
import { DeviceDescriptor } from './device';

export const ELEMENT_STYLE_SAFE_AREA_ID = 'device-bars-safe-area';

export const getIonMode = (): string => {
  return (Build.isBrowser && typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
};

export const isIonApp = (): boolean => {
  return document.getElementsByTagName('ion-app')[0] ? true : false;
};

export const getStyleElement = ({ top = '0px', right = '0px', bottom = '0px', left = '0px' }): HTMLStyleElement => {
  const element = document.createElement('style');
  element.id = ELEMENT_STYLE_SAFE_AREA_ID;
  element.type = 'text/css';

  if (isIonApp()) {
    element.innerHTML = `:root {
        --ion-safe-area-top: ${top};
        --ion-safe-area-right: ${right};
        --ion-safe-area-bottom: ${bottom};
        --ion-safe-area-left: ${left};
      }`;
    return element;
  }

  element.innerHTML = `body {
    padding-top: ${top};
    padding-right: ${right};
    padding-bottom: ${bottom};
    padding-left: ${left};
  }`;
  return element;
};

export const setSafeArea = (deviceInfo: DeviceDescriptor = null): void => {
  const element = document.getElementById(ELEMENT_STYLE_SAFE_AREA_ID);

  if (element) {
    return element.replaceWith(getStyleElement({ ...deviceInfo?.safeArea }));
  }

  return document.head.append(getStyleElement({ ...deviceInfo?.safeArea }));
};
