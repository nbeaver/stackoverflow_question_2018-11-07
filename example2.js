var newHTML = document.createElement('html');
var newHead = document.createElement('head');
var newMeta = document.createElement('meta');
newMeta.charset = "utf-8";
newHead.appendChild(newMeta);
newHTML.append(newHead);
var tempAnchor = window.document.createElement('a');
HTMLBlob = new Blob([newHTML.outerHTML], {
  type: 'text/html; charset=UTF-8'
});
tempAnchor.href = window.URL.createObjectURL(HTMLBlob);
tempAnchor.download = "minimal-output.html"
tempAnchor.style.display = 'none';
document.body.appendChild(tempAnchor);
tempAnchor.click();
document.body.removeChild(tempAnchor);
