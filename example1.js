var newHTML = document.createElement('html');
var newHead = document.createElement('head');
var newMeta = document.createElement('meta');
var newTitle = document.createElement('title');
newTitle.text = "Déjà vu - Wikipedia";
newMeta.httpEquiv = "refresh";
newMeta.charset = "utf-8";
newMeta.content = "30;url=https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu";
var newBody = document.createElement('body');
var newPar = document.createElement('p');
var newText = document.createTextNode('Loading Déjà vu - Wikipedia...');
newPar.appendChild(newText);
newBody.appendChild(newPar);
newHead.appendChild(newMeta);
newHead.appendChild(newTitle);
newHTML.append(newHead);
newHTML.append(newBody);
var tempAnchor = window.document.createElement('a');
HTMLBlob = new Blob([newHTML.outerHTML], {type: 'text/html; charset=UTF-8'});
tempAnchor.href = window.URL.createObjectURL(HTMLBlob);
tempAnchor.download = "example-redirect.html"
tempAnchor.style.display = 'none';
document.body.appendChild(tempAnchor);
tempAnchor.click();
document.body.removeChild(tempAnchor);
