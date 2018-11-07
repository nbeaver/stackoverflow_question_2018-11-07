OUT :=question.md index.html
all : $(OUT)
	xsel -b < question.md

question.md : question.pre.md index.html minimal.html Makefile
	m4 $< > $@

index.html : index.pre.html example1.js
	m4 $< > $@

minimal.html : minimal.pre.html example2.js
	m4 $< > $@

clean :
	rm -f -- $(OUT)
