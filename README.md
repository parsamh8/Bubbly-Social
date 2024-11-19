# Testing Route Application for Bubbly Social

  ![License: MIT](https://img.shields.io/badge/License-MIT-lightgreen.svg)
  

## Description
The **Testing Route Application** is a backend solution designed to streamline the testing and interaction with the platform's social network API. This application is tailored for developers and testers to efficiently validate the API's functionality and data integrity, ensuring the foundation for a responsive and scalable social media platform.

## Table of Contents

- [Testing Route Application for Bubbly Social](#testing-route-application-for-bubbly-social)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Local Installation / Testing](#local-installation--testing)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Contributing](#contributing)


## Installation

### Local Installation / Testing

1. Clone the rep

```
git clone https://github.com/parsamh8/Bubbly-Social
```

2. Install dependencies

```
npm i
```

3. Seed the database

```
npm run seed
```


1. Visit app:

[http://localhost:3001/](http://localhost:3001/)


## Usage

Heres a [Link](https://drive.google.com/file/d/1xi2nPvWCBrTdXrDoWHzAJo5vqzafGetr/view) to step by step demonstration.


1. **Server Initialization and Database Syncing:**
   - Launch the application with a single command to start the server.
   - Automatically sync Mongoose models with the MongoDB database for seamless NoSQL data management.

2. **API Interaction via Insomnia:**
   - **GET Routes:**
     - Retrieve user and thought data in a structured JSON format for easy verification and debugging.
   - **POST, PUT, and DELETE Routes:**
     - Perform CRUD operations to create, update, and delete users and thoughts, ensuring smooth database interactions.

3. **Reaction and Friendship Management:**
   - **POST and DELETE Routes:**
  
     - Use GET routes to retrieve user and thought data in formatted JSON:

        GET /api/users
        GET /api/thoughts

4. **Manage Reactions and Friendships**
  
5. **Verify Database Changes**
   - Confirm that the operations performed via the API are reflected in the MongoDB database by:
     - Checking the formatted JSON response in Insomnia.
     - Verifying the database using a MongoDB GUI like Compass or querying directly.


## Tests

Application tested with Insomnia and noSQL MonogoDB.


## License

This project is licensed under the MIT License.


## Contributing

Feel free to fork the repository and submit pull requests if you'd like to contribute!

Buy me a coffee? ☕
My contact info: parsamh8@gmail.com
