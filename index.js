// Question 4
for (var sayi = 1; sayi < 1000; sayi++) {
  for (var i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      break;
    }
  }
  if (sayi == i||sayi==1) {
    console.log(sayi);
  }
}
console.log("******************");
//Question3
for (var i = 1; i < 1000; i++) {
  var sum = 0
  for (var y = 1; y < i; y++) {

    if (i % y == 0) {
      sum += y;
    }
  }
  if (sum == i) {
    console.log(i);
  }
}
console.log("*************")
//Question 2
function findFriend(first, second) {
  var firstSum = 0;
  var secondSum = 0;
  for (var i = 1; i < first; i++) {

    if (first % i == 0) {
      firstSum += i;
    }
  }
  for (var y = 1; y < second; y++) {

    if (second % y == 0) {
      secondSum += y;
    }
  }
  if (firstSum == second && secondSum == first) {
    console.log(first + " and " + second + " are friend number.");

  }
  else {
    console.log(first + " and " + second + " are not friend number");
  }
}
findFriend(220, 284);
console.log("**************")
//Question1
function isPrimeNumber(...numbers) {
  for (var i = 0; i < numbers.length; i++) {
    for (var y = 2; y < numbers[i]; y++) {
      if (numbers[i] % y == 0) {
        break;
      }
    }
    if (numbers[i] == y) {
      console.log(numbers[i]);

    }
  }
}
isPrimeNumber(13, 284, 12, 13, 7, 8, 9, 21,3,5,9);