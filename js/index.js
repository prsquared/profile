var theta = [];

var setup = function (n, r, id) {
    var main = document.getElementById(id);
    var mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
    var lis = document.getElementById("circle-container").getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].posx = Math.round(r * (Math.cos(theta[i]))) + 'px';
        lis[i].posy = Math.round(r * (Math.sin(theta[i]))) + 'px';
        lis[i].style.position = "absolute";
        lis[i].style.top = ((mainHeight / 2) - parseInt(lis[i].posy.slice(0, -2))) + 'px';
        lis[i].style.left = ((mainHeight / 2) + parseInt(lis[i].posx.slice(0, -2))) + 'px';
    }
};

var generate = function (n, r, id) {
    var frags = 360 / n;
    var excludedposArray = [3, 4, 5, 6, 7, 13, 14, 15, 16, 17];
    for (var i = 0; i <= n; i++) {
        if (!excludedposArray.includes(i))
            theta.push((frags / 180) * i * Math.PI);
    }
    setup(n, r, id)
}
generate(20, 150, 'user-box-outer');



