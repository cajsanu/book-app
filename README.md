# BookShelf

## Overview
BookShelf is a web application designed for book enthusiasts to manage their reading lists, view and interact with other users and their book collections, and share their reading experiences through comments and ratings. The application is built with a React.js frontend and a Node.js/Express backend, utilizing Axios for API requests. PostgreSQL is used as the database, and the application employs JWT for secure authentication, using HTTP-only cookies for login and logout functionalities. The frontend is styled using Tailwind CSS 

## Features
- View all available books.
- View other users and their book collections.
- User authentication with login and logout.
- Add new books to personal collection.
- Add other users' books to personal reading list.
- Delete books from personal collection.
- Write comments on books in personal collections.

## Development and production using Docker 

The app is dockerized for a consistent development environment and uses Docker Compose for easy setup and orchestration of services in production mode. The .env file contains environment variables for development.

### Technologies used
- Node.js
- Express.js
- Cypress
- Nginx
- Tailwind CSS
- PostgreSQL
- Sequelize
- Umzug
- JSON Web Token (JWT)
- Docker

### Prerequisites
- Docker
- Docker Compose

### Testing 
- End to end testing is done using Cypress. 
- The command for starting Cypress tests is ``npm run cypress:open``

### Getting Started

### Continuous Integration and Continuous Deployment (CI/CD)

CI/CD is implemented using GitHub Actions. The workflow includes steps for:

- Building the application
- Checking style using eslint
- Running tests
- Deploying to a production environment
