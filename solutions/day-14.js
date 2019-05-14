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
