## Instructions

## Installation
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run build
php artisan serve
```
open new terminal
```bash
npm run dev
```
http://localhost:8000

## Deployment
```bash
npm run build
```

*Upload files to one.com root folder:*
```
index.php
gameinfo.json
.htaccess
...

build/assets/app-xyz.js
build/assets/app-xyz.css

public/build/manifest.json
vendor/...
app/...
...
```

*Update one.com MariaDB (MySQL):*
1. Export databse as SQL queries from local phpMyAdmin
2. Run commands on one.com phpMyAdmin
