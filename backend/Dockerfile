FROM php:8.4-cli

RUN apt-get update && apt-get install -y \
    git unzip zip curl libpq-dev libzip-dev \
    libicu-dev libxml2-dev \
    && docker-php-ext-install \
    pdo_pgsql \
    mbstring \
    bcmath \
    intl \
    && apt-get clean

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

EXPOSE 8000

CMD ["bash"]
