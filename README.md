# Nodedex
A simple NodeJS Pokemon API.

## Why?

I needed a simple pokedex API to play around so I made this one using the data provided in this repository [https://github.com/fanzeyi/pokemon.json](https://github.com/fanzeyi/pokemon.json), collected from [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Main_Page).

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

**Pokemons sample:**

```json
[{
    "_id": "5d317dc803514cb6d7ec78f5",
    "id": 2,
    "name": {
    "english": "Ivysaur",
    "japanese": "フシギソウ",
    "chinese": "妙蛙草"
},
    "type": [
        "Grass",
        "Poison"
    ],
    "base": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Sp. Attack": 80,
        "Sp. Defense": 80,
        "Speed": 60
    }
}]
```

**Skills sample:**

```json
[{
  "_id": "5d317dc803514cb6d7ec7fa9",
  "accuracy": 100,
  "category": "物理",
  "cname": "手刀",
  "ename": "Karate Chop",
  "id": 2,
  "jname": "からてチョップ",
  "power": 50,
  "pp": 25,
  "type": "Fighting"
}]
```

**Items sample:**

```json
[{
    "_id": "5d317dc803514cb6d7ec7c23",
    "name": {
        "japanese": "マスターボール",
        "english": "Master Ball",
        "chinese": "大师球"
    },
    "id": 1
}]
```

**Types sample:**

```json
[{
    "_id": "5d317dc803514cb6d7ec8212",
    "english": "Normal",
    "chinese": "一般",
    "japanese": "ノーマル"
}]
```

*Media*

- [http://localhost:8080/api/v1/static/images/](http://localhost:8080/api/v1/static/images/) - Base endpoint for images. You should append the pokemon number and name in the following format: `http://localhost:8080/api/v1/static/images/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/thumbnails/](http://localhost:8080/api/v1/static/thumbnails/) - Base endpoint for thumbnails. You should also append the pokemon number and name in the following format: `http://localhost:8080/api/v1/static/sprites/001Bulbasaur.png`.
- [http://localhost:8080/api/v1/static/sprites/](http://localhost:8080/api/v1/static/sprites/) - Base endpoint for sprites. For sprites use pokemon number plus MS to get the full image url, like: `http://localhost:8080/api/v1/static/sprites/001MS.png`.

## Developing

If you want to make any changes, a [docker-compose.dev.yml](docker-compose.dev.yml) basic file is provided, so you
can attach chrome inspector to the docker container.

You can start it with:

`docker-compose -f docker-compose.yml -f  docker-compose.dev.yml up -d`

## Copyright Notice

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.5/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/2.5/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.5/">Creative Commons Attribution-NonCommercial-ShareAlike 2.5 Generic License</a>.

[https://bulbapedia.bulbagarden.net/wiki/Bulbapedia:Copyrights](https://bulbapedia.bulbagarden.net/wiki/Bulbapedia:Copyrights)

## Disclaimers
Pokémon © 2002-2019 Pokémon. © 1995-2019 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.

No copyright or trademark infringement is intended in using Pokémon content in this repository.
