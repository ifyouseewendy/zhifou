document.addEventListener(
    "DOMContentLoaded",
    function() {
        document.body.style.backgroundColor = getRandom(BACKGROUND_COLOR_LIST);

        fetchPoems().then(
            function(poems) {
                const poem = getRandom(poems);
                document.getElementById("title").innerHTML = poem.rhythmic;
                document.getElementById("poet").innerHTML = poem.author;
                document.getElementById("contents").innerText = poem.content;
            }
        );
    },
    false
);

function fetchPoems() {
    const query = { query: "{  ci {    author    rhythmic    content  }}" };

    return fetch(
        'http://localhost:3000/graphql',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query),
        }
    ).then(
        function(response) {
            if (response.status == 200) {
                return response.json();
            } else {
                return POEMS;
            }
        }
    ).then(
        (poems) => poems.data.ci
    );
}

function getRandom(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}

const POEMS = {
    data: {
        ci: [
            {
                "author": "李清照",
                "content": [
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
                "content": [
                    "昨夜雨疏风骤。",
                    "浓睡不消残酒。",
                    "试问卷帘人，却道海棠依旧。",
                    "知否。",
                    "知否。",
                    "应是绿肥红瘦。"
                ],
                "rhythmic": "如梦令"
            }
        ]
    }
};

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
