var backgroundColorList = [
    "#86a697",
    "#947A6D",
    "#BC9F77",
    "#577C8A",
    "#72636E",
    "#828282",
    "#707C74",
    "#566C73",
    "#6A8372"
];

// title poet\n poem, line seperated by \n
var poemList = [
    "如梦令（其二）\n 宋 李清照\n昨夜雨疏风骤，浓睡不消残酒。\n试问卷帘人，却道海棠依旧。\n知否？知否？应是绿肥红瘦。",
    "如梦令（其一）\n 宋 李清照\n常记溪亭日暮，沉醉不知归路。\n兴尽晚回舟，误入藕花深处。\n争渡，争渡，惊起一滩鸥鹭。"
];

document.addEventListener(
    "DOMContentLoaded",
    function() {
        // random pick background color
        var randomColorIndex = Math.floor(
            Math.random() * backgroundColorList.length
        );
        var color = backgroundColorList[randomColorIndex];
        document.body.style.backgroundColor = color;

        // insert poem
        var randomPoemIndex = Math.floor(Math.random() * poemList.length);
        var poemString = poemList[randomPoemIndex];
        var poemLineLists = poemString.split("\n");
        document.getElementById("title").innerHTML = poemLineLists[0];
        document.getElementById("poet").innerHTML = poemLineLists[1];
        var content = "";
        for (var i = 2; i < poemLineLists.length; i++) {
            content += "<br/>" + poemLineLists[i];
        }
        document.getElementById("contents").innerHTML = content;
    },
    false
);
