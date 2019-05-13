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

calibrateX();
