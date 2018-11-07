I am generating a user-side HTML redirect like this:

changequote(`<<<', `>>>')
include(<<<index.html>>>)

However, I am losing the `charset` meta attribute when I do so.  The output looks like this:

include(<<<example-redirect.html>>>)

This means that my browser is not sure what encoding to use, and does not display the accents correctly.

I've reduced it down as minimal example as I can, and it still occurs.

include(<<<minimal.html>>>)

How can I preserve the `charset` attribute of an HTML blob?
