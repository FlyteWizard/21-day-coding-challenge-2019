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

returnToEarth();
