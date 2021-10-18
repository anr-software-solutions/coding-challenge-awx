# React App for Broccoli $ Co.

Live project is here, https://awx-challenge.web.app/

## Setup the project in Local

Check the latest version https://awx-challenge.web.app/. In order to run the project in local, follow the below steps. You will need to have Node >= 8.10 and npm >= 5.6 on your machine.

- Clone project to your local machine. https://github.com/anr-software-solutions/coding-challenge-awx.git
- Run `npm install && npm start`
- Project will be running on http://localhost:3000/

## Testing

- Run unit and integration tests with `npm run test`
- More than 20 tests cover all the use cases
- Used React Testing library and Jest for test implementation

## Features & Approach

- Used the latest version of React/Typescript and latest features. Modular architecture as recommended for React.
    - React hooks, JSX, ES6 to make the code optimised, extendable and maintainable.
- Full unit tests and integration tests coverage.
- Responsive web design.
   - Style tweaks using media queries for better device experience
- A state-of-the-art UI & UX with Material UI
- Cloud hosted project. Added the project to Github
- Firebase integration for deployments.
    - Find the project URL https://awx-challenge.web.app/
- CI/CD setup.
    - Whenever a change committed, Configured Github workflow gets executed, and a new version will be deployed in above project URL. No manual deployments required.
- Code quality check with SonarQube. https://sonarcloud.io/dashboard?id=anr-software-solutions_coding-challenge-awx
    - Github project has been integrated with SonarCloud for quality purposes. Whenever a commit is performed, SonarQube analysis will run and check for bugs, vulnerabilities, security hotspots, code smells and code duplications.
