var svg = document.getElementById('mySVG');
var ns = "http://www.w3.org/2000/svg";
var stopButton = document.getElementById("stop");
var clearButton = document.getElementById("clear");
var growButton = document.getElementById("grow");
var dvdButton = document.getElementById("dvd");
var frame;
var increment = 1;
var dx = 2;
var dy = 2;
var x;
var y;

var stop = function(){
    window.cancelAnimationFrame(frame);
}

var clear = function(){
    while(svg.hasChildNodes()){
        svg.removeChild(svg.firstChild);
    }
    radius = 1;
    increment = 1;
    x = 20 + Math.random() * (svg.getBoundingClientRect().width - 40);
    y = 20 +  Math.random() * (svg.getBoundingClientRect().height - 40);
}

var animateGrow = function(){
    x = svg.getBoundingClientRect().width/2;
    y = svg.getBoundingClientRect().height/2;
    var radius = 1;
    var checkBounds = function(){
        if (radius == svg.getBoundingClientRect().width/2 || radius == svg.getBoundingClientRect().height/2 || radius == 0){
            increment *= -1;
        }
    }

    var drawCircle = function(){
        while(svg.hasChildNodes()){
            svg.removeChild(svg.firstChild);
        }
        var newCircle = document.createElementNS(ns, "circle");
        newCircle.setAttribute("cx", x);
        newCircle.setAttribute("cy", y);
        newCircle.setAttribute("r", radius);
        newCircle.setAttribute("fill", "red");
        svg.appendChild(newCircle);
        frame = window.requestAnimationFrame(drawCircle);
        checkBounds(); 
        radius += increment;
    }
    stop();
    drawCircle();
}

var animateDVD = function(){
    x = 20 + Math.random() * (svg.getBoundingClientRect().width - 40);
    y = 20 +  Math.random() * (svg.getBoundingClientRect().height - 40); 
    var checkBounds = function(){
        if (x-20 <= 0 || x + 20 >= svg.getBoundingClientRect().width){
            dx *=-1;
        } 
        if(y - 20 <= 0 | y + 20 >= svg.getBoundingClientRect().height){
            dy *= -1;
        }
    }

    var drawCircle = function(){
        while(svg.hasChildNodes()){
            svg.removeChild(svg.firstChild);
        }
        var newCircle = document.createElementNS(ns, "circle");
        newCircle.setAttribute("cx", x);
        newCircle.setAttribute("cy", y);
        newCircle.setAttribute("r", 20);
        newCircle.setAttribute("fill", "red");
        svg.appendChild(newCircle);
        frame = window.requestAnimationFrame(drawCircle);
        x += dx;
        y += dy;
        checkBounds();
    }
    stop();
    drawCircle();
}

growButton.addEventListener("click", animateGrow);
dvdButton.addEventListener("click", animateDVD);
stopButton.addEventListener("click", stop);
clearButton.addEventListener("click", clear);