I am generating a [client-side HTML redirect](https://stackoverflow.com/questions/5411538/redirect-from-an-html-page) like this:


    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Déjà vu - Wikipedia</title>
      <script type='text/javascript'>
      document.addEventListener('DOMContentLoaded', function () {
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
    
      });
      </script>
      </head>
      <body>
      </body>
    </html>


However, I am losing the `charset` meta attribute when I do so.  The output looks like this:

    <html><head><meta http-equiv="refresh" content="30;url=https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu"><title>Déjà vu - Wikipedia</title></head><body><p>Loading Déjà vu - Wikipedia...</p></body></html>

This means that my browser is not sure what encoding to use, and does not display the accents correctly.

[![Loading DÃ©jÃ  vu - Wikipedia...][1]][1]

This, on the other hand, properly shows the accents:

    <html><head><meta http-equiv="refresh" charset="utf-8" content="30;url=https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu"><title>Déjà vu - Wikipedia</title></head><body><p>Loading Déjà vu - Wikipedia...</p></body></html>

[![Loading Déjà vu - Wikipedia...][2]][2]

I've reduced it down as minimal example as I can, and it still occurs.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <title>title</title>
      <script type='text/javascript'>
        document.addEventListener('DOMContentLoaded', function() {
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

        });
      </script>
    </head>

    <body>
    </body>

    </html>

<!-- end snippet -->


Here is the output:

    <html><head><meta></head></html>


This occurs in both Firefox 63.0 and Chromium 70.0. Here is a link to the Git repo:

https://github.com/nbeaver/stackoverflow_question_2018-11-07

How can I preserve the `charset` attribute of an HTML blob?


  [1]: https://i.stack.imgur.com/FUF5Q.png
  [2]: https://i.stack.imgur.com/TCbw3.png
