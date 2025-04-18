// Calculate the area of a circle
const calculateArea = (radius) => {
  if (radius <= 0) {
    throw new Error("Radius must be positive");
  }
  return Math.PI * radius * radius;
};

console.log(calculateArea(5));