legacy-curseforge-redirect.zip: *.json *.js img/* *.md *.txt
	zip -r legacy-curseforge-redirect.zip * -x .git/* -x img/screenshot.png -x .gitignore -x Makefile

clean:
	rm *.zip
