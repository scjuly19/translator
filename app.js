var input = document.querySelector("#txt-area");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

const baseUrl = "https://api.funtranslations.com/translate/minion.json";
function getUrl(text) {
  return baseUrl + "?" + "text=" + text;
}
function errorHandler(){
    alert("Some error occured!! Try after sometime.")
}
btn.addEventListener("click", function () {
    output.innerHTML="Loading..."
  fetch(getUrl(input.value))
    .then((response) => response.json())
    .then((res) => {
      if(res.success){
          output.innerHTML=res.contents.translated;
      }
      else{
          errorHandler()
      }
    })
    .catch(errorHandler)
});
