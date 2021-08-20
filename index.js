console.log("Hello from JavaScript");

let btn = document.querySelector("#btn-submit");
console.log(btn);

let txtInput = document.querySelector("#text-area");
console.log(txtInput);

let outputDiv = document.querySelector("#output");
console.log(outputDiv);

// translation api
// https://funtranslations.com/wakandan
let serverUrl = "https://api.funtranslations.com/translate/pirate.json";

// wire fetch call in app
function getTranslationURL(text) {

    return serverUrl + "?" + "text=" + text;
}

// error handling

// clickHandler 
function clickEventHandler() {

    console.log("Clicked");

    let txtInputValue = txtInput.value;
    console.log(txtInputValue);


    //calling the server for processing
    fetch(getTranslationURL(txtInputValue))
        .then(response => response.json())
        .then(json => {
            console.log(json.contents.translated);
        })
}



btn.addEventListener("click", clickEventHandler);
