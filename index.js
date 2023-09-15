function run() {
  let htmlCode = document.getElementById("html-editor").value;
  let cssCode = document.getElementById("css-editor").value;
  let jsCode = document.getElementById("js-editor").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

  output.contentWindow.eval(jsCode);
}
