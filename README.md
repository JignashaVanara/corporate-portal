# Pixel Web Company

## Description
    Current website is a corporate company portal which is developed using HTML, CSS, JS, Jquery, 
    Bootstrap, Node.js and handlebars.

## Getting Started

### Folder Structure
    ├── bin
    │   ├── www
    ├── public
    │   ├── css
    │   │   ├── style.css
    │   ├── images
    |   |   ├── svg
    │   ├── js
    |   |   ├── script.js
    |   |   ├── home.js
    |   |   ├── title.js
    │   ├── favicon.ico
    ├── server
    |   ├── models
    |   │   ├── db.js
    |   │   ├── sql.js
    |   ├── routes
    |   │   ├── routes.js
    |   │   ├── user.js
    |   │   ├── timesheet.js
    |   │   ├── goals.js
    |   │   ├── documents.js
    ├── views
    │   ├── partials
    │   │   ├── header.html
    │   │   ├── footer.html
    │   │   ├── loginHeader.html
    │   │   ├── loginFooter.html
    │   ├── contact.html
    │   ├── editprofile.html
    │   ├── error.html
    │   ├── home.html
    │   ├── layout.html
    │   ├── loginLayout.html
    │   ├── service-docs.html
    │   ├── service-goal.html
    │   ├── service-time.html
    │   ├── sign-in.html
    │   ├── sign-up.html
    ├── .gitignore
    ├── app.js
    ├── package-lock.json 
    ├── package.json
    └── README.md
     
### Executing program

    1. git clone https://github.com/JignashaVanara/Project.git
    
    2. cd Project
    
    3. set following config variables in your environment file to connect your local MySQL DB.
        MYSQL_HOST
        MYSQL_PORT
        MYSQL_USER
        MYSQL_PASSWORD
        MYSQL_DB
        
    4. npm install
    
    5. npm start
    
    6. Use following URL to run project: 
       http://localhost:3000/

### About Pages 

* Navigation Items
    1. Any user can see following pages without login in system.
        - Home page
        - Contact us page
        - Login screen
        - Registration screen
    
    2. Logged in user can use following pages.
        - Home page
        - Contact us page
        - Edit profile screen
        - Service timesheet entry page
        - Service goals page
        - Service documents page
        - user can delete account through navigation submenu item(delete account).
        - user can logout from the session using submenu item(sign out).

* Home Page:
    1. This page contains only information and it's a static page.
    2. Any user can find company related information on this page.
    3. All Projects details are available on this page. You can filter different type of projects.

* Service Timesheet Page:
    1. Logged in employee can fill timesheet on daily basis through this page.
    2. Fill date, efforts and add any comments(if any) on timesheet page and click on submit button. You can see "Efforts logged successfully." message highlighted in green on screen.

* Service Goals Page:
    1. Logged in employee can add comments of work to achive goal for their performace check annually.
    2. Select goal type from dropdown.
    3. Select goal name from dropdown which is filtered according the goal type.
    4. Add your work detail comments related to perticular goal which you selected.
    5. click on "comment" button.
    6. You can see your comments with current date and time on screen.

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
        - Username should not be empty.
        - Email should not be empty and it should contain @ in address.
        - password should not be empty and it should have min length of 8 characters.
        - Confirm password should not be empty and it should have min length of 8 characters.
        - Password and Confirm password should have the same values.

* Edit Profile Page:
    1. User can update profile through this page.

* Delete Account:
    1. Click on delete account button from navigation user menu and you will be redirected to login screen.

* Error Page:
    1. For any kind of error server will redirect to error page(404-page not found).
    2. Correct firstname, lastname or username and click on edit button to make changes.
    3. If there is not any data update then click on cancel button you will be redirected to home page.


## Help
(advise for common problems or issues.)

## Author
Jignasha Vanara
