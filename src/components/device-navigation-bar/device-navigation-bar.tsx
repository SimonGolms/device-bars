import { Component, Host, h, Prop, Element, ComponentInterface } from '@stencil/core';

import { getDeviceInfo, detectDevice, DeviceDescriptor } from '../../utils/device';
import { getAndroidNavPolygon, getAndroidNavCircle, getAndroidNavRect, getIosHomeIndicator } from '../../utils/icons';
import { setSafeArea } from '../../utils/utils';

@Component({
  tag: 'device-navigation-bar',
  styleUrl: 'device-navigation-bar.scss',
  shadow: true,
})
export class DeviceNavigationBar implements ComponentInterface {
  @Element() el: HTMLElement;

  /**
   * Predefined device descriptor name, such as "iPhone X" or "Pixel 2".
   * For a complete list please see: `DEVICES` at ./../utils/device.ts
   *
   * @default {{AUTO_DETECTION}}
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() device: string;

  /**
   * Set the color of the navigation bar
   *
   * @default '#000'
   * @example
   * // dark style
   * <device-navigation-bar color="#fff" background="#000"></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() color: string;

  /**
   * Sets the background color of the navigation bar
   *
   * @default 'transparent'
   * @example
   * // dark style
   * <device-navigation-bar color="#fff" background="#000"></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() background: string;

  /**
   * Sets the height of the navigation bar.
   * By default, the height is derived from the specified device safe-area, but it can also be adjusted manually.
   *
   * @default {{DEVICE}}.safeArea.bottom
   * @example
   * <device-navigation-bar device="iPhone X" height="100px"></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() height: string;

  /**
   * (Android only)
   * Sets the color to fill the icons in the navigation bar.
   *
   * @default 'none'
   * @example
   * <device-navigation-bar device="iPhone X" fill="#000"></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() fill: string;

  /**
   * Hides the Statusbar
   *
   * @default false
   * @example
   * <device-navigation-bar hide></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() hide: boolean = false;

  /**
   * Set the Statusbar inline.
   *
   * @default false
   * @example
   * <device-navigation-bar inline></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() inline: boolean = false;

  /**
   * Adds an additional safe-area for the status and navigation bar.
   * The respective height is derived from the specified device.
   * By default, the safe-area is implemented via padding on the body.
   * If an <ion-app /> element is detected, the css variable --ion-safe-area-* will be set.
   *
   * @default true
   * @example
   * <device-navigation-bar safe-area="false"></device-navigation-bar>
   * @type {string}
   * @memberof DeviceNavigationBar
   */
  @Prop() safeArea: boolean = true;

  deviceInfo: DeviceDescriptor;

  constructor() {
    if (this.device) {
      this.deviceInfo = getDeviceInfo(this.device);
    } else {
      this.deviceInfo = detectDevice();
    }
    if (this.background) {
      this.el.style.setProperty('--background', this.background);
    }
    if (this.color) {
      this.el.style.setProperty('--color', this.color);
    }
    if (this.fill) {
      this.el.style.setProperty('--fill', this.fill);
    }
    if (this.height) {
      this.el.style.setProperty('--height', this.height);
    } else {
      this.el.style.setProperty('--height', this.deviceInfo ? this.deviceInfo.safeArea.bottom : '0px');
    }
    if (this.safeArea) {
      setSafeArea(this.deviceInfo);
    }
  }

  render() {
    if (this.hide) {
      return null;
    }

    if (!this.deviceInfo || !this.deviceInfo.cssClass) {
      return null;
    }

    if (this.deviceInfo.cssClass === 'iphone-x-xr-11' || this.deviceInfo.cssClass === 'ipad-pro') {
      return (
        <Host class={{ ['inline']: this.inline, [this.deviceInfo.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='ion-navigationbar'>{getIosHomeIndicator()}</div>
        </Host>
      );
    }

    if (this.deviceInfo.mode === 'md') {
      return (
        <Host class={{ ['inline']: this.inline, [this.deviceInfo.mode]: true, [this.deviceInfo.cssClass]: true }}>
          <div class='ion-navigationbar'>
            {getAndroidNavPolygon()}
            {getAndroidNavCircle()}
            {getAndroidNavRect()}
          </div>
        </Host>
      );
    }
    return null;
  }
}
