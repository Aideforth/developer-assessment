# developer-assessment
A technical assessment submission

There are 2 parts of this web application:
1. Backend code
2. Frontend code

To setup the application, first clone this repo and follow the steps to setup the backend and the frontend.

To set up the Backend, follow this steps:

1. You need to have docker installed, if you do not, please download from https://docs.docker.com/get-docker/
2. In your terminal or command prompt, open the folder of the cloned repo
3. Navigate to `backend\productsApp`
4. In this directory, run the command `python manage.py migrate`, to create database tables, there is a default sqllite db created in the app. 
5. Run the command `python manage.py loaddata products` to prepopulate the database.
4. Run the command `docker build -t products-app .`
5. Then run the command `docker run -it -p 8000:8000 products-app`
6. This will load backend app on the port 8000, if this is run on a local computer, it should be on localhost:8000


To set up the Frontend, follow this steps:
1. You need to have npm installed, if you do not, please download from https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. In your terminal or command prompt, open the folder of the cloned repo.
3. Navigate to `frontend\products-front-app`
4. If you modified the url of the backend server, you need to update `REACT_APP_GRAPH_QL_BASE_URL` value in the .env file to match it.
5. In the directory mentioned in step 3, run the command `npm install`
6. Then run the command `npm start`
7. Browse/test the application.

