# special project

## API docs
```
GET /api/gamestate/<game name> --> responds with saved game state in JSON form.
POST /api/gamestate/<game name> BODY: {'score': 5} --> saves game state.
GET /api/leaderboard/<game name> --> responds with leaderboard in form of a JSON array.
POST /api/leaderboard/<game name> --> BODY: {'metric': 5}
```

## Deployment ohjeet
1. php artisan key:generate
2. php artisan migrate --force
3. php artisan config:cache
4. php artisan route:cache
5. php artisan view:cache
6. kopioi koko laravel directory php web servulle
7. tee /public kansiosta jotenkin web root

## Komennot jos laravel kikkailee ensinmäisellä suoritus kerralla
```
composer update --no-scripts
php artisan clear-compiled 
composer dump-autoload
php artisan optimize
copy .env.example .env
php artisan config:cache
php artisan key:generate
php artisan config:cache
php artisan migrate
npm install
npm run build
```

## Todo
- [x] Testi react sivusto for reference