OUT :=question.md index.html minimal.html
HTML:=index.html minimal.html example-redirect.html desired-output.html minimal-output.html
HTML_INDENTED:=$(patsubst %.html, %_indented.html, $(HTML))
all : question.md
	xsel -b < question.md

%_indented.html: %.html
	sed 's/^/    /' $< > $@

question.md : question.pre.md $(HTML_INDENTED) Makefile
	m4 $< > $@

index.html : index.pre.html example1.js
	m4 $< > $@

minimal.html : minimal.pre.html example2.js
	m4 $< > $@

clean :
	rm -f -- $(OUT)
