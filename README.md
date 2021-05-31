The source code of datascience.cs.unibuc.ro


In order to install everything that is needed:
 - install node and npm (sudo apt install nodejs, sudo apt install npm)
 - git clone https://github.com/unibuc-cs/datascience-website
 - cd datascience-website
 - npm install


In order to deploy the website:
 - npm run build
 - sudo rm -r /var/www/datascience
 - sudo cp -r ./build /var/www/datascience (e important sa fie fara slash la final pentru a inlocui folderul existent de datascience)
