//Mass Index Calculator
document.addEventListener("DOMContentLoaded", ()=>{
  const bodyMass = document.querySelector("#body_mass");
  const height = document.querySelector("#height");
  const calculateMass = document.querySelector("#calculate_mass");
  const resultLabel = document.querySelector("#body_mass_index");

  const massCalculation = () => {
    if(bodyMass.value === '' || height === ''){
      resultLabel.innerHTML = 'You must set a value for both fields.';
    }else{
      let result = (bodyMass.value/Math.pow(height.value,2)).toFixed(2);
      if(result <= 0.009){
        resultLabel.innerHTML = "The result is lower than 0.00 kg/m², you should try with other values.";
        bodyMass.value = "";
        height.value= "";
      }else{
        resultLabel.innerHTML = result + ' kg/m²';
      }
    }
    resultLabel.classList.remove('hidden');
    resultLabel.classList.add('visible');
  }
  calculateMass.addEventListener('click', massCalculation, false);
});
