# TeamProfileGenProject

## Importing the folders

First, I needed to import the folders dist to hold the index.html and the style.css
Then the lib to hold the different classes such as employee.js, Engineer.js, Intern.js, and Manager.js
The test folder helps test weather the server will select the right employee, engineerm intern, or manager.

## Importing servers

I needed to import the express server, inquirer, jest, test, and save by using npm i to install the servers.

## lib

In the lib there is four different files; employee.js, engineer.js, intern.js and manager.js, let's get started with the employee.js.
I first had to make employee, engineer, intern, and manager a class in order to start running my functions.
for the employee I first did a constructor function to get the name, id, and email. Followed by when the user inputs the name, id, email, and role it will return to the employee.
Next, I did the engineer, the engineer class will extend to employee so the constructor from the employee will already be embedded in to the engineer. I just had to add the github and get the role to return to engineer.
Then, I moved on to the intern who already has the employee constructor embedded, and just need to get the school and role to return to the intern.
Finally, I did the manager. The manager did already have the initial constructor from the employee class, just had to add the office number dunction and the get role. Once, those two were added it will return to the manager.


## test

In the test folder you have four different files; the employee.test, engineer.test, intern.test, and the manager.test
In these folders we are testing to see if the functions from the lib can get what's needed and pass the test. 
So in the employee.test file, I did const employee to require the ../lib/Employee. Then to start the test - I tested employee to get a name from the constructor, get an email from constructor and get an id from constructor.
Next the engineer.test; I just needed to test the get github function and to the the role.
Then the intern.test was very similar to the engineer; I just needed to get the school and the role of the intern.
Finally the manager.test was also similar to the engineer and the intern.test; I just needed to get the office number and the role.
After all the test passed, it was good to go.

## index.js

The index.js was definitely the most challenging, I started off by making sure the inquirer, fs, and path was installed. then I proceeded to make the generateHTML file connectiom.
Next, the first prompt is to add a manager, then engineer, and intern.
I did get successful with getting the first question to appear in the terminal.
the first question was who would you like to add, then it was suppose to follow up the the next array of questions.
after the array of questions were filled out, it was suppose to generate an html file, that im currently working on.

## Deployed Links

https://adrianabroadnax.github.io/TeamProfileGenProject/
https://github.com/AdrianaBroadnax/TeamProfileGenProject.git


## Walkthrough Video


https://watch.screencastify.com/v/uhYaBasaHA2x8eNTW9Jb