# Pixel Web Company

## Description
    Current website is a corporate company portal which is developed using HTML, CSS, JS, Jquery, 
    Bootstrap, Node.js and handlebars.

## Getting Started

### Folder Structure
    ├── bin
    │   ├── wwww
    ├── node_modules
    ├── public
    │   ├── css
    │   │   ├── style.css
    │   ├── images
    |   |   ├── svg
    │   ├── js
    |   |   ├── script.js
    |   |   ├── home.js
    │   ├── contact.html
    │   ├── home.html
    │   ├── service-docs.html
    │   ├── service-goal.html
    │   ├── service-time.html
    │   ├── sign-in.html
    ├── routes
    │   ├── routes.js
    ├── src
    │   ├── User.js
    ├── views
    │   ├── partials
    │   │   ├── header.hbs
    │   │   ├── footer.hbs
    │   ├── contact.hbs
    │   ├── error.hbs
    │   ├── home.hbs
    │   ├── layout.hbs
    │   ├── service-docs.hbs
    │   ├── service-goal.hbs
    │   ├── service-time.hbs
    │   ├── sign-in.hbs
    │   ├── sign-up.hbs
    ├── app.js
    ├── package-lock.json 
    ├── package.json
    └── README.md
     
### Executing program

    git clone https://github.com/JignashaVanara/Project.git
    cd Project
    
    npm start

### About Pages 

* Home Page:
    1. This page contains only information and it's a static page.
    2. Any user can find company related information on this page.

* Service Timesheet Page:
    1. Logged in employee can fill timesheet on daily basis through this page.

* Service Goals Page:
    1. Logged in employee can add comments of work to achive goal for their performace check annually.

* Service Docs Page:
    1. This page contains only files and it's a static page.
    2. Logged in employee can see payslip, resume, compensasion letter, offer letter through this page.

* Contact Page:
    1. This page contains only information and it's a static page.
    2. Any user can find conact infromation thhrough this page.

* Login Page:
    1. on click of login button, system verifies the following validations.
        - username should not be empty.
        - password should not be empty and it should have min length of 8 characters.
    2. on click of sign-up button, user will redirect to register screen.

* Registration Page:
    1. on click of login button, system verifies the following validations.
        - Firstname should not be empty.
        - Lastname should not be empty.
        - DOB should not be empty.
        - Username should not be empty.
        - Email should not be empty and it should contain @ in address.
        - password should not be empty and it should have min length of 8 characters.
        - Confirm password should not be empty and it should have min length of 8 characters.
        - Password and Confirm password should have the same values.

## Help
(advise for common problems or issues.)

## Author
Jignasha Vanara
