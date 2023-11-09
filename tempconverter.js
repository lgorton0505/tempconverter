function fahrenToCel(){
   let inputValue = document.getElementById("fah").value;
   
   console.log(inputValue);

   let result = (inputValue - 32) * 5/9

   console.log(result);

   document.getElementById("Celcius").innerHTML = result.toFixed(2);

}

function celToFah(){
    let inputValue = document.getElementById("cel").value;

    console.log(inputValue);

   let result = (inputValue * 9/5) + 32

   console.log(result);

   document.getElementById("Fahrenheit").innerHTML = result.toFixed(2);
}