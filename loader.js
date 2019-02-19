document.addEventListener(
    "DOMContentLoaded",
    function() {
        document.body.style.backgroundColor = getRandom(BACKGROUND_COLOR_LIST);

        getPoem().then(poem => renderPoem(poem));
    },
    false
);

function renderPoem(poem) {
    document.getElementById("title").innerHTML = poem.rhythmic;
    document.getElementById("poet").innerHTML = poem.author;
    document.getElementById("contents").innerText = poem.content;
}

function getPoem() {
    return new Promise(
        function(resolve, reject) {
            chrome.storage.sync.get(['poems'], function(result) {
                const poems = (!result.poems || result.poems.length === 0) ?  [...DEFAULT_POEMS] : result.poems;
                const poem = poems.shift();

                if (poems.length === 0) {
                    fetchPoems().then(function(poems) {
                        chrome.storage.sync.set({ "poems": poems });
                    });
                } else {
                    chrome.storage.sync.set({ "poems": poems });
                }

                resolve(poem);
            })
        }
    )
}

function fetchPoems() {
    const query = { query: "{ ci { author rhythmic content }}" };

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
                return response.json().then(res => res.data.ci);
            } else {
                return DEFAULT_POEMS;
            }
        }
    );
}

function getRandom(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}

const DEFAULT_POEMS = [
    {
        "author": "李清照",
        "content": "昨夜雨疏风骤，浓睡不消残酒。\n试问卷帘人，却道海棠依旧。\n知否？知否？\n应是绿肥红瘦。",
        "rhythmic": "如梦令"
    },
    {
        "author": "李清照",
        "content": "常记溪亭日暮，沈醉不知归路。\n兴尽晚回舟，误入藕花深处。\n争渡，争渡，\n惊起一滩鸥鹭。",
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
