Self-Study/Essay Questions
Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using sessions?

Purpose of using sessions is to give security to your current application. It creates a session for the user and then if the user is authenticated we can do certain things.

2. What does bcrypt do to help us store passwords in a secure manner.

It hashes password, so the hashed passwords are stored in the database.

3. What does bcrypt do to slow down attackers?

By hashing the passwords, attackers cannot access the actual passwords.

4. What are the three parts of the JSON Web Token?

Header, payload, signatuare

Minimum Viable Product
[X] Implement an User Authentication System.
[X] Hash user's passwords before saving them to the database.
[X] Use JSON Web Tokens or Sessions and Cookies to persist authentication across requests.

[X] Implement the register and login functionality inside /auth/auth-router.js.
[X] A user has username and password. Both properties are required.
[X] Implement the authenticate middleware inside /auth/authenticate-middleware.js.
[X] Write a minimum o 2 tests per API endpoint. Write more tests if you have time.

Stretch Problem
Build a front end to show the jokes.

Add a React client that connects to the API and has pages for Sign Up, Sign In and showing a list of Jokes.
Once you have the functionality down, style it!
