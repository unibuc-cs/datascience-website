The source code of datascience.cs.unibuc.ro

Install the website:
 - install node and npm (sudo apt install nodejs, sudo apt install npm)
 - git clone https://github.com/unibuc-cs/datascience-website
 - cd datascience-website
 - npm install

Update the website:
- change content in the git repository 
- git pull (on cs.unibuc.ro)

Deploy the website:
 - npm run build
 - sudo rm -r /var/www/datascience
 - sudo cp -r ./build /var/www/datascience (it's important the fact that there no / at the end in order to replace the current folder datascience)
