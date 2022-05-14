# <img style="width:30px" src="https://github.com/JignashaVanara/Project/blob/master/public/favicon.ico" alt="Pixel Web Company">     Pixel Web Company

* [Description](#description) <br/>
* [Getting Started](#getting-started) <br/>
    * [Folder Structure](#folder-structure)<br/>
    * [Technologies Used](#technologies-used)<br/>
    * [Navigation Items](#navigation-items)<br/>
    * [About Pages](#about-pages)<br/>
* [Executing program](#executing-program) <br/>
* [Screenshots](#screenshots) <br/>
* [Help](#help) <br/>
* [Author](#author) <br/>


## Description
    Current website is a corporate company portal which is developed using HTML, CSS, JS, JQuery, 
    Bootstrap, Node.js, handlebars and MySQL. 

## Getting Started

### Folder Structure
    ├── bin
    │   ├── www
    ├── public
    │   ├── css
    │   │   ├── style.css
    │   ├── files
    │   ├── images
    |   |   ├── svg
    │   ├── js
    |   |   ├── script.js
    |   |   ├── home.js
    |   |   ├── title.js
    │   ├── favicon.ico
    ├── screenshots
    │   ├── desktopView
    │   ├── responsiveView
    │   ├── ERD (ER Diagram)
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
    ├── Procfile
    ├── app.js
    ├── package-lock.json 
    ├── package.json
    └── README.md
     
### Technologies Used
    
    1. Front End:
            - HTML
            - CSS
            - Javascript
            - JQuery
            - Bootstrap
            - Handlebars (Express front end template tool)
    2. Back End:
            - Node.js 
            - Express JS Framework
            - MySQL
            
       
### Navigation Items

| Screen                        |         Any User          |  Employees (with login)  |
|-------------------------------|:-------------------------:|:------------------------:|
| Home page                     |            ✔              |            ✔             |
| Contact Us                    |            ✔              |            ✔             |
| Login Screen                  |            ✔              |            ✔             |
| Registration                  |            ✔              |            ✔             |
| Edit profile                  |                           |            ✔             |
| Delete Account(Menu item only)|                           |            ✔             |
| Service timesheet entry Page  |                           |            ✔             |
| Service goals page            |                           |            ✔             |
| Service documents page        |                           |            ✔             |
| sign out (Menu item only)     |                           |            ✔             |
| Error(404) Page               |             ✔             |            ✔             |

### About Pages 

    Home Page:
        1. This page contains only information and it's a static page.
        2. Any user can find company related information on this page.
        3. All Projects details are available on this page. You can filter different type of projects.

    Service Timesheet Page:
        1. Logged in employee can fill timesheet on daily basis through this page.
        2. Fill date, efforts and add any comments(if any) on timesheet page and click on submit button. 
        You can see "Efforts logged successfully." message highlighted in green on screen.

    Service Goals Page:
        1. Logged in employee can add comments of their work to achieve goal for their annual performance.
        2. Select goal type from dropdown.
        3. Select goal name from dropdown which is filtered according to the goal type.
        4. Add your work related comments in detail for particular goal which you selected.
        5. click on "comment" button.
        6. You can see your comments with your name, selected goal, current date and time on screen, 

    Service Docs Page:
        1. This page contains only files.
        2. Logged in employee can upload pay-slip, resume, compensasion letter, offer letter through this page and file will be displayed in respective block on screen.

    Contact Page:
        1. This page contains only information and it's a static page.
        2. Any user can find contact infromation through this page.

    Login Page:
        1. on click of login button, system verifies the following validations and after successful login user can access service related screens.
            - username should not be empty.
            - password should not be empty and it should have min length of 8 characters.
        2. on click of sign-up button, user will redirect to register screen.

    Registration Page:
        1. on click of login button, system verifies the following validations and after successful registration user will redirect to login screen where user can login in to system to access company services.
            - First name should not be empty.
            - Last name should not be empty.
            - Username should not be empty.
            - Email should not be empty and it should contain @ in address.
            - password should not be empty and it should have min length of 8 characters.
            - Confirm password should not be empty and it should have min length of 8 characters.
            - Password and Confirm password should have the same values.

    Edit Profile Page:
        1. User can update profile through this page.
        2. Correct first name, last name or username and click on edit button to make changes.
        3. If there is not any data update then click on cancel button you will be redirected to home page.

    Delete Account:
        1. Click on delete account button from navigation user menu and user's all service data with his/her profile will be deleted from system.
        2. User will redirect to login screen on successful deletion of account.

    Error Page:
        1. For any kind of error server will redirect to error page(404-page not found).
        
## Executing program

    1. git clone https://github.com/JignashaVanara/Project.git
    
    2. cd Project
    
    3. set following config variables in your environment file to connect your local MySQL DB.
        MYSQL_HOST
        MYSQL_USER
        MYSQL_PASSWORD
        MYSQL_DB
        PORT (any port number you can choose)
        
    4. npm install
    
    5. npm start
    
    6. Use following URL to run project: 
       http://localhost:3000/ or http://localhost:<your selected port number from env>

## Screenshots

1. Website screenshots are available in screenshot folder of project. <br/>
        &nbsp;&nbsp;&nbsp;[Desktop View](https://github.com/JignashaVanara/Project/tree/master/screenshots/desktopView)<br/>
        &nbsp;&nbsp;&nbsp;[Responsive View](https://github.com/JignashaVanara/Project/tree/master/screenshots/responsiveView)<br/>

2. Please find the following URL for project ER Diagram.
        [ERD URL](https://github.com/JignashaVanara/Project/tree/master/screenshots/ERD)

## Help
    1. While connecting MYSQL DB in heroku you might get "PROTOCOL_CONNECTION_LOST" error.
        
        Error: Connection lost: The server closed the connection.
            at Protocol.end (/app/node_modules/mysql/lib/protocol/Protocol.js:112:13)
            at Socket.<anonymous> (/app/node_modules/mysql/lib/Connection.js:94:28)
            .....
            at processTicksAndRejections (node:internal/process/task_queues:83:21) {
            fatal: true,
            code: 'PROTOCOL_CONNECTION_LOST'
            }
            app crashed - waiting for file changes before starting...


        Solution: 
            - Mysql connection errors fire after 60 seconds of inactivity and it will terminate
              the process as it's a default behavior in node.js.
            - Use mysql.createPool() for db connection instead of mysql.createConnection() to solve it.

## Author
Jignasha Vanara
