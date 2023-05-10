# API-Assignment



<h3>Tambula Lottery Game Ticket System</h3>

<h3>Introduction:</h3>
Tambula Lottery Game Ticket System is an application that allows users to purchase and view their lottery game tickets online. This application is built using the Node.js runtime environment and the Express.js framework for building web applications. It also uses MongoDB, a NoSQL document-oriented database for storing and retrieving data.


<h3>Prerequisites:</h3>


Clone the project from the Github repository.
Run 'npm install' to install all the required dependencies.
Create a .env file in the root directory of the project and add the following environment variables:
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_uri
Run the project using 'npm start' command.
Features:

User Authentication - Users can sign up and log in to the application using their username and password. The passwords are hashed using bcrypt before storing in the database.

Ticket Purchase - Users can purchase Tambula game tickets by specifying the number of tickets they want to buy. The tickets are generated randomly by the system using the generateTambulaTicket() function and stored in the database.

Ticket Viewing - Users can view their purchased tickets by specifying the page number and the limit of tickets they want to view. The tickets are retrieved from the database and sent in the response.
Endpoints:

POST /user/signup - Create a new user.
POST /user/login - Authenticate the user and generate a JWT.
POST /userTicket/tickets - Purchase Tambula game tickets.
GET /userTicket/findTickets - Retrieve Tambula game tickets purchased by the user.

Dependencies:

bcrypt - Password hashing library.
dotenv - Environment variables management.
express - Web application framework for Node.js.
jsonwebtoken - JSON Web Token (JWT) library.
mongoose - MongoDB object modeling for Node.js.

Author:
This project is created by  [ SOUVIK PATRA ].
