var btntranslate =document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

console.log(txtInput);

function clickHandler(){
    outputDiv.innerText="jhhkhkjhhhk " + txtInput.value;
}
btntranslate.addEventListener("click", clickHandler)

