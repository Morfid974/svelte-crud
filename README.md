# CRUD app on svelte
Simple app with crud operations.

### description
- Frontend: Svelte + sveltestrap + nginx
You can edit code then `yarn install` and `yarn build`

- Backend: nodejs + express
package.json is read on image creation. If you wish to add dependencies, clear backend container and backend image

- Manage credentials through jwt
### database
- PostgreSQL
Stored locally in persistantdb folder
### usage
copy .env.example to .env and edit values
`docker-compose up -d` and open [http://localhost:[FRONTPORT from .env file]]

