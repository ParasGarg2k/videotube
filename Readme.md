
# Video Streaming Platform Backend

This is a **backend** system for a video streaming platform (similar to YouTube) built using **Node.js**. It provides APIs for uploading, viewing, liking, and commenting on videos, as well as user authentication and channel management.

## Features
- **User Authentication**: Register, login, and manage user sessions with JWT tokens.
- **Video Management**: Upload, edit, delete, and stream video content.
- **Channel Management**: Create and manage channels, subscribe to channels.
- **Interactions**: Like, dislike, and comment on videos.
- **Video Streaming**: Serve video content efficiently to users.
- **Secure API**: Access control through token-based authentication.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/parasgarg2k/video-streaming-backend.git
   ```

2. Navigate into the project directory:
   ```bash
   cd videotube
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure the following environment variables:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. The backend will now be running on `http://localhost:5000`.

## Usage

1. Use **Postman** to interact with the backend APIs.
2. The system provides routes for uploading videos, managing user channels, commenting, and interacting with video content.
3. Integrate this backend with a frontend of your choice (React, Angular, etc.) to build the full video streaming platform.

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Token)


## Authentication

The app uses **JWT (JSON Web Token)** for secure user authentication. Upon login, the user receives a token which must be sent in the `Authorization` header for protected routes. Example:

```bash
Authorization: Bearer <your_token_here>
```
