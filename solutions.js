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

// Call calibrateX - DEPRECATED
//calibrateX();

// calibrateY
function calibrateY() {
  let signal = null;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.y = signal;
      break;
    }
  }
}

// calibrateZ
function calibrateZ() {
  let signal = null;
  for (let i = 0; i < 60; i++) {
    signal = checkSignal();
    if (signal !== undefined) {
      navigation.z = signal;
      break;
    }
  }
}

// calibrate
function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

// setSpeed
function setSpeed(speed) {
  let currentSpeed = parseInt(speed);
  
  if (currentSpeed > -1) {
    navigation.speed = parseInt(speed); 
  } else {
    return "Number must be positive";
  }
}

// activateAntenna
function activateAntenna() {
  ship.antenna.active = true;
}

// Call activateAntenna - DEPRECATED
//activateAntenna();

// sendBroadcast
function sendBroadcast() {
  for (let i = 0; i < 100; i++) {
    broadcast();
  }
}

// Call sendBroadcast - DEPRECATED
//sendBroadcast();

// configureBroadcast
function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}

// Call configureBroadcast
configureBroadcast();

// decodeMessage
function decodeMessage(message) {
  let currentMessage = message
  .replace(/0/g, 'o')
  .replace(/1/g, 'i')
  .replace(/2/g, 'u')
  .replace(/3/g, 'e')
  .replace(/4/g, 'a')
  .replace(/5/g, 'y')
  .replace(/id/g, 'ld');

  return currentMessage;
}

// returnToEarth
function returnToEarth() {
  let xCoord = broadcast("x");
  let yCoord = broadcast("y");
  let zCoord = broadcast("z");
  
  let xDecoded = decodeMessage(xCoord);
  let yDecoded = decodeMessage(yCoord);
  let zDecoded = decodeMessage(zCoord);
  
  let xIntCoord = parseInt(xDecoded, 16);
  let yIntCoord = parseInt(yDecoded, 16);
  let zIntCoord = parseInt(zDecoded, 16);
  
  navigation.x = xIntCoord;
  navigation.y = yIntCoord;
  navigation.z = zIntCoord;
}

// Call returnToEarth
returnToEarth();
