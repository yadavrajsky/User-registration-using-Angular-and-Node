# User registration using NodeJS and Angular

## Backend Setup

To run the backend, follow these steps:

1. Create a `.env` file in the backend folder with the following content:

    ```
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=munshi
    DB_PASSWORD=Munshi@123
    DB_DATABASE=users
    PORT=4000
    ```

2. Install nodemon globally:

    ```
    npm i -g nodemon
    ```

3. Open a terminal and navigate to the backend folder:

    ```
    cd backend
    ```

4. Start the server:

    ```
    npm run start
    ```

## Frontend Setup

To run the frontend, follow these steps:

1. Open a new terminal.

2. Navigate to the frontend folder:

    ```
    cd frontend
    ```

3. Start the server:

    ```
    ng serve
    ```

## Accessing the Web

Access the web at `http://localhost:4200`.

For registration, go to: `http://localhost:4200/register`.
To view the users, go to: `http://localhost:4200/fetch`.
