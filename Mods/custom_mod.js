// Generiert mit Sandboxels Mod Studio

elements.super_fuel_pellet = {
  color: "#5e0a00",
  category: "powders",
  behavior: behaviors.POWDER,
  state: "powder",
  density: 1000,
  burn: 100,
  burnTime: 2500,
  fireColor: "#ff6600",
  reactions: {
  },
};

elements.crude_oil = {
  color: "#000000",
  category: "liquids",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 1000,
  tempHigh: 300,
  stateHigh: "average_fuel",
  burn: 5,
  burnTime: 1200,
  fireColor: "#a26a00",
};

elements.average_fuel = {
  color: "#fff9c8",
  category: "liquids",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 700,
  tempHigh: 500,
  stateHigh: "fire",
  burn: 65,
  burnTime: 1500,
  fireColor: "#ffdc18",
  reactions: {
    "charcoal": { elem1: "super_fuel_pellet", chance: 0.40 },
  },
};

elements.methane_gas = {
  color: "#bbffb7",
  category: "gases",
  behavior: behaviors.GAS,
  state: "gas",
  density: 100,
  tempLow: -162,
  stateLow: "lng",
  burn: 90,
  burnTime: 10,
  fireColor: "undefined",
};

elements.lng = {
  color: "#3b82f6",
  category: "liquids",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 1000,
  tempHigh: -161,
  stateHigh: "methane_gas",
};

