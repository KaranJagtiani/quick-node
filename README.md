# QuickNode: Node.js, TypeScript, PostgreSQL Starter Kit

A highly efficient starter pack for Node.js development, featuring TypeScript. Our codebase leverages the power of Express.js, Sequelize, SWC, Docker, Jest and PostgreSQL and a variety of other tools to provide a robust, secure and scalable backend server environment.

## 🚀 Main Highlights

- **Express.js Implementation**: Provides HTTP server with predefined `/user` routes.
- **Advanced Security**: Integrates JWT and Bcrypt for encrypted user authentication and password storage.
- **Docker Ready**: Pre-configured with an alpine image for efficient, production-grade deployments.
- **Sequelize ORM**: Simplifies PostgreSQL database interactions.
- **Zero-Config Database Setup**: Includes `init.sql` file to automate database creation and setup in Docker.
- **Speedy Compilation**: Employs SWC, the fastest TypeScript compiler available.
- **Node Version Recommendation**: Utilizes `.nvmrc` for suggesting Node versions.
- **Type-Safe Environment Variables**: Uses `environment.d.ts` to specify types for environment variables.
- **Thorough Testing**: Ensures code integrity with Jest and Supertest for comprehensive test coverage.

## 🛠 Libraries & Tools

- [express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [sequelize](https://sequelize.org/) - Multi-dialect ORM for Node.js and TypeScript.
- [pg](https://node-postgres.com/) - Non-blocking PostgreSQL client for Node.js.
- [swc](https://swc.rs/) - Super-fast JavaScript/TypeScript compiler.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Store passwords in a safe and reliable way.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Handle authentication in a securely.
- [nodemon](https://github.com/remy/nodemon) - Utility for auto-restarting Node.js applications on file changes.
- [jest](https://jestjs.io/) - Delightful JavaScript Testing Framework.
- [supertest](https://www.npmjs.com/package/supertest) - High-level abstraction for testing HTTP.
- [dotenv](https://github.com/motdotla/dotenv) - Zero-dependency module that loads environment variables from `.env` file.
- [underscore.js](https://underscorejs.org/) - Utility-belt library for JavaScript, provides support for functional programming.
- [concurrently](https://github.com/open-cli-tools/concurrently) - Utility to run multiple npm scripts concurrently.
- [chokidar](https://github.com/paulmillr/chokidar) - An efficient and powerful file watching library.

## 🔧 Prerequisites

1. Node JS v18.15.0 - Install using [NVM](https://github.com/nvm-sh/nvm)
2. Yarn - Once Node is installed, run: `npm i -g yarn`
3. Docker (Optional) - [Dowload Link](https://www.docker.com/products/docker-desktop/)

## 💻 Running the Project Locally

1. **Clone the repository:**

```sh
git clone git@github.com:KaranJagtiani/QuickNode.git
```

2. **Install the dependencies:**

```sh
yarn install
```

3. **Build the project:**

```sh
yarn run build
```

4. **Start the application with Docker compose:**

```sh
docker compose up -d
```

Your server will be available at `http://localhost:8081` 🚀

## 📝 Local Development

```sh
yarn run dev
```

## 🧪 Testing

Execute the Jest test suite with:

```sh
yarn run test
```

## 🧑‍💻 User Routes

1. `/user/register`: This route expects a JSON body:

```
{
    "email": string,
    "password": string
}
```

2. `/user/login`: This route expects a JSON body:

```
{
    "email": string,
    "password": string
}
```

Returns:

```
{
    "token": "<signed-jwt-token>"
}
```

3. `/user/profile`: This route expects a `Bearer <token>` in the `Authorization` header.:

Returns:

```
{
    "id": number,
    "email": string
}
```

## Contributing

We welcome contributions from the community! If you wish to contribute, please follow these steps:

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
