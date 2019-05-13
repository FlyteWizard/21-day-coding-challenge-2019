// powerOn
function powerOn() {
  ship.powerOn = true;
}

// countModules
function countModules() {
  return availableModules.length;
}

// countEssential
function countEssential() {
  let essentialCount = 0;
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].essential === true) {
      essentialCount++;
    }
  }
  return essentialCount;
}

// findLifeSupport - DEPRECATED
function findLifeSupport() {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === "life-support") {
      loadModule(i);
    }
  }
}

// loadModule
function loadModule(index) {
  availableModules[index].enabled = true
  ship.modules.push(availableModules[index]);
}

// Call findLifeSupport - DEPRECATED
//findLifeSupport();

// findModuleIndex
function findModuleIndex(findName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === findName && availableModules[i].hasOwnProperty('essential')) {
      return i;
    }
  }
}

// loadModule Life-Support
loadModule(findModuleIndex("life-support"));
// loadModule Propulsion
loadModule(findModuleIndex("propulsion"));
// loadModule Navigation
loadModule(findModuleIndex("navigation"));

// resetLARRY
function resetLARRY() {
  for (let i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

// Call resetLARRY
resetLARRY();

// loadModule Communication
loadModule(findModuleIndex("communication"));

// setMessage
function setMessage() {
  let navigationJSON = JSON.stringify(navigation);
  radio.message = navigationJSON;
}

// Call setMessage
setMessage();

// activateBeacon
function activateBeacon() {
  radio.beacon = true;
}

// set Frequency
function setFrequency() {
  let low = radio.range.low;
  let high = radio.range.high;
  
  let frequency = ((low) + (high)) / 2;
  
  radio.frequency = frequency;
}

// initialize
function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

// calibrateX
function calibrateX() {
  let signal = null;
  for (let i = 0; i < 12; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}

// Call calibrateX
calibrateX();
