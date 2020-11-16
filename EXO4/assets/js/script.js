let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let text = "";
let i;
days.forEach((value,index) => {
    if (index <= 4) {
        text += '<p>' + value + '</p>';
        document.getElementById("day").innerHTML = text;
    } else {
        text += '<p style="font-weight:bold" >' + value + '</p>';
        document.getElementById("day").innerHTML = text;
    }
});
