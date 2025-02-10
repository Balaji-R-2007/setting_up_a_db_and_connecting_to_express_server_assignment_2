## Task: Implement User Data Storage in MongoDB

### Scenario:

As part of the backend development team for a new user management system, you need to implement the functionality that allows storing user data into MongoDB. The backend is already set up, and the task is to:

## Instructions:

### Project Setup:

- You are provided with the initial Express.js server code that includes basic server setup and necessary packages.
- You are also provided with the MongoDB user schema that defines the fields required for user data.

## MongoDB Connection:

- Set up the MongoDB atlas connection using `.env` file that contains the MongoDB URI.
- Ensure the connection to MongoDB is successful and log:
  `Connected to database`
- If the connection fails, the server should log the following error message along with details of the error:`Error connecting to database`

## Create a POST API Endpoint:

- Create a POST API endpoint at `/api/users` to handle incoming user data.
- The request body will contain the user data that needs to be validated and saved in the MongoDB database.

## User Data Validation:

- Use the provided MongoDB user schema to validate the incoming data.
- Ensure the data matches the schema (e.g., correct data types, required fields, etc.).
  - If the data is invalid:
    - Return a `400` status code with an appropriate error message.
  - If the data is valid:
    - Store it in MongoDB.
    - Return a `201` status code with a success message.

## Error Handling:

- Implement proper error handling for:
  - Database connection issues.
  - User data validation process.

- Return appropriate HTTP status codes:
  - `400` for validation failures.
  - `500` for server errors or any other unexpected issues.

## Deliverables:

### A working Express.js server file that:
- Successfully connects to MongoDB.
- Implements a POST API endpoint to receive and store user data in MongoDB.
- Validates incoming data against the provided schema.

### A `.env` file:
- Storing the MongoDB URI securely.

### Console Outputs:
- Showing the success or failure of the database connection.

### Responses from the POST API Endpoint:

#### On Success:
Status: 201  
Message: User created successfully  

#### On Validation Error:  
Status: 400  
Message: Validation error (explanation)  

## Submission:

- Submit the complete project including:
  - The Express.js server code.
  - The MongoDB user schema.
  - The `.env` file with placeholder MongoDB credentials.

- Ensure proper testing of the POST API endpoint.

- Include any necessary instructions for running the server.



# **How to Fork and Set Up Your Repository**

---

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:
       ```bash
       git init
       git remote add origin <your_github_repo_url>
       ```
       Replace `<your_github_repo_url>` with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:
       ```bash
       git add .
       git commit -m "Completed the assignment"
       git push -u origin main
       ```
  - **Option 2: Push Directly**
    1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

---

## **3. Submission Instructions**

- Once your code is successfully pushed to GitHub:
  1. Copy the link to your GitHub repository.
  2. Submit the link on the assignment submission portal.  
     The link should follow this format:  
     **`https://github.com/<your_username>/<repository_name>`**

---

### **Example Submission**

If your GitHub username is `johnDoe` and the repository name is `assignment-repo`, the submission link would look like this:  
**`https://github.com/johnDoe/assignment-repo`**
