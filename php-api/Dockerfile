# php-api/Dockerfile
FROM php:8.2-apache

RUN a2enmod rewrite

# Copy source code
COPY . /var/www/html

# Set permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
