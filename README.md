# Nodedex
A simple NodeJS Pokemon API

## Why?

Github user [fanzeyi](https://github.com/fanzeyi) created a nice repository, a pokedex, all data about pokemon in JSON files - [https://github.com/fanzeyi/pokemon.json](https://github.com/fanzeyi/pokemon.json).

I needed a pokedex API, so I made this one, using the data provided by [fanzeyi](https://github.com/fanzeyi).

This project, is a simple express application with a mongodb database. The database will hold the data as in the json files and express provides the corresponding routes.

## Requirements

- Docker

## Usage

- Rename `.env-example` to `.env`.
- Clone the repository, then run `docker-compose up -d`
- Access [http://localhost:8080](http://localhost:8080) - and explore the API.

## Available endpoints

*Data*

- [http://localhost:8080/api/v1/pokemons](http://localhost:8080/api/v1/pokemons) - Lists all the pokemons.
- [http://localhost:8080/api/v1/pokemons](http://localhost:8080/api/v1/skills) - All skills.
- [http://localhost:8080/api/v1/pokemons](http://localhost:8080/api/v1/items) - All items.
- [http://localhost:8080/api/v1/pokemons](http://localhost:8080/api/v1/types) - Lists types.

*Media*

- [http://localhost:8080/api/v1/static/images/](http://localhost:8080/api/v1/static/images/) - Base endpoint for images. You must also provide the full image path. Eg: `http://localhost:8080/api/v1/static/images/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/thumbnails/](http://localhost:8080/api/v1/static/thumbnails/) - Base endpoint for thumbnails. You must also provide the full thumbnails path. Eg: `http://localhost:8080/api/v1/static/sprites/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/sprites/](http://localhost:8080/api/v1/static/sprites/) - Base endpoint for sprites. You must also provide the full sprite path. Eg: `http://localhost:8080/api/v1/static/sprites/001MS.png`.

## Copyright Notice

Please note everything in repository are copyrighted by the Pokémon Company and its affiliates.
This repository is merely a compilation of data collected by the editors of [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page).
