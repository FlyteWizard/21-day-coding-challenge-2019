// Global Variables

// navigation
var navigation = {
  x: -2,
  y: 4,
  z: 7,
  speed: "raaaaid"
};

// ship
var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

// radio
var radio = {
  range: {
    low: 88,
    high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// availableModules
const availableModules = [
  {
    name: "module1",
    size: 1,
    enabled: true,
    essential: false
  },
  {
    name: "module2",
    size: 2,
    enabled: false,
    essential: false
  },
  {
    name: "module3",
    size: 3,
    enabled: true,
    essential: true
  }
];
