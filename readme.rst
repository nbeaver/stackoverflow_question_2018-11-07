Title: Preserve charset attribute of meta tag in HTML Blob?

Tags: html javascript character-encoding meta-tags 

https://stackoverflow.com/questions/53197847/preserve-charset-attribute-of-meta-tag-in-html-blob

Answer: instead of this::

    newMeta.charset = "utf-8";

use this::

    newMeta.setAttribute("charset", "utf-8");
