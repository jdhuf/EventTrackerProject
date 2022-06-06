# EventTrackerProject
Testing REST API CRUD Operations

### Description
This program allows a user to track exercise. The code is in the first stages of development and currently has one entity called exercise that corresponds to a table called exercise in a database. The code uses REST API to operate CRUD (Create, Read, Update, Delete) functions.

##Technology Used
* Java
* SpringToolSuite4
* Spring Boot
* MacBook Pro
* SQL
* MySQL Workbench
* Mac Terminal
* REST API

## How to Use

After uploading code to SpringToolSuite4, the user can run the program and test CRUD operations using Postman. The user can also verify changes to the database using MySQL commands from Terminal.

The routes necessary for testing the operations are listed below.

Expected Routes

| Return Type       | Route                                         | Functionality                    |  
|-------------------|-----------------------------------------------|----------------------------------|
|`List<Exercise>`     |`GET   http://localhost:8083/api/exercise`        |`Find all exercises`              	   |
|
|`Exercise`           |`GET   http://localhost:8083/api/exercise/{id}`    |`Find one exercise by id`            |
|
|`Exercise`          |`POST  http://localhost:8083/api/exercise `    		|`Creates a new exercises`           	|
|
|`Exercise`          |`PUT   http://localhost:8083/api/exercise/{id}`		 |`Updates an existing exercise by id`	|
|
|`Exercise`           |`VOID  http://localhost:8083/api/exercise/{id}`		|`Deletes an existing exercise by id`  	|

##Lessons Learned

Through this assignment I gained a better understanding of the relationship between controllers, services, and repositories. I also gained a better understanding of how to test CRUD operations using Postman.
