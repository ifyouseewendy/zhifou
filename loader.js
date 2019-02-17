const BACKGROUND_COLOR_LIST = [
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

document.addEventListener(
    "DOMContentLoaded",
    function() {
        document.body.style.backgroundColor = getRandom(BACKGROUND_COLOR_LIST);

        fetch('https://raw.githubusercontent.com/ifyouseewendy/zhifou/master/example/ci.song.0.json')
            .then(function(response) {
                return response.json();
            }).then(function(poems) {
                console.log(poems);
                const poem = getRandom(poems);
                document.getElementById("title").innerHTML = poem.rhythmic;
                document.getElementById("poet").innerHTML = poem.author;
                document.getElementById("contents").innerHTML = "<br/>" + poem.paragraphs.join("<br/>");
            });
    },
    false
);

function getRandom(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}
