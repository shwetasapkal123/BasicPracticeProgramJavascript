let diceNum=Math.floor(Math.random()*10)%6;
switch(diceNum)
{
    case 0: console.log("zero");
    break;
    case 1:console.log("one");break;
    case 2:console.log("two");break;
    case 3:console.log("three");break;
    case 4:console.log("four");break;
    case 5:console.log("five");break;
    default:console.log("out of range");
}