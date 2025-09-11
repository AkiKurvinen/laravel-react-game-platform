# Laravel React game platform
- Web app for online browser game platform
- User accounst and game saves

## Develpoment

```bash
composer update --no-scripts
php artisan clear-compiled 
composer dump-autoload
php artisan optimize
cp .env.example .env
php artisan config:cache
php artisan key:generate
php artisan config:cache
php artisan migrate
npm install
npm run build
php artisan serve
npm run dev
```
http://localhost:8000

## Deployment
```bash
php artisan key:generate
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
copy laravel directory php to web server  
make /public folder the web root

## API documentation (swagger)
```bash
chmod -R 777 storage/api-docs
php artisan l5-swagger:generate
php artisan serve
```
http://localhost:8000/api/documentation

## API docs
```
GET /api/gamestate/<game name> --> responds with saved game state in JSON form.  
POST /api/gamestate/<game name> BODY: {'score': 5} --> saves game state.  
GET /api/leaderboard/<game name> --> responds with leaderboard in form of a JSON array.  
POST /api/leaderboard/<game name> --> BODY: {'metric': 5}  
```

## License
This project is a fork of [php-ohjelmointiprojekti-koodit-dream-team](https://github.com/tredu/php-ohjelmointiprojekti-koodit-dream-team) by Tampereen seudun ammattiopisto Tredu. The original project is licensed under the MIT License.
