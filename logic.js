// sample js file
x = 10; // variable x has a value of 10
userName = "Rocio"; // String

teams =  new Array();
teams = ["Panthers","Seahawks", "Colts"]
wins = [8,12,11]
losses = [4,1,2]


console.log(teams);
console.log("wins: " + wins);
console.log("losses: "+ losses);

console.log(teams.length);

document.write("The" + teams [0] + " had " + wins [0] + "wins. <br/>");
document.write("There are " + teams.length + "in the league.");

for (var i=0; i< teams.length; i++){
  //  console.log(teams[i]);
    // document.write("The" + teams [i] + " had " + wins [i] + "wins");
if (wins[i]>=10) {
    console.log(teams[i] + " this is a good team.");
}else{
    console.log(teams[i] + " you suck");
        }
}
    //code
