let text = "";
let i;
for (i = 2020; i < 2031; i++) {

if ((i % 4 === 0 && i % 100 > 0) || (i % 400 === 0)){
    document.write('<p style="color:red">'+ i +'</p>');
    console.log(i);
}
else{
  document.write("<p>"+ i +"</p>");
}
}
document.getElementById("années").innerHTML = text;