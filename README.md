# Nodedex
A simple NodeJS Pokemon API

## Why?

Github user [fanzeyi](https://github.com/fanzeyi) created a nice repository, containing all data about pokemon in JSON files - [https://github.com/fanzeyi/pokemon.json](https://github.com/fanzeyi/pokemon.json).

I needed a pokedex API, so I made this one, using the data provided by [fanzeyi](https://github.com/fanzeyi).

This project, is a simple express application with a mongodb database. The database will hold the data, the json files, and express provides the corresponding routes.

## Requirements

- Docker

## Usage

- Rename `.env-example` to `.env`.
- Clone the repository, then run `docker-compose up -d`
- Access [http://localhost:8080](http://localhost:8080) - and explore the API.

## Available endpoints

*Data*

- [http://localhost:8080/api/v1/pokemons](http://localhost:8080/api/v1/pokemons) - Lists all the pokemons.
- [http://localhost:8080/api/v1/skills](http://localhost:8080/api/v1/skills) - All skills.
- [http://localhost:8080/api/v1/items](http://localhost:8080/api/v1/items) - All items.
- [http://localhost:8080/api/v1/types](http://localhost:8080/api/v1/types) - Lists types.

*Media*

- [http://localhost:8080/api/v1/static/images/](http://localhost:8080/api/v1/static/images/) - Base endpoint for images. You should append the pokemon number and name in the following format: `http://localhost:8080/api/v1/static/images/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/thumbnails/](http://localhost:8080/api/v1/static/thumbnails/) - Base endpoint for thumbnails. You should also append the pokemon number and name in the following format: `http://localhost:8080/api/v1/static/sprites/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/sprites/](http://localhost:8080/api/v1/static/sprites/) - Base endpoint for sprites. For sprites use pokemon number plus MS to get the full image url, like: `http://localhost:8080/api/v1/static/sprites/001MS.png`.

## Developing

If you want to make any changes, a [docker-compose.dev.yml](docker-compose.dev.yml) basic file is provided, so you
can attach chrome inspector to the docker container.

You can start it with:

`docker-compose -f docker-compose.yml -f  docker-compose.dev.yml up -d`

## LICENSE
[MIT - André Varandas](LICENSE)

## Copyright Notice

Please note everything in repository are copyrighted by the Pokémon Company and its affiliates.
This repository is merely a compilation of data collected by the editors of [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page).
