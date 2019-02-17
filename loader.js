document.addEventListener(
    "DOMContentLoaded",
    function() {
        document.body.style.backgroundColor = getRandom(BACKGROUND_COLOR_LIST);

        fetch('https://raw.githubusercontent.com/ifyouseewendy/zhifou/master/example/ci.song.0.json')
            .then(
                function(response) {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        return POEMS;
                    }
                }
            ).then(
                function(poems) {
                    const poem = getRandom(poems);
                    document.getElementById("title").innerHTML = poem.rhythmic;
                    document.getElementById("poet").innerHTML = poem.author;
                    document.getElementById("contents").innerHTML = "<br/>" + poem.paragraphs.join("<br/>");
                }
            );
    },
    false
);

function getRandom(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}

const POEMS = [
  {
    "author": "李清照",
    "paragraphs": [
      "常记溪亭日暮。",
      "沈醉不知归路。",
      "兴尽晚回舟，误入藕花深处。",
      "争渡。",
      "争渡。",
      "惊起一滩鸥鹭。"
    ],
    "rhythmic": "如梦令"
  },
  {
    "author": "李清照",
    "paragraphs": [
      "昨夜雨疏风骤。",
      "浓睡不消残酒。",
      "试问卷帘人，却道海棠依旧。",
      "知否。",
      "知否。",
      "应是绿肥红瘦。"
    ],
    "rhythmic": "如梦令"
  }
];

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
