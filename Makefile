OUT :=question.md index.html minimal.html
HTML:=index.html minimal.html example-redirect.html desired-output.html minimal-output.html
HTML_INDENTED:=$(patsubst %.html, %_indented.html, $(HTML))
JS_INDENTED:=example2_indented.js
all : question.md
	xsel -b < question.md

%_indented.html: %.html Makefile
	sed 's/^.\+$$/    &/' $< > $@

example2_indented.js : example2.js
	sed 's/^.\+$$/    &/' $< > $@

question.md : question.pre.md $(HTML_INDENTED) Makefile
	m4 $< > $@

index.html : index.pre.html example1.js
	m4 $< > $@

minimal.html : minimal.pre.html example2_indented.js
	m4 $< > $@

clean :
	rm -f -- $(OUT)
