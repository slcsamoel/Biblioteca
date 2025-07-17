<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

install & php8 Composer & NodeJs

-   [php](https://www.php.net/downloads)
-   [Composer](https://getcomposer.org/doc/00-intro.md)
-   [Node Js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
2. Install dependency Laravel
    ```sh
    composer install
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
    Caso tenha erro na instalação usar o comando 
    ```sh
    npm install --legacy-peer-deps
    ```
    ```sh
    npm run dev
    ```
4. Create table corresponds to .env
    ```js
    DB_DATABASE = yourdatabase_name;
    DB_USERNAME = your_username;
    DB_PASSWORD = your_password;
    ```
5. Run migration & Seeder
    ```sh
    php artisan migrate --seed
    ```

<!-- USAGE EXAMPLES -->

## Usage

1. run server-side (Laravel)
    ```sh
    php artisan serve
    ```
2. Usuario Admin
    ```sh
    email 'admin@sistema.com'
    password '12345678'
    ```
