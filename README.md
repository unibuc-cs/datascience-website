The source code of datascience.cs.unibuc.ro

In order to install the website:
 - install node and npm (sudo apt install nodejs, sudo apt install npm)
 - git clone https://github.com/unibuc-cs/datascience-website
 - cd datascience-website
 - npm install

In order to deploy the website:
 - npm run build
 - sudo rm -r /var/www/datascience
 - sudo cp -r ./build /var/www/datascience (it's important the fact that there no / at the end in order to replace the current folder datascience)
