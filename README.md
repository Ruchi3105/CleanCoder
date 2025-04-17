# CleanCoder: AI-Based Code Reviewer

CleanCoder is a web application that leverages AI to provide detailed code reviews. It allows users to input code, select a programming language, and receive actionable feedback, suggestions, and improvements for their code.

## Features

- **Code Input**: Write or paste your code in the editor.
- **Language Selection**: Choose from multiple programming languages like JavaScript, Python, Java, etc.
- **AI-Powered Reviews**: Get detailed feedback on code quality, performance, readability, and more.
- **Real-Time Suggestions**: View suggestions and improvements in a structured format.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Project Structure

### Backend
The backend is built with Node.js and Express and uses Google's Generative AI API for code reviews.

- **Entry Point**: `backend/server.js`
- **Routes**: `backend/src/routes/ai.routes.js`
- **Controllers**: `backend/src/controllers/ai.controller.js`
- **Services**: `backend/src/services/ai.service.js`
- **Environment Variables**: Configured in `backend/.env`

### Frontend
The frontend is built with React and Vite, styled using TailwindCSS.

- **Entry Point**: `frontend/src/main.jsx`
- **Components**: Located in `frontend/src/components/`
  - `Code.jsx`: Code editor with syntax highlighting.
  - `Output.jsx`: Displays AI-generated feedback.
- **Styling**: TailwindCSS and custom styles in `frontend/src/index.css` and `frontend/src/App.css`.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure the following variables:
   ```
   PORT=5000
   GOOGLE_API_KEY=your_google_api_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Running the Application
1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:5173`.

## Usage
1. Enter your code in the editor.
2. Select the programming language from the dropdown menu.
3. Click the "Review Code" button to get AI-powered feedback.
4. View suggestions and improvements in the output section.

## Technologies Used

### Backend
- Node.js
- Express.js
- Google's Generative AI API

### Frontend
- React
- Vite
- TailwindCSS

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Google's Generative AI API for powering the code reviews.
- Open-source libraries and tools used in this project.