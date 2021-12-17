var dateelement= document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button = document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);

var div=document.createElement('div');

function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);

    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hoursdiff=Math.floor(minutediff/60);
    console.log(hoursdiff);

    var daydiff=Math.floor(hoursdiff/24);
    console.log(daydiff);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

      console.log(currentdate.getMonth());
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

    div.innerHTML= ` Year Difference=${yeardiff}
                 Month Difference=${monthdiff} 
                 Day Difference=${daydiff}
                 Hour Difference=${hoursdiff}
                 Second Difference=${seconddiff}
                  Millisecond Difference=${millisecdiff}
                 `;

   }
   else{
     console.log("give a proper valid date")  
   }



}

document.body.append(div);