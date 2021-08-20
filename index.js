console.log("Hello from JavaScript");

let btn = document.querySelector("#btn-submit");
console.log(btn);

let txtInput = document.querySelector("#text-area");
console.log(txtInput);

let outputDiv = document.querySelector("#output");
console.log(outputDiv);

// translation api
// https://funtranslations.com/api/pirate
let serverUrl = "https://api.funtranslations.com/translate/pirate.json";

// wire fetch call in app
function getTranslationURL(text) {

    return serverUrl + "?" + "text=" + text;
}

// error handling
function errorHandler(error) {

    console.log("Error Occured: ", error);
    aloert("Some Error Occured");

}

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

            let translatedText = json.contents.translated;
            
            
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}



btn.addEventListener("click", clickEventHandler);
