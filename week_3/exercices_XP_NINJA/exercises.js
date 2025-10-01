// Exercise 1 : Checking the BMI
let person1 = {
  FullName: "Sara Bezari",
  Mass: 50,     
  Height: 1.5,  
  calcBMI: function() {
    return this.Mass / (this.Height ** 2);
  }
};

let person2 = {
  FullName: "Hind Tebari",
  Mass: 60,     
  Height: 1.6,  
  calcBMI: function() {
    return this.Mass / (this.Height ** 2);
  }
};

// Function to compare BMIs
function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    return `${p1.FullName} has a bigger BMI (${bmi1.toFixed(2)}) than ${p2.FullName} (${bmi2.toFixed(2)})`;
  } else if (bmi2 > bmi1) {
    return `${p2.FullName} has a bigger BMI (${bmi2.toFixed(2)}) than ${p1.FullName} (${bmi1.toFixed(2)})`;
  } else {
    return `${p1.FullName} and ${p2.FullName} have the same BMI (${bmi1.toFixed(2)})`;
  }
}

// Test it
console.log(compareBMI(person1, person2));

// Exercise 2 : Grade Average
gradesList=[12,20,13,17,16]

function findAvg(gradesList){
  sum=0
    for(i=0 ; i<gradesList.length ; i++){
        sum+=gradesList[i]
    }
    average=sum/gradesList.length
    if (average>=65){
        alert("success")
    }else{
        alert("faild")
    }
}
findAvg(gradesList)




