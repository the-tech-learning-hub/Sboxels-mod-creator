elements.crude_oil = {
  color: "#470e00",
	behavior: behaviors.LIQUID,
	tick: function(pixel) {
		if (!pixel.burning && pixel.temp > 90 && Math.random() < 0.001) {
			if (pixel.temp < 150) { changePixel(pixel,"propane") }
			else if (pixel.temp < 300) { changePixel(pixel,"gasoline") }
			else { changePixel(pixel,"diesel") }
		}
	},
	reactions: {
		"dirt": { elem1:null, elem2:"mud" },
		"sand": { elem1:null, elem2:"wet_sand" },
		"sap": { elem1:"greek_fire", elem2:"greek_fire" },
		"water": { burning1:true, elem2:"explosion" },
		"steam": { burning1:true, elem2:"explosion" },
		"salt_water": { burning1:true, elem2:"explosion" },
		"sugar_water": { burning1:true, elem2:"explosion" },
		"dirty_water": { burning1:true, elem2:"explosion" },
		"pool_water": { burning1:true, elem2:"explosion" },
		"seltzer": { burning1:true, elem2:"explosion" },
		"coral": { elem2:null, chance:0.01 },
		"hydrogen": { elem1:"sulfur", elem2:"steam", burning1:false, burning2:false, tempMin:90, chance:0.1 }
	},
	category: "liquids",
	tempHigh: 500,
	stateHigh: "fire",
	burn: 5,
	burnTime: 300,
	burnInto: ["carbon_dioxide","fire"],
	viscosity: 250,
	state: "liquid",
	density: 825,
	stain: 0.05
}

elements.gasoline = {
  color: "#f2f077",
  behavior: behaviors.LIQUID,
  category: "liquids",
  tempHigh: 450,
  stateHigh: "fire",
  burn: 50,
  burnTime: 900,
  burniInto: ["carbon_dioxide","fire"],
  viscosity: 1.2,
  state: "liquid",
  density: 715,
	stain: 0
}

elements.diesel = {
  color: "#cfbc88",
  behavior: behaviors.LIQUID,
  category: "liquids",
  tempHigh: 550,
  stateHigh: "fire",
  burn: 45,
  burnTime: 1000,
  burniInto: ["carbon_dioxide","fire"],
  viscosity: 2,
  state: "liquid",
  density: 800,
	stain: 0.01
}

elements.cleaning_agent = {
  color: "#b0e1ff",
  behavior: behaviors.LIQUID,
  category: "liquids",
  tempHigh: 110,
  stateHigh: ["poison_gas","steam"],
  stain: -1,
  viscoscity: 1.05,
  density: 800,
  state: "liquid"
}

if (!elements.soap_water.reactions) elements.water.reactions = {};
elements.water.reactions["alcohol"] = { elem1:"cleaning_agent", elem2:null };


