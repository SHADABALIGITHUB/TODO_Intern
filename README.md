# To-Do List Project

This is a full-stack to-do list application developed as an internship project. The project includes a React and TypeScript front-end, and an ExpressJS back-end with MongoDB for data storage.

## Features

- **Add Tasks:** Create new tasks with a title and description.
- **Update Tasks:** Update the status of existing tasks.
- **Delete Tasks:** Remove tasks from the list.
- **Responsive Design:** Optimized for mobile and desktop screens.

---

## Tech Stack

### Front-End
- **React:** For building the user interface.
- **TypeScript:** For type safety and better code management.
- **Material-UI:** For modern UI components.
- **Axios:** For making HTTP requests to the back-end API.
- **TailwindCSS:** For responsive and dark-mode styling.

### Back-End
- **ExpressJS:** For handling API endpoints.
- **MongoDB:** For database management.
- **Mongoose:** For interacting with the MongoDB database.

---

## Prerequisites

- Node.js (>= 16.x)
- MongoDB (installed locally or a cloud connection string)
- A code editor (preferably VS Code)

---

## Getting Started

### Step 1: Clone the Repository
```bash
git clone https://github.com/SHADABALIGITHUB/TODO_Intern.git
cd TODO_Intern
```

### Step 2: Configure the Environment Variables

Create `.env` files for both the front-end and back-end using the provided `.env.sample` files.

#### Front-End `.env`
```env
VITE_BACKEND_URL=http://localhost:8080/api/v1
```

#### Back-End `.env`
```env
MONGO_URI=mongodb://localhost:27017/todolist
PORT=8080
```

### Step 3: Install Dependencies

#### Front-End
```bash
cd Frontend
npm install
```

#### Back-End
```bash
cd Backend
npm install
```

### Step 4: Start the Applications

#### Start the Back-End
```bash
npm run dev
```

#### Start the Front-End
```bash
npm run dev
```

### Step 5: Access the Application

- **Front-End:** Open [http://localhost:5173](http://localhost:5173) in your browser.
- **Back-End API:** Available at [http://localhost:8080/api/v1](http://localhost:8080/api/v1).

---

## Folder Structure

### Front-End
```
client/
├── public/      # Static files
├── src/
   ├── components/  # Reusable components
   ├── pages/       # Page components (Home, AddTask, etc.)
   ├── Context/     # Context API for state management
   ├── App.tsx      # Main app component
   ├── main.tsx     # Entry point
```

### Back-End
```
server/
├── routes/        # API routes
├── models/        # Mongoose models
├── controllers/   # Request handlers
├── server.js     # Entry point
```

---

## API Endpoints

### Base URL: `/api/v1`

#### Tasks
- **GET `/tasks`**: Fetch all tasks.
- **GET `/tasks/:id`**: Fetch a task by ID.
- **POST `/tasks`**: Create a new task.
- **PUT `/tasks/:id`**: Update task status.
- **DELETE `/tasks/:id`**: Delete a task.

---

## Scripts

### Front-End
- `npm run dev`: Start the development server.
- `npm run build`: Build for production.

### Back-End
- `npm run dev`: Start the server with hot reload.
- `npm run start`: Start the server in production mode.

---

## Troubleshooting

### Common Issues

1. **MongoDB connection error**:
   - Ensure MongoDB is running locally or update `MONGO_URI` in the `.env` file with a valid connection string.

2. **CORS Issues**:
   - If you encounter CORS errors, verify that the back-end allows requests from the front-end URL.

3. **Environment Variables Not Working**:
   - Ensure the `.env` files are correctly set up and restart the server.

---

## Contribution

Feel free to contribute to this project by submitting issues or pull requests.

---

## License

This project is licensed under the MIT License.

