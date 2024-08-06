# MGX Dashboard (Play Around Version)

MGX Dashboard is a practice project designed to help familiarize with building and managing a web application for grain marketing activities and settings.

## Technologies Used

This project leverages the following technologies:

- **Svelte**: For building interactive user interfaces.
- **Svelte Testing Library**: For writing unit tests.
- **Vitest**: For running unit tests.
- **Inertia.js**: For creating modern single-page applications using classic server-side routing and controllers.
- **Laravel**: As the backend framework providing APIs and server-side logic.
- **Laravel Fortify**: For authentication and security.
- **Laravel Sanctum**: For API authentication and SPA authentication.
- **Tailwind CSS**: For styling the user interface.
- **DaisyUI**: For additional UI components and themes.
- **JavaScript**: For client-side scripting.
- **HTML**: For structuring the web pages.
- **MySQL**: For database management.
- **GitHub Actions**: For Continuous Integration and Continuous Deployment (CI/CD).
- **Amazon EC2**: For server hosting.
- **Apache**: As the web server on Ubuntu 24.

## Features

- User authentication and authorization using Laravel Fortify.
- API and SPA authentication using Laravel Sanctum.
- Dashboard for managing user activities and settings.
- Interactive UI components built with Svelte.
- State management using Svelte Store.
- Navigation and page transitions handled by Inertia.js.
- Responsive design with Tailwind CSS and DaisyUI.
- Unit tests for ensuring code quality and reliability.
- CI/CD pipeline using GitHub Actions.
- Hosting on Amazon EC2 with Apache on Ubuntu 24.
- Data storage and management using MySQL.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/namnh06/mgx-dashboard.git
    cd mgx-dashboard
    ```

2. **Install dependencies:**

    ```sh
    npm install
    composer install
    ```

3. **Set up environment variables:**

   Copy the `.env.example` file to `.env` and update the environment variables as needed:

    ```sh
    cp .env.example .env
    ```

4. **Generate application key:**

    ```sh
    php artisan key:generate
    ```

5. **Run migrations and seed the database:**

    ```sh
    php artisan migrate --seed
    ```

6. **Build and run the project:**

    ```sh
    npm run dev
    php artisan serve
    ```

7. **Access the application:**

   Open your browser and navigate to `http://localhost:8000`.

## Usage

- **Login:** Use the credentials provided in the database seeder to log in.
- **Dashboard:** Access your dashboard to manage all your activities and settings.
- **Navigation:** Use the navigation links to explore different sections of the application.

## Testing

To run the tests, use the following command:

```sh
npm run test
php artisan test
```

## Deployment

### Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions

This project uses GitHub Actions for CI/CD. The workflow is defined in the `.github/workflows` directory. It includes steps for running tests, building the application, and deploying to the server.

### Hosting on Amazon EC2 with Apache

The application is hosted on an Amazon EC2 instance running Ubuntu 24 and Apache. To set up the server:

1. **Launch an EC2 instance** and connect to it via SSH.
2. **Install Apache:**

    ```sh
    sudo apt update
    sudo apt install apache2
    ```

3. **Clone the repository to the server:**

    ```sh
    cd /var/www/html
    sudo git clone https://github.com/namnh06/mgx-dashboard.git
    cd mgx-dashboard
    ```

4. **Install dependencies and set up the environment:**

    ```sh
    sudo apt install npm composer
    sudo npm install
    sudo composer install
    sudo cp .env.example .env
    sudo php artisan key:generate
    sudo php artisan migrate --seed
    ```

5. **Configure Apache to serve the application:**

    ```sh
    sudo nano /etc/apache2/sites-available/000-default.conf
    ```

   Update the `DocumentRoot` to `/var/www/html/mgx-dashboard/public`.

6. **Restart Apache:**

    ```sh
    sudo systemctl restart apache2
    ```
