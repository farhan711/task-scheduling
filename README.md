# task-scheduling

This has nodejs application used to schedule task(s) [Here I have used to send email at given time]. Using [Agenda]('https://github.com/agenda/agenda') as scheduler for sending email at given time.
This could be set recurring, one time, or periodic execution of tasks.
(Note: If you're using Agenda then, must follow file strcuture and Agenda decalration for turning it on, or it will create an issue of not resuming jobs when server restarts.)

How to run this server?
- Clone repository and go to the project path
- Install dependencies
`npm install`
- start the server
`npm start`

Also add `.env` file in project main(root) folder, having below values of your own.
```
NODE_ENV=development
PORT=3001
DATABASE=mongodb://localhost:27017/database #your_mongo_database_here
EMAIL_USERNAME=example@example.com #email_address_from_where_email_would_be_sending
EMAIL_PASSWORD=****** #Password_of_the_above_email
```
