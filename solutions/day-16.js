function setSpeed(speed) {
  let currentSpeed = parseInt(speed);
  
  if (currentSpeed > -1) {
    navigation.speed = parseInt(speed); 
  } else {
    return "Number must be positive";
  }
}
