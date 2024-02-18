#! usr/bin/bash

# install git & node
yum install nodejs -y
yum install git -y
yum install npm -y


# git pull the repo
cd /home/ec2-user
# get source code from github
git clone https://github.com/RichardTjokroutomo/aws-snake-game
#get in project dir
cd aws-snake-game
#give permission
sudo chmod -R 755 .
#install node module
npm install
# start the app
node main.js > app.out.log 2> app.err.log < /dev/null &