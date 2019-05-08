function findModuleIndex(findName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === findName && availableModules[i].essential) {
      return i;
    } else if (availableModules[i].name === findName) {
      return i;
    }
  }
}

loadModule(findModuleIndex("communication"));
