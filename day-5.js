function findModuleIndex(findName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === findName && availableModules[i].essential) {
      return i;
    }
  }
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
