function myGrading(score) {
  var gscore;

  switch (true) {
    case score <= 100 && score >= 90:
      gscore = "A";
      break;
    case score <= 89 && score >= 80:
      gscore = "B";
      break;
    case score <= 79 && score >= 70:
      gscore = "C";
      break;
    case score <= 69 && score >= 60:
      gscore = "D";
      break;
    case score <= 59 && score >= 0:
      gscore = "F";
      break;

    case score > 100 && score < 0:
      gscore = "INVALID SCORE";
      break;

    default:
      return "INVALID STRING";
  }

  var last_digit = score % 10;
  if (last_digit <= 2 && last_digit >= 0 && score != 100) {
    gscore += "-";
  } else if ((last_digit <= 9 && last_digit >= 7) || score == 100) {
    gscore += "+";
  }

  return gscore;
}

console.log(myGrading(91));
console.log(myGrading(72));
console.log(myGrading(100));
console.log(myGrading(105));
console.log(myGrading(-100));
console.log(myGrading(33));
console.log(myGrading(91));
console.log(myGrading(75));
