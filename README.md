# express-password-salting-demo

<div align="center">
  <img src="https://github.com/user-attachments/assets/6fb31df9-a83d-42ee-93ca-d559907b7285" width="900">
</div>

This repository demonstrates password salting using **Express.js** with **bcrypt** and **crypto**.

## Features
- Hash passwords using **bcrypt**
- Generate secure salt using **crypto**
- Combine user-entered password and generated salt, then hash the result

## Technologies Used
- Node.js
- Express.js
- bcrypt
- crypto

## Installation

### Step 1: Clone the repository
```sh
git clone https://github.com/chandisarandeni/express-password-salting
```

### Step 2: Install dependencies
```sh
npm install
```

### Step 3: Start the server
```sh
npm start
```

### Step 4: Register a student
Send a **POST** request to `http://localhost:3000/` with the following JSON body:
```json
{
  "studentUsername": "Kamal Nanayakkara",
  "studentPassword": "123ABCPassword"
}
```

You will receive a response containing:
- Student Name
- Student Password
- Salt Phase
- Hashed Student Password
- Hashed Salted Password

---

If you have any suggestions for improvement, feel free to submit a pull request.