# API-Assignment



<h2>Tambula Lottery Game Ticket System</h2>

<h3>Introduction:</h3>
</p>Tambula Lottery Game Ticket System is an application that allows users to purchase and view their lottery game tickets online. This application is built using the Node.js runtime environment and the Express.js framework for building web applications. It also uses MongoDB, a NoSQL document-oriented database for storing and retrieving data.</p>


<h3>Prerequisites:</h3>


</p>Clone the project from the Github repository.</p>
</p>Run 'npm install' to install all the required dependencies.</p>
</p>Create a .env file in the root directory of the project and add the following environment variables:</p>
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_uri
Run the project using 'npm start' command.
</h2>Features:</h2>

<h3>User Authentication</h3> - Users can sign up and log in to the application using their username and password. The passwords are hashed using bcrypt before storing in the database.

<h3>Ticket Purchase</h3> - Users can purchase Tambula game tickets by specifying the number of tickets they want to buy. The tickets are generated randomly by the system using the generateTambulaTicket() function and stored in the database.

<h3>Ticket Viewing</h3> - Users can view their purchased tickets by specifying the page number and the limit of tickets they want to view. The tickets are retrieved from the database and sent in the response.
Endpoints:

</p>POST /user/signup - Create a new user.</p>
</p>POST /user/login - Authenticate the user and generate a JWT.</p>
</p>POST /userTicket/tickets - Purchase Tambula game tickets.</p>
</p>GET /userTicket/findTickets - Retrieve Tambula game tickets purchased by the user.</p>

<h3>Dependencies:</h3>

bcrypt - Password hashing library.
dotenv - Environment variables management.
express - Web application framework for Node.js.
jsonwebtoken - JSON Web Token (JWT) library.
mongoose - MongoDB object modeling for Node.js.

<h3>Author:</h3>
This project is created by  [ SOUVIK PATRA ].
