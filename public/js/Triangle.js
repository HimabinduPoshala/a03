function computeArea(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0){
  alert("The sides of a triangle cannot be zero or negative");
  throw Error('One of the give sides is not valid, please provide positive values');
  //return 0;
  } else if (side1 > 0 && side2 > 0 && side3 > 0){
  var perimeter = (side1 + side2 + side3)/2;
  var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
  return area
  } else {
  alert("Check for Missing arguments, please provide all the sides  values");
  throw Error('One of the give sides is not valid, please provide positive values');
}
}

function showArea(){
let res = computeArea(parseInt(document.getElementById('side1').value),
              parseInt(document.getElementById('side2').value),
              parseInt(document.getElementById('side3').value));
//document.getElementById('result').innerHTML = res
$("#result").html(res)
}