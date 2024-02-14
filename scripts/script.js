function calculateTriangleArea(){
  const base = getInputValueById('triangle-base');
  const height = getInputValueById('triangle-height');
  const area = 0.5 * base * height; 
  setInnerTextById("triangle-area",area)
}
function calculateRectangleArea(){
  const width = getInputValueById('rectangle-width');
  const length = getInputValueById('rectangle-length');
  const area = width * length; 
  setInnerTextById("rectangle-area",area)
}

function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText =  inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
function setInnerTextById(elementId,area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}