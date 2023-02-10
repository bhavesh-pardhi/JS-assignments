let great = prompt("Enter number")
great = Number.parseInt(great)

if(great<=25)
{
  console.log("F")
}
else{
  if(great>25&&great<=45)
    console.log(great + " E")
  else if(great>45&&great<=50)
    console.log(great + " D")
  else if(great>50&&great<=60)
    console.log(great + " C")
  else if(great>60&&great<=80)
    console.log(great + " B")
  else if(great>80&&great<=100)
    console.log(great + " A")
  else
    console.log("invalid marks")
  
}