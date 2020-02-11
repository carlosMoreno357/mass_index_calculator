//Mass Index Calculator
document.addEventListener("DOMContentLoaded", ()=>{
  const bodyMass = document.querySelector("#body_mass");
  const height = document.querySelector("#height");
  const calculateMass = document.querySelector("#calculate_mass");
  const resultLabel = document.querySelector("#body_mass_index");

  const massCalculation = () => {
    bodyMass.value === '' || height === ''
    ? alert("You must set a value for both fields")
    : resultLabel.innerHTML = (bodyMass.value/Math.pow(height.value,2)).toFixed(2) + ' kg/m²'
  }
  
  calculateMass.addEventListener("click", massCalculation, false);
});
