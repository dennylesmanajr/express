# CRUD Rest API using Nodejs Express


## Project setup

Several step to run the project:

- Clone the repo: `git clone https://github.com/dennylesmanajr/express.git`
- Install Dependencies: `npm install`
- Config your database connection in : `api\server\src\config\config.js`
- Run migration to create table: `sequelize db:migrate`
- Generate Role Data: `sequelize db:seed --seed 20200606081524-bulk-insert-role`
- Create User with POSTMAN via API (POST) url: `http://localhost:8000/api/v1/user`
- Sample Parameter 
```
{
	"email": "staff@test.com",
	"password": "welcome",
	"full_name": "Staff",
	"role_id": 3
}

notes::
- role_id : 1 -> Lead
- role_id : 2 -> Director
- role_id : 3 -> Staff
```

### Run
```
node server.js
```
