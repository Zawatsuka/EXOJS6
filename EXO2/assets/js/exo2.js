let text = "";
let i;
for (i = 0; i < 101; i++) {
  if(i % 15 != 0){
    text += "<div><p> le chiffre est " + i + "</p></div>"
    document.getElementById("number").innerHTML = text;
  }
  else{
    text += "<div><p>...</p></div>"
    document.getElementById("number").innerHTML = text;
  }
}
