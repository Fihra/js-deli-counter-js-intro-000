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

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  if(line.length > 0){
    var peopleInLine;
    for(var counter = 0; counter < line.length; counter++){
      peopleInLine = `The line is currently: ${counter+1}. ${line[counter]}, `;
      

    }return peopleInLine;
  }//return "The line is currently: " + peopleInLine;
}
