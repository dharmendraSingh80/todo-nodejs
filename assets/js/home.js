
// set random color for different category tasks
var x = document.getElementsByClassName("task-category");
var i;
var c;

//specify the colors you want to use
var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];
var d = colors.length;

for (i = 0; i < x.length; i++){
    while (i < d) {
        c = i;
        var random_color = colors[c];
        x[i].style.backgroundColor = random_color;
        i++;
    }
    while (i >= d) {
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        x[i].style.backgroundColor = random_color;
        i++;
    }
}

