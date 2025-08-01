console.log("************** DELIVERABLE 03 *********************");

interface Planet {
  name: string;
  type: string;
  diameter: number;
  moons?: string[];
  ringSystem: boolean;
}

const jupiter: Planet = {
  name: "Jupiter",
  type: "Gas giant",
  diameter: 139820,
  moons: ["Io", "Europa", "Ganymede", "Callisto"],
  ringSystem: true,
};

const mercury: Planet = {
  name: "Mercury",
  type: "Terrestrial",
  diameter: 4879,
  ringSystem: false,
};

console.log("The original objects are:", jupiter, mercury);

// CLONE
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source
function clone(source: Planet): Planet {
  return { ...source };
}
const clonedJupiter = clone(jupiter);
console.log("/ CLONE / The cloned object is:", clonedJupiter);

// MERGE
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
function merge(source: Planet, target: Planet): Planet {
  return { ...target, ...source };
}
const mergedPlanet = merge(mercury, jupiter);
console.log("/ MERGE / The merged object is:", mergedPlanet);
