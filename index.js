function takeANumber(katzDeliLine, name){
//  var arraycounter= 0;
    var counter = katzDeliLine.length;
    katzDeliLine.push(name);
    //console.log(`Welcome, ${name}. You are number ${counter} in line.`);
    counter++;
    //arraycounter++;
    return (`Welcome, ${name}. You are number ${counter} in line.`);
  };

  /*
  for(var counter = 1; counter < katzDeliLine; counter++){
    katzDeliLine.push(name);
    console.log(`Welcome, ${name}. You are number ${counter} in line.`);
  }*/

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  while(katzDeliLine.length > 0){

    return "Currently serving "  + katzDeliLine.shift() + ".";
    //katzDeliLine.shift();
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  if(katzDeliLine.length > 0){
    var peopleInLine;
    for(var counter = 0; counter < katzDeliLine.length; counter++){
      peopleInLine = `${counter+1}. ${katzDeliLine[counter]}, `;

    }return "The line is currently: " + peopleInLine;
  }//return "The line is currently: " + peopleInLine;
}
