<div align="center">

<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" height="150">

<h3 align="center">CHATBOT Ensakh
</h3>

  <p align="center">
    AI-powered conversational assistant that actually understands you
    <br />
    <br />
    <a href="#contribute">Contribute</a>
    ·
    <a href="https://github.com/NBGamer99/chatbot-js/issues">Report Bug</a>
  </p>

![angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) &emsp;
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) &emsp;
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) &emsp;
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) &emsp;
![dialogflow](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white) &emsp;
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) &emsp;
![dialogflow](https://img.shields.io/badge/Dialogflow-FF9E00?style=for-the-badge&logo=dialogflow&logoColor=white)

</div>

This is an intelligent chatbot application that leverages Google Dialogflow for natural language processing and understanding. The project consists of an Angular frontend providing a sleek chat interface and a Node.js backend handling AI conversations with persistent chat history stored in MongoDB.

## Getting Started

### Prerequisites
* Node.js 14.x or higher
* MongoDB 4.x or higher
* Google Cloud Platform account with Dialogflow API enabled
* Angular CLI 16.x

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/NBGamer99/chatbot-js.git
   ```

2. Set up Google Cloud credentials
   ```sh
   # Place your Google Cloud service account JSON file in the .env directory
   # The server will automatically detect and use it
   ```

3. Install backend dependencies
   ```sh
   cd backend
   npm install
   ```

4. Install frontend dependencies
   ```sh
   cd frontend
   npm install
   ```

5. Configure environment variables
   ```sh
   # Update frontend/src/environments/environment.ts with your Dialogflow project ID
   # Update MongoDB connection string in backend/server.js if needed
   ```

## Usage

### Backend
To run the backend server, run the following command in the `backend` directory:
```sh
npm start
```
The server will start on `http://localhost:3000`

### Frontend
To run the frontend, run the following command in the `frontend` directory:
```sh
ng serve
```
The app will be available at `http://localhost:4200`

### MongoDB
Make sure MongoDB is running locally:
```sh
mongod
```

### DEMO
The chatbot features:

![Live Demo](./output.gif)

- Real-time conversation with AI responses
- Session-based chat history
- User-friendly interface with message bubbles
- Error handling and input validation
- Persistent conversation storage

## Architecture

- **Frontend**: Angular 16 with TypeScript and SCSS
- **Backend**: Node.js with Express framework
- **Database**: MongoDB for chat history persistence
- **AI Service**: Google Dialogflow for natural language processing
- **Session Management**: Custom token-based user sessions

## Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Feel free to open a pull request or an issue.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

For any questions or suggestions, feel free to contact:
- Yasser Nabouzi - [@NBGamer99](https://www.github.com/NBGamer99)
- Hamza Mesrar - [@ez7mz](https://hmesrar.netlify.app/)