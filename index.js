// List of required files for the program.
const fs = require('fs')
const inquirer = require('inquirer')
const Intern = require("./library/Intern")
const Engineer = require("./library/Engineer")
const Manager = require("./library/Manager")
const Team = require("./library/team")

const team = new Team()

// Function that handles which function to call based on the answer of the question
function getNext(option) {
    if(option === 'newEngineer') {
        newEngineer()
    }
    if(option === 'newManager') {
        newManager()
    }if (option === "newIntern") {
        newIntern()
    }
    if(option === "done") {
        team.saveFile()
       
    }
}

// fucntion that prompts the user with questions about an engineer
function newEngineer() {
    inquirer
        .prompt([
            {    
                name: "name",
                message: "What is the name of the new engineer?",
                type: "input"
            },
            {
                name: "id",
                message: "What is the employee ID of the new engineer?",
                type: "input" 
            },
        {
            name: "email",
            message: "What is the email of the new engineer?",
            type: "input"
        },
        {
            name: "gitHub",
            message: "What is the new engineer's GitHub account?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Would you like to add another employee?",
            type: "list",
            choices: [
                {value: "newEngineer",
                 name: "Add Engineer",
                },
            {
                value: "newIntern",
                name: "Add Intern",

            },
            {
                value: "newManager",
                name: "Add Manager"
            },
            {
                value: "done",
                name: "Done"
            }],
        }
    ])
    .then((response) => {
        const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.gitHub,
        );
        team.addMember(engineer);
        getNext(response.addMore)
    })
}

// function that asks the user about an intern

function newIntern() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "What is the name of the new intern?",
                type : "input"
            },
            {
                name: "id",
                message: "What is the employee ID of the new intern?",
                type : "input"
            },
            {
                name: "email",
                message: "What is the new intern's Email address?",
                type: "input"
            },
            {
                name: "school",
                message: "Which school is the intern attending/has attended?",
                type: "input"
            },
            {
                name: "addMore",
                message: "Would you like to add another employee?",
                type: "list",
                choices: [
                    {
                        value: "newEngineer",
                        name: "Add Engineer",
                    },
                    {
                       value: "newIntern",
                       name: "Add Intern",
       
                   },
                   {
                       value: "newManager",
                       name: "Add Manager"
                   },
                   {
                       value: "done",
                       name: "Done"
                    }
                ]
            }
        ])
        .then((response) => {
            const intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school,
                );
                team.addMember(intern);
                getNext(response.addMore)
            })
        }
        
        
        // function to add a new team manager
        inquirer
        .prompt([
            {
                name: "name",
                message: "What is the name of the new manager?",
                type : "input"
            },
            {
                name: "id",
                message: "What is the employee ID of the new manager?",
                type : "input"
            },
            {
                name: "email",
                message: "What is the new manager's Email address?",
                type: "input"
            },
            {
                name: "officeNumber",
                message: "What is the manager's Office number?",
                type: "input"
            },
            {
                name: "addMore",
                message: "Would you like to add another employee?",
                type: "list",
                choices: [
                    {
                        value: "newEngineer",
                        name: "Add Engineer",
                    },
                    {
                       value: "newIntern",
                       name: "Add Intern",
       
                   },
                   {
                       value: "newManager",
                       name: "Add Manager"
                   },
                   {
                       value: "done",
                       name: "Done"
                    }
                ]
            }
        ])
        .then((response) => {
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber,
        );
        team.addMember(manager);
        getNext(response.addMore)
    })

