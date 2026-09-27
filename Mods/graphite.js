// Generiert mit Sandboxels Mod Studio

elements.graphite = {
  color: "#333333",
  category: "solids",
  behavior: behaviors.WALL,
  state: "solid",
  density: 2,
  tempHigh: 12000,
  stateHigh: "molten_carbons",
};

elements.molten_carbons = {
  color: "#ad3d00",
  category: "states",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 4,
  tempLow: 11990,
  stateLow: "graphite",
  emit: "fire",
  emitChance: 100,
};

