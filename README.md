# CRUD app on svelte
Simple app with crud operations.

### description
- Frontend: Svelte + sveltestrap + nginx
You can edit code then `yarn install` and `yarn build`

- Backend: nodejs + express
package.json is read on image creation. If you wish to add dependencies, clear backend container and backend image

- Manage credentials through jwt and blacklist on logout

- Env file variables
Variable                      | Default value  | Description
----------------------------- | -------------- | --------------

POSTGRES_PASSWORD             | mypostgrespwd  | PostgreSQL password
POSTGRES_USER                 | mypostgresuser | PostgreSQL login
POSTGRES_DBNAME               | mydbname       | PostgreSQL database name
BACKPORT                      | 3000           | Backend port (usefull for postman tests)
FRONTPORT                     | 8080           | Front port for web access
DBPORT                        | 5432           | PostgreSQL port
ADMINLOGIN                    | admin          | Login for admin user on web access
ADMINPASSWORD                 | adminpass      | Password for admin user on web access
SECRET_KEY                    | secret_key     | Secret key used to sign jwt authentication token
REFRESH_KEY                   | secret_key     | Secret key used to sign jwt authentication refresh token
ACCESS_TOKEN_VALIDITY_MINUTES | 60             | Token validity in minutes
REFRESH_TOKEN_VALIDITY_DAYS   | 360            | Refresh token validity in days

### database
- PostgreSQL stored locally in persistantdb folder
### usage
- copy .env.example to .env and edit values
- `docker-compose up -d` and open [http://localhost:[FRONTPORT from .env file]]

