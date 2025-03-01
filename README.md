# README

# Task Manager App

A simple task manager application built using **React**, **Redux**, and a **Ruby** backend. This application allows users to manage tasks by adding, editing, completing, and deleting tasks. It features a clean, user-friendly interface with a checkbox to mark tasks as completed and the ability to edit or delete tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. **Install dependencies for the frontend:**
    - Navigate to the frontend directory and install the dependencies:
    ```bash
    cd task-manager-frontend
    npm install
    ```

3. **Install dependencies for the backend:**
    - Navigate to the backend directory and install the dependencies:
    ```bash
    cd task-manager-backend
    bundle install
    ```

4. **Set up the database (for Ruby backend):**
    - If you're using SQLite or another database, make sure to set it up:
    ```bash
    rake db:create
    rake db:migrate
    ```

5. **Start both the frontend and backend servers:**

    - For the frontend:
    ```bash
    cd task-manager-frontend
    npm start
    ```

    - For the backend (Ruby):
    ```bash
    cd task-manager-backend
    ruby app.rb
    ```

    The app will be running at [http://localhost:3000](http://localhost:3000).

## Usage

- **Create a Task**: Enter the task title in the input field and click "Add Task".
- **Edit a Task**: Click the "Edit" button to make changes to the task title.
- **Mark a Task as Complete**: Use the checkbox to mark a task as completed, which will strike through the title.
- **Delete a Task**: Click the "X" button to remove a task from the list.
- **Responsive Layout**: The application is designed to work across different screen sizes.

## Features

- Add, edit, and delete tasks.
- Mark tasks as complete with a checkbox.
- Edit task titles inline.
- All actions are persisted in the backend via a Ruby API.
- Modern and clean UI built with React.

## Technologies Used

- **Frontend**: 
  - React
  - Redux
  - Styled-Components / SCSS
  - Font Awesome (for icons)
  
- **Backend**:
  - Ruby
  - Sinatra (or Rails, depending on your backend choice)

- **Other**:
  - Axios (for API calls)
  - React Router (for routing, if applicable)





