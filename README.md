## About

It's a simple TypeScript written Discord.JS v14 bot you can easily add commands. It automaticly updates the slash commands with the Discord API.

## How to use
### Creating a command
To create a new command, you can simply create a new TypeScript file in the `commands` folder. You can use whatever name you like. See `echo.ts` as an example.

### Creating an event
To create a new event, see the [Discord.JS Client documentation](https://discord.js.org/#/docs/main/stable/class/Client) for available events and create a new TypeScript file in the `events` folder with event name. For example: `createInteraction.ts` or `ready.ts`.

## Requirements

- An editor with TypeScript support ([Visual Studio Code](https://code.visualstudio.com/)) is recommended.
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Node](https://nodejs.org/en/download/) (v16.9 or higher)

## Getting started

1. `yarn`
2. `cp .env-example .env` and update the values
3. `yarn dev`

More information can be found at: https://discordjs.guide/
