## About

It's a simple TypeScript written Discord.JS v14.16.3 bot you can easily add commands and events to. It automatically updates the slash commands with the Discord API.

## How to use

### Creating a command

To create a new command, you can create a TypeScript file either directly in the `commands` folder or within a category subfolder. For example:

- `commands/echo.ts`
- `commands/messages/echo.ts`
- `commands/moderation/ban.ts`

The command structure remains the same regardless of its location. See `commands/messages/echo.ts` as an example.

### Creating an event

To create a new event, see the [Discord.JS Client documentation](https://discord.js.org/docs/packages/discord.js/14.16.3) for available events and create a new TypeScript file in the `events` folder with event name. For example: `createInteraction.ts` or `ready.ts`.

## Requirements

- An editor with TypeScript support ([Visual Studio Code](https://code.visualstudio.com/)) is recommended.
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Node](https://nodejs.org/en/download/) (v20.9 or higher is recommended)

## Getting started

1. `yarn`
2. `cp .env-example .env` and update the values
3. `yarn dev`

More information can be found at: https://discordjs.guide/
