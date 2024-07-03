# Simple CRUD

> A simple CRUD system to manage an admin. 

 + [Development](#development)
 + [Project Structure](#project)
 + [Setup](#setup)

 ## Development
The backend of the system is developed on **[Laravel 8.75 PHP Vuejs 3 MVC Framework](http://laravel.com/)** and requires PHP 8.0

## Project Structure

### Routes

- **Login:** `/login` - Login page.
- **Registration:** `/registration` - Registration page.
- **User/Client:** `/user` - Displays the user/client page.
- **Client Interest** `/client` - Client Interest page.
- **Interest** `/interest` - Interest page.
- **Role** `/role` - Role page.


### Models

- **User Model:** Manages user information including  email, password, first_name, last_name, contact_no, birthday, role_id, created_by, updated_by.
- **Password Reset Tokens:** Handles password reset tokens.
- **Failed Jobs:** Records failed job attempts.
- **Personal Access Tokens:** Manages personal access tokens.
- **Role:** Manages role information.
- **Interest:** Manages interest information.
- **Client Interest** Manages client interest information.

### Migrations

- `users` table: Manages user information.
- `password_reset_tokens` table: Manages password reset tokens.
- `failed_jobs` table: Records failed job attempts.
- `personal_access_tokens` table: Manages personal access tokens.
- `roles` table: Stores role information.
- `interests` table: Stores interest information.
- `client_interest` table: Stores client interest information.

### Controllers

- **ClientController:** Handles client display-related functionalities.
- **HomeController:** Handles home display-related functionalities.
- **InterestController:** Handles interest display-related functionalities.
- **RoleController:** Handles role display-related functionalities.
- **UserController:** Handles authentication-related functionalities.

### Requests

- **ClientController:** Handles client validations.
- **InterestController:** Handles interest validations.
- **RoleController:** Handles role validations.
- **UserController:** Handles user validations.

## Setup

If you want to use my project first you can either download the zip file or you can clone it using the command to your designated location


Setup your environment
1. Navigate to the project directory and set up the environment file:
```bash
cd sampleCRUD
cp .env.example .env
composer install 
npm install or yarn install
```

2.Generate a new application key and make necessary changes in the .env file:

```bash
php artisan key:generate
```
3. Create a database:
```
create database sample;
```

4. Run migrations and seeders to set up the database:

```bash
php artisan migrate
php artisan db:seed
```

Or run the following command to refresh the database and seed it in one step:

```bash
php artisan migrate:fresh --seed
```

5. Start the server and the asset watcher in two separate terminal windows:

```
php artisan serve
and
yarn run watch # or npm run watch
```