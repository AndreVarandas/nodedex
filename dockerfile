# Choose and name our temporary image, to hold the pokemon.json
# Repository, to be imported into the mongodb later.
FROM alpine as intermediate
# Add metadata identifying these image as our build container
LABEL stage=intermediate

# Install dependencies required to git clone.
RUN apk update && \
    apk add --update git

# Clone the pokemon.json repository
RUN git clone https://github.com/fanzeyi/pokemon.json.git pokedex

FROM mhart/alpine-node:10

# Change workdir and copy images to our app
WORKDIR /app
COPY . .
COPY --from=intermediate /pokedex/images public/images
COPY --from=intermediate /pokedex/thumbnails public/thumbnails
COPY --from=intermediate /pokedex/sprites public/sprites

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

RUN npm install --prod

CMD ["node", "src/index.js"]
