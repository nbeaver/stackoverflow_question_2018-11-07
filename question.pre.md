I am generating a [client-side HTML redirect](https://stackoverflow.com/questions/5411538/redirect-from-an-html-page) like this:

changequote(`<<<', `>>>')
include(<<<index_indented.html>>>)

However, I am losing the `charset` meta attribute when I do so.  The output looks like this:

include(<<<example-redirect_indented.html>>>)

This means that my browser is not sure what encoding to use, and does not display the accents correctly.

[![Loading DÃ©jÃ  vu - Wikipedia...][1]][1]

This, on the other hand, properly shows the accents:

include(<<<desired-output_indented.html>>>)
[![Loading Déjà vu - Wikipedia...][2]][2]

I've reduced it down as minimal example as I can, and it still occurs.

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-html -->

include(<<<minimal_indented.html>>>)
<!-- end snippet -->


Here is the output:

include(<<<minimal-output_indented.html>>>)


This occurs in both Firefox 63.0 and Chromium 70.0. Here is a link to the Git repo:

https://github.com/nbeaver/stackoverflow_question_2018-11-07

How can I preserve the `charset` attribute of an HTML blob?


  [1]: https://i.stack.imgur.com/FUF5Q.png
  [2]: https://i.stack.imgur.com/TCbw3.png
