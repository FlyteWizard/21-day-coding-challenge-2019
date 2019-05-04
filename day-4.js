function findLifeSupport() {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === "life-support") {
      loadModule(i);
    }
  }
}

function loadModule(index) {
  availableModules[index].enabled = true
  ship.modules.push(availableModules[index]);
}

findLifeSupport();
