Необходимо написать простое WEB приложение на angular, которое выводит список постов.
Дизайн не предусмотрен и дается на откуп разработчику

Обязательный условия:

- Для отображения ленты исполльзовать маршрут /feed
- Модульность и Lazy Loading
- NGRX и все его прелести)
- Для работы с сетевыми запросами и ошибками использовать Interceptor
- При запросе ленты требуется заголовок Authoriztion: Bearer ${access_token}.
- Сохранение токенов после обновления страницы

Описание контрактов
POST https://api.nutson.us/api/v3/auth/session
Request
Header
User-Agent
Body
{
"installation_token": "2kxlfAbJwFdAuh0",
"device": {
"platform": "Web",
"platform_version": "Web-1.0.0"
},
"application": {
"app_name": "Test WEB App",
"app_version": "1.0",
"app_build": "development",
"app_type": "watch_to_earn"
}
}

Response
{
"data": {
"refresh_token": "string",
"access_token": "string",
"user_id": "string"
}
}

GET
https://api.nutson.us/api/v2/media/feed/recommended
Request
Header
Authorization: Bearer ${access_token}

Response
{
"data": {
"media": [{...} MediaDTO ]
}
}
