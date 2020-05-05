import { Build } from '@stencil/core';

export const getIonMode = () => {
  return (Build.isBrowser && typeof document !== 'undefined' && document.documentElement.getAttribute('mode')) || 'md';
};
