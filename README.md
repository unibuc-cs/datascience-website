The source code of datascience.cs.unibuc.ro

Install the website:
 - install npm (sudo apt install npm)
 - git clone https://github.com/unibuc-cs/datascience-website
 - cd datascience-website
 - npm install

Update the website:
- change content in the git repository 
- git pull (on cs.unibuc.ro, the location of the repo does not matter)

Deploy the website:
 - npm run build
 - sudo rm -r /var/www/datascience
 - sudo cp -r ./build /var/www/datascience (it's important to have no / at the end in order to replace the current datascience folder)
