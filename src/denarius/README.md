# Deanrius

Deanrius is a personal finance management tool. 
It is a web application that allows users to track their income and expenses.

## Features

- Feature 1
- Feature 2
- Feature 3
- ...

## Setting up the development environment

### Prerequisites

Before you can run this project, you will need to install the following:

1. **.NET SDK**: .NET8 and .NET7 runtimes are both needed and .NET8 SDK is needed for development.  
   
2. **Node.js and npm**: v18.16.1 or later is required.

### Installing

After installing the prerequisites, you can set up the development environment by following these steps:

1. Clone the repository to your local machine.
2. Open the project in your IDE.
3. Run `npm install` in:
    - the `denarius-client` directory to install the necessary npm packages.
    - the `denarius-client-api` directory to install the necessary npm packages.
4. Run `dotnet restore` in the `denarius-server` directory to install the necessary .NET packages.
5. Run `dotnet build` in the `denarius-client-api` directory to build the project.

### Running tasks

- `denarius-server` directory:
    - `dotnet run` to run the server.
    - `dotnet test` to run the tests.
- `denarius-client` directory:
    - `npm start` to run the client.
    - `npm test` to run the tests.
- `denarius-client-api` directory:
    - `dotnet build` to build the project.

## Running the tests

Explain how to run the automated tests for this system.

## Built With

- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/) - The programming language used

## Authors

- **Your Name** - *Initial work* - [YourGithubUsername](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc