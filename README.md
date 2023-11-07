# GDSC API Workshop

Welcome to the GDSC API Workshop! This workshop is designed to take you through the basics of working with APIs in JavaScript, using Node.js. We will cover everything from fundamental JavaScript concepts to making HTTP requests and interacting with external APIs.

## Prerequisites

Before you begin, you will need to have Node.js installed on your machine.

### Installing Node.js

To install Node.js, visit the official Node.js website at `https://nodejs.org/en/download` and download the appropriate installer for your operating system. Follow the installation instructions provided on the website to set up Node.js on your system.

After installation, you can verify that Node.js and the Node Package Manager (npm) are installed correctly by running the following commands in your terminal or command prompt:

```bash
node --version
npm --version
```

These commands should display the installed versions of Node.js and npm, respectively.

### Setting Up npm

npm is a package manager that comes with Node.js, allowing you to install libraries and tools for your projects. Before we start the workshop, make sure to install all necessary packages using npm.

Navigate to your project directory and run:

```bash
npm init -y
```

This command initializes a new Node.js project and creates a `package.json` file, which will keep track of the project dependencies.

Next, for handling HTTP requests, we will be using `axios`, a popular JavaScript library. Install it by running:

```bash
npm install axios
```

Remember to ensure that your `package.json` contains `"axios": "^your_version"` in the dependencies section before you proceed.

## Understanding APIs

APIs, or Application Programming Interfaces, are a set of rules and protocols that allow different pieces of software to communicate with each other. In the context of web development, APIs are often web-based and can be used to interact with servers to retrieve or send data.

APIs can be accessed by making HTTP requests to specific endpoints, typically URLs, which can respond with data in formats like JSON or XML. This enables developers to integrate external services and data into their applications.

During this workshop, we will explore how to make these HTTP requests using Node.js and work with APIs to perform various tasks.

## Workshop Goals

By the end of this workshop, you will learn:

1. How to make HTTP GET and POST requests using `axios`.
2. How to interact with API endpoints to fetch and manipulate data.
3. Best practices for working with APIs, such as handling authentication and managing API keys securely.

Stay tuned for hands-on examples and coding exercises that will solidify your understanding of APIs and their applications in web development.

Happy coding!
