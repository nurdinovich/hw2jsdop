var numbers = [100, 55, 15, 300, 20];
var sum = 0;
for (var i = 0; i < numbers.length; i++)
 {
    sum += numbers[i];
  }
  console.log("Сумма значений: " + sum);



  var number = [100, 55, 20];
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    console.log(sum + " + " + number[i] + " = " + (sum + number[i]));
    sum += number[i];
  }