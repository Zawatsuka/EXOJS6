let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
var text = "";
var i;
for (i = 0; i < languages.length; i++) {
  text += languages[i] + "<br>";
}
document.getElementById("language").innerHTML = text;