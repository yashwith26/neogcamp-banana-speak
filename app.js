var btntranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL +"?" +"text=" + text
    
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server! try again after some time")
}

function clickHandler(){
    
    var inputText=txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText=translatedText;
    })
        
    .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler)

