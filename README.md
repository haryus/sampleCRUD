# Simple CRUD

> A simple CRUD system to manage an admin. 

 + [Development](#development)
 + [Project Structure](#project)
 + [Setup](#setup)

 ## Development
The backend of the system is developed on **[Laravel 8.75 PHP Vuejs MVC Framework](http://laravel.com/)** and requires PHP 8.0

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

```bash
cd sampleCRUD
cp .env.example .env
composer install
```