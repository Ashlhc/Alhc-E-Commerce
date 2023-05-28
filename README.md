# Alhc-E-Commerce

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Credits](#credits)
## Description
This is an e-commerce back end that isn't connected to a front end currently. It is a database that contains three different tables which can be queried using a bunch of different routes. This is all done with Express and Sequelize. 
Personally I found this program to be particularly difficult but that's probably because I almost always struggle when there's starter code to work with.  
## Usage
The video containing my demonstration can be found at this [link](https://drive.google.com/file/d/1drp0gnP4pLq0G1QapB2lGmpRdqvsIqNU/view)
## Installation
1. Clone repository
2. Make a .env file like the env.example just named .env and fill out your own information in the DB_USER and DB_PASSWORD fields with your own SQL login info. 
3. Go to the repository folder in your command line 
4. Login to MySQL using `mysql -u USER -p` making sure to replace USER with your own username. Then enter your password when prompted.
5. While still in MySQL use the command `SOURCE db/schema.sql` and make sure to exit after doing this step. 
6. Now you'll run this command `npm run seed`
7. Now it'll be listening on `http://localhost:5678`  
## Credits
Starter code was provided by the bootcamp for us and some additional files were included to replace others by our instructor.