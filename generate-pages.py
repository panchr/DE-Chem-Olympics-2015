# Rushy Panchal
# generate-pages.py

import os

def main():
	'''Main process'''
	template = readFile("template.html")

	for path in os.listdir("pages"):
		filePath = os.path.join("pages", path)
		renderedPath = path

		pageBody = readFile(filePath)

		rendered = generatePage(template, pageBody)

		with open(renderedPath, 'w') as renderFile:
			renderFile.write(rendered)

		print("Rendered page from {src} to {dest}.".format(src = filePath, dest = renderedPath))

def readFile(path):
	'''Reads the file and returns the data within'''
	with open(path, 'r') as dataFile:
		data = dataFile.read()

	return data

def generatePage(template, body):
	'''Generate a page from a template'''
	return template.replace("<!-- REPLACE_WITH_BODY -->", body)

if __name__ == '__main__':
	main()
