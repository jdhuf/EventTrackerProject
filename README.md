# EventTrackerProject

Skill Distillery Angular Event Tracker Project

### Description

This program allows a user to track exercise. The program has one entity called exercise that corresponds to a table called exercise in a database. The program allows the user to perform CRUD (Create, Read, Update, Delete) operations with the exercise entity. In its most updated form, the program displays data and user interface using Angular front-end technology for deployment as a fully functional web application.

## Technology Used

* Java
* SpringToolSuite4
* Spring Boot
* MacBook Pro
* SQL
* MySQL Workbench
* Mac Terminal
* REST API
* Javascript
* Typescript
* HTML
* XHR
* Angular
* AWS

## How to Use

The user can perform basic CRUD operations using the fields and buttons provided on the launched application.

The routes necessary for testing the operations locally are listed below.

Expected Routes for Postman Testing

| Return Type       | Route                                         | Functionality                    |  
|-------------------|-----------------------------------------------|----------------------------------|
|`List<Exercise>`     |`GET   http://localhost:8083/api/exercise`        |`Find all exercises`                |
|`Exercise`          |`GET   http://localhost:8083/api/exercise/{id}`    |`Find one exercise by id`           |
|`Exercise`          |`POST  http://localhost:8083/api/exercise`    		|`Creates a new exercises`           |
|`Exercise`          |`PUT   http://localhost:8083/api/exercise/{id}`		|`Updates an existing exercise by id` |
|`Exercise`          |`VOID  http://localhost:8083/api/exercise/{id}`		|`Deletes an existing exercise by id` |

## Lessons Learned

Through this assignment I have learned how to add scripts and to navigate through the DOM to perform operations. I have learned how to troubleshoot code using the developer's console in Chrome. I have gained experience using Angular and learned how to perform basic operations using this technology.
