# express-password-salting
<div align="center">
  <img src="https://github.com/user-attachments/assets/6fb31df9-a83d-42ee-93ca-d559907b7285" width="900">
</div>
<br>
This repository demonstrates password salting using Express.js with bcrypt and crypto.

## Features
- Hash passwords using bcrypt
- Generate secure salt using crypto
- Combine the user entered password and the generated salt phase and hash that phase

## Technologies Used
- Node.js
- Express.js
- bcrypt
- crypto

## Installation
### Step 1 : Clone repositery
```sh
git clone https://github.com/chandisarandeni/express-password-salting
```
### Step 2 : Install dependancies
```sh
npm install
```

### Step 3 : Start the program
```sh
npm start
```
### Step 4 : Register Student
Send a POST request to `localhost:3000/` with the following JSON body:
```json
{
    "studentUsername": "Kamal Nanayakkara",
    "studentPassword": "123ABCPassword"
}
```
Then you can see
- Student Name
- Student Password
- Salt phase
- Hashed student Password
- Hashed Salted Password

---
If you have any suggestions for improvement, feel free to submit a pull request.