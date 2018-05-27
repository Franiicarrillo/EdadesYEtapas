const age= parseInt(prompt("¿Cuantos años tienes?"))
  if(age==0){
  alert("You are baby n.n")
} else if(age>0 && age<3){
  alert("You are categorized as Toddler")
} else if(age==3){
  alert("You are finishing of being toddler and now you are going to be Preschool")
} else if(age ==4){
  alert("You are PreSchool")
} else if(age==5){
  alert("You are finishing of being preschool and now you are going to be Grade Schooler")
} else if (age>=6 && age<=11){
  alert("You are categorized as a Grade Schooler")
} else if(age==12){
  alert("You are finishing of being a Grade Schooler and you are going to be a teen")
} else if(age>=13 && age<=17){
  alert("You are categorized as a teen")
} else if(age==18){
  alert("You are finishing of being a teen and you are going to be young adult")
} else if(age>=19 && age<21){
  alert("You are categorized as a young adult")
} else if(age==21){
  alert("You are finishing of being a young adult and is time to grow up")
} else{
  alert("You are and adult :)")
}
