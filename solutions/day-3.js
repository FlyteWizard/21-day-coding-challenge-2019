function countEssential() {
  let essentialCount = 0;
  for (let i = 0; i <  availableModules.length; i++) {
    if (availableModules[i].essential === true) {
      essentialCount++;
    }
  }
  return essentialCount;
}
