CREATE TABLE IF NOT EXISTS product   (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(84),
    price INTEGER,
    image_url TEXT
);