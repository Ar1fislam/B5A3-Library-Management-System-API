# Library Management System API

This  Library Management System API project built with Express, TypeScript, and MongoDB using Mongoose.

## Features

- Book Management
- Borrow Management
- Borrow Summary
- Filtering and Sorting
- Error Handling and Validation

**Technologies Used**

- Node.js, Express

- TypeScript

- MongoDB + Mongoose

- ESLint

## Installation:

Clone the Repository

```bash
npm install
```

## Create .env file and add your MongoDB database url 

.env

```bash
DATABASE_URL="your mongodb url in here"
PORT= your port
```

## Run the Application

```bash
npm run dev
```
Run the server in your local host.

## API Testing:

Use tools like Postman to test the API endpoints.

## API Endpoints

- **GET** `/api/books`
- **POST** `/api/books`
- **PATCH** `/api/books/:bookId`
- **DELETE** `/api/books/:bookId`
- **GET** `/api/borrow`
- **POST** `/api/borrow`

## Example

### Create a new book

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

Response:

```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```