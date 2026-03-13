let display = document.getElementById('input');
function ButtonElement(input){
  display.value += input;
}
function CalculateButtonElement(){
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value='Error';
  }
  
}
function ClearButtonElement(){
  display.value='';
}
function deleteButtonElement(){
  display.value = display.value.slice(0,-1);
}