const units = [
  {
    name: 'Commander',
    imageSrc: '/images/robots-commander.png',
    prices: [17, 17 / 2],
  },
  {
    name: 'Mage',
    imageSrc: '/images/robots-mage.png',
    prices: [17, 17 / 2],
  },
  {
    name: 'Heavy Support',
    imageSrc: '/images/robots-heavy-support.png',
    prices: [21, 21 / 2],
  },
  {
    name: 'Trooper',
    imageSrc: '/images/robots-trooper.png',
    prices: [32, 32 / 2],
  },
]

const factionToInfo = {
  japanese: {
    pluralName: 'Japanese',
    backgroundSrc: '/images/japanese-logo.png',
    foregroundSrc: '/images/japanese-trooper-cropped.png',
    flipImage: true,
    infoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    units,
  },
  aztecs: {
    pluralName: 'Aztecs',
    backgroundSrc: '/images/aztecs-logo.png',
    foregroundSrc: '/images/japanese-trooper-cropped.png',
    infoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    units,
  },
}

export default factionToInfo
