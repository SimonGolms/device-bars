import { h } from '@stencil/core';

/**
 * Using factory functions to avoid shared JSX nodes
 * see: https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
 */

// Android
export const getAndroidBattery = () => {
  return (
    <svg viewBox='0 0 24 24' fill='black'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z' />
    </svg>
  );
};

export const getAndroidCellular = () => {
  return (
    <svg viewBox='0 0 24 24'>
      <path d='M2 22h20V2z' />
    </svg>
  );
};
export const getAndroidWifi = () => {
  return (
    <svg viewBox='0 0 24 24'>
      <path d='M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z' />
    </svg>
  );
};
export const getAndroidNavCircle = () => {
  return (
    <svg viewBox='0 0 100 100'>
      <circle cx='50%' cy='50%' r='40%' stroke-width='10%' />
    </svg>
  );
};
export const getAndroidNavPolygon = () => {
  return (
    <svg viewBox='0 0 100 100'>
      <polygon stroke-width='10%' rx='2.5' points='10,50 90,90 90,10' />
    </svg>
  );
};
export const getAndroidNavRect = () => {
  return (
    <svg viewBox='0 0 100 100'>
      <rect stroke-width='10%' x='10' y='10' width='80' height='80' rx='2.5' />
    </svg>
  );
};

export const androidBattery = (
  <svg viewBox='0 0 24 24' fill='black'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z' />
  </svg>
);

export const androidCellular = (
  <svg viewBox='0 0 24 24'>
    <path d='M2 22h20V2z' />
  </svg>
);

export const androidWifi = (
  <svg viewBox='0 0 24 24'>
    <path d='M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z' />
  </svg>
);

export const androidNavCircle = (
  <svg viewBox='0 0 100 100'>
    <circle cx='50%' cy='50%' r='40%' stroke-width='10%' />
  </svg>
);

export const androidNavPolygon = (
  <svg viewBox='0 0 100 100'>
    <polygon stroke-width='10%' rx='2.5' points='10,50 90,90 90,10' />
  </svg>
);

export const androidNavRect = (
  <svg viewBox='0 0 100 100'>
    <rect stroke-width='10%' x='10' y='10' width='80' height='80' rx='2.5' />
  </svg>
);

// iOS
export const getIosBattery = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <path
          opacity='0.5'
          d='M396,144H64c-26.4,0-48,21.6-48,48v128c0,26.4,21.6,48,48,48h332c26.4,0,48-21.6,48-48V192C444,165.6,422.4,144,396,144z
        M416,320c0,11-9,20-20,20H64c-11,0-20-9-20-20V192c0-11,9-20,20-20h332c11,0,20,9,20,20V320z'
        />
        <path opacity='0.5' d='M464,204.6v102.8c16,0,32-27.7,32-51.4C496,232.3,480,204.6,464,204.6z' />
        <path d='M384,192H76c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h308c6.6,0,12-5.4,12-12V204C396,197.4,390.6,192,384,192z' />
      </g>
    </svg>
  );
};

export const getIosCellular = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <path d='M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z' />
      <path d='M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z' />
      <path d='M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z' />
      <path d='M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z' />
    </svg>
  );
};

export const getIosHomeIndicator = () => {
  return (
    <svg>
      <rect width='100%' height='100%' rx='2.5' />
    </svg>
  );
};

export const getIosWifi = () => {
  return (
    <svg viewBox='0 0 512 512'>
      <g>
        <path
          d='M256,96c-83,0-166.1,35.8-224,93.7l37.3,39.6c24.3-24.3,52.5-43.3,83.9-56.6C185.8,159,220.3,152,256,152
  s70.2,7,102.7,20.7c31.4,13.3,59.7,32.3,83.9,56.6l37.3-39.6C422.1,131.8,339,96,256,96L256,96z'
        />
        <path
          d='M256,209c-57.2,0-109,23.1-146.6,60.4L149,309c28.7-28.4,66.6-44,107-44c40.4,0,78.3,15.6,107,44l39.6-39.6
  C365,232.1,313.2,209,256,209L256,209z'
        />
        <path d='M256,321c-25.9,0-48.9,12.3-63.6,31.4L256,416l63.6-63.6C304.9,333.3,281.9,321,256,321L256,321z' />
      </g>
    </svg>
  );
};

export const iosBattery = (
  <svg viewBox='0 0 512 512'>
    <g>
      <path
        opacity='0.5'
        d='M396,144H64c-26.4,0-48,21.6-48,48v128c0,26.4,21.6,48,48,48h332c26.4,0,48-21.6,48-48V192C444,165.6,422.4,144,396,144z
		 M416,320c0,11-9,20-20,20H64c-11,0-20-9-20-20V192c0-11,9-20,20-20h332c11,0,20,9,20,20V320z'
      />
      <path opacity='0.5' d='M464,204.6v102.8c16,0,32-27.7,32-51.4C496,232.3,480,204.6,464,204.6z' />
      <path d='M384,192H76c-6.6,0-12,5.4-12,12v104c0,6.6,5.4,12,12,12h308c6.6,0,12-5.4,12-12V204C396,197.4,390.6,192,384,192z' />
    </g>
  </svg>
);

export const iosCellular = (
  <svg viewBox='0 0 512 512'>
    <path d='M472,432H424a24,24,0,0,1-24-24V104a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,472,432Z' />
    <path d='M344,432H296a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,344,432Z' />
    <path d='M216,432H168a24,24,0,0,1-24-24V248a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24V408A24,24,0,0,1,216,432Z' />
    <path d='M88,432H40a24,24,0,0,1-24-24V312a24,24,0,0,1,24-24H88a24,24,0,0,1,24,24v96A24,24,0,0,1,88,432Z' />
  </svg>
);

export const iosWifi = (
  <svg viewBox='0 0 512 512'>
    <g>
      <path
        d='M256,96c-83,0-166.1,35.8-224,93.7l37.3,39.6c24.3-24.3,52.5-43.3,83.9-56.6C185.8,159,220.3,152,256,152
		s70.2,7,102.7,20.7c31.4,13.3,59.7,32.3,83.9,56.6l37.3-39.6C422.1,131.8,339,96,256,96L256,96z'
      />
      <path
        d='M256,209c-57.2,0-109,23.1-146.6,60.4L149,309c28.7-28.4,66.6-44,107-44c40.4,0,78.3,15.6,107,44l39.6-39.6
		C365,232.1,313.2,209,256,209L256,209z'
      />
      <path d='M256,321c-25.9,0-48.9,12.3-63.6,31.4L256,416l63.6-63.6C304.9,333.3,281.9,321,256,321L256,321z' />
    </g>
  </svg>
);

export const iosHomeIndicator = (
  <svg>
    <rect width='100%' height='100%' rx='2.5' />
  </svg>
);
