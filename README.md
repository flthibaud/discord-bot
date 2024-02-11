<p>
  <img src="https://img.shields.io/badge/version-1.0.0-05122A?style=for-the-badge">
  <img src="https://img.shields.io/github/issues/flthibaud/discord-bot.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/flthibaud/discord-bot.svg?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/flthibaud/discord-bot.svg?style=for-the-badge">
</p>

# Discord Bot Template TS

Template from [discord-bot-template-ts](https://github.com/rilecraft/discordbot-template-ts)

## Documentation

For detailed documentation on command options and managers, please refer to the following links:

### Command Options

- [ReturnErrors](/.github/DOCS/commandOptions/returnErrors.md)
- [Ignore](/.github/DOCS/commandOptions/ignore.md)
- [AllClientPermissions](/.github/DOCS/commandOptions/allClientPermissions.md)
- [AllowBots](/.github/DOCS/commandOptions/allowBots.md)
- [AllowInDms](/.github/DOCS/commandOptions/allowInDms.md)
- [AllUserPermissions](/.github/DOCS/commandOptions/allUserPermissions.md)
- [AnyClientPermissions](/.github/DOCS/commandOptions/anyClientPermissions.md)
- [AnyUserPermissions](/.github/DOCS/commandOptions/anyUserPermissions.md)
- [ChannelCooldown](/.github/DOCS/commandOptions/channelCooldown.md)
- [GlobalCooldown](/.github/DOCS/commandOptions/globalCooldown.md)
- [GuildCooldown](/.github/DOCS/commandOptions/guildCooldown.md)
- [OnlyChannels](/.github/DOCS/commandOptions/onlyChannels.md)
- [OnlyGuilds](/.github/DOCS/commandOptions/onlyGuilds.md)
- [OnlyRoles](/.github/DOCS/commandOptions/onlyRoles.md)
- [OnlyUsers](/.github/DOCS/commandOptions/onlyUsers.md)
- [OwnerOnly](/.github/DOCS/commandOptions/ownerOnly.md)

### Managers

- [MessageCommands](/.github/DOCS/managers/messageCommands.md)
- [SelectMenus](/.github/DOCS/managers/selectMenus.md)
- [Buttons](/.github/DOCS/managers/buttons.md)
- [Events](/.github/DOCS/managers/events.md)
- [ContextMenus](/.github/DOCS/managers/contextMenus.md)
- [SlashCommands](/.github/DOCS/managers/slashCommands.md)
- [ModalForms](/.github/DOCS/managers/modalForms.md)

## Features

- Colorful and organized logging.
- Customization options to suit your needs.
- Supports management of message commands, buttons, select menus, slash commands, context menus, and modal forms.
- Includes a variety of commonly used command options (not applicable to events).
- Supports management of custom events.
- Simple and understandable code structure.

## Notes

- Recommended Node.js version: 16 and above.
- Global slash commands and context menus may take time to refresh as it is controlled by Discord.
- Guild commands may take time to refresh if there are a large number of different guild commands.
- Collections where command and event data is stored and used:
  - `<Client>.messageCommands`: Message commands cache
  - `<Client>.messageCommands_Aliases`: Message command aliases cache
  - `<Client>.events`: Client events cache
  - `<Client>.buttonCommands`: Button interactions cache
  - `<Client>.selectMenus`: Select menu interactions cache
  - `<Client>.modalForms`: Modal form interactions cache
  - `<Client>.slashCommands`: Slash commands cache
  - `<Client>.contextMenus`: ContextMenus commands cache

## Installation

To get started with the Discord Bot, follow these steps:

1. Clone the repository by downloading it as a ZIP file or running the command `git clone https://github.com/flthibaud/discord-bot`.
2. Navigate to the template's directory and run the command `npm install` (make sure npm is installed).
3. Once all the required modules are installed, copy `.env.example` and rename it to `.env` and fill in the necessary information.
4. Run the command `npm run build && npm run start` to start the bot.

## Contribution

Contributions to the Discord Bot are welcome. To contribute, please follow these guidelines:

1. Fork the `master` branch. **Important: All changes must be made to the master branch.**
2. Make your changes in your forked repository.
3. Open a pull request to the `master` branch, and it will be reviewed promptly.
4. If everything checks out, the pull request will be merged.
