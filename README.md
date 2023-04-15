# urban_abode


# API Documentation

#### Backend deployed at [heroku](https://urban-abode.herokuapp.com/) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn start** to start the frontend server
- **yarn test** to start server using testing environment

### Backend framework 

Node/Express js
- Uses Javascript to build web server.
- light-weight web application framework to help organize web application into an MVC architecture
- Express makes building REST API simpler

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
    *  DEV_DATABASE - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  STRIPE_SECRET - this is generated in the Stripe dashboard
