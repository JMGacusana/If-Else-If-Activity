// If Else If Activity
let yourGrade = parseInt(prompt("Enter your grade: "));

// If Else If Statement
if(yourGrade >= 90){                           // this will execute the grade 90 and above
   console.log("Exellent!");
}else if (yourGrade >= 80 && yourGrade <= 89){ // this will execute the grade from 80-89
   console.log("Good!");
}else if (yourGrade >= 70 && yourGrade <= 79){ // this will execute the grade from 70-79
   console.log("Fair");
}else {                                        // this will execute the grade below 70
   console.log("Needs Improvement");
}