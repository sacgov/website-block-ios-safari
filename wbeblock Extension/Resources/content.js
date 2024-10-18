browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});

function getDate () {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    return `${day}-${month}-${year}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const keywords = ["swiggy","lichess"];
const url = window.location.href;
let keywordMatched = "";

for(let i =0;i<keywords.length;i++){
    if(url.includes(keywords[i])) {
        keywordMatched = keywords[i];
    }
}

keywordMatched = capitalizeFirstLetter(keywordMatched)



document.body.innerHTML = `<h1 style="text-align:center"> <br><br> <br>Blocked  <p style="color:red;text-align:center">${keywordMatched}</p></h1>`
