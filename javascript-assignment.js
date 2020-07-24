//feetToMile
function feetToMile(feet) 
{
    if(feet > 0)
    {
    var feetInMile = feet/5280;
    return feetInMile;
    }           
    
    else
    {
      return false;
    }  
  }

//woodCalculator
function woodCalculator(chair, table, bed) 
{
    if(chair < 0 || table < 0 || bed < 0)
    {
      return false;
    }           
    
    else
    {
      var cubicFeetWood = chair*1 + table*3 + bed*5;
      return cubicFeetWood;
    }  
  }

  //brickCalculator
function brickCalculator(floor) 
{
    if(floor < 0)
    {
      return false;
    }           
    
    else
    {
      if(floor<=10)
        var numberOfBricks = floor*15*1000;
      else if(floor>10 && floor<=20)
        var numberOfBricks = 10*15*1000 + (floor-10)*12*1000;
      else
        var numberOfBricks = 10*15*1000 + 10*12*1000 + (floor-20)*10*1000;

      return numberOfBricks;
    }  
  }

  //tinyFriend
function tinyFriend(tiny) 
{
  var shortestArray = [];
  var shortest = tiny[0];

    for (var i=0; i < tiny.length; i++) 
    {
      if (tiny[i].length < shortest.length) 
      {
        shortest = tiny[i];        
      }
    }

    //if there exist mutiple shortest
    for (var j=0; j < tiny.length; j++) 
    {
      if (tiny[j].length == shortest.length) 
      {
        shortestArray.push(tiny[j]);
      }
    }

  return shortestArray;
}

var feetInMile = feetToMile(45678);
var cubicFeetWood = woodCalculator(10,2,3);
var numberOfBricks = brickCalculator(25);
var shortest = tinyFriend(['Messi', 'A', 'Ronaldo', 'AB', 'Neymar', 'CD', 'E', 'Zidane', 'Suarez', 'Rai', 'J']);

//print feetInMile
if(feetInMile==false)
console.log("Please insert a positive number");
else
console.log(feetInMile+" mile");

//print woodCalculator
if(cubicFeetWood==false)
console.log("Please insert all in positive number");
else
console.log(cubicFeetWood+" cubic feet");

//print brickCalculator
if(numberOfBricks==false)
console.log("Please insert a positive number");
else
console.log(numberOfBricks+" pieces of bricks");

//tinyFriend
console.log(shortest);



  
