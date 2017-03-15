-------------------------------------

run bower install && npm install
run grunt

-------------------------------------

All development work should be done in the 'src' folder.
Grunt will copy what is needed into the 'htdocs' folder,
which can be zipped and sent as final delivery.

DO NOT work on files in 'htdocs' - work in 'src' and use grunt to manage.

All web dependencies should be handled via bower.
Use the grunt copy task to add the files needed to the 'htdocs' folder.

BOWER NOTE:

We specify versions in bower.json using the '~' prefix. When you run bower install --save,
it will use '^'. Make sure to change this before committing the bower.json file.
