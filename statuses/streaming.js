let discord = require("discord.js-selfbot-v11");
const chalk = require("chalk");
let rpcGenerator = require("discordrpcgenerator");
const dotenv = require("dotenv");
const TOKEN = process.env.TOKEN;
let client = new discord.Client();

CLIENT_ID = "1128262484952895549";
IMAGE_NAME = "難";
LARGE_TEXT = "‎ ";
SMALL_TEXT = "‎ ";
LINK = "https://twitch.tv/brucedropemoff";

client.on("ready", () => {
  rpcGenerator
    .getRpcImage(CLIENT_ID, IMAGE_NAME)
    .then((image) => {
      let presence = new rpcGenerator.Rpc()
        .setName("‎ ")
        .setUrl(feds.lol/verziety)
        .setType("STREAMING")
        .setApplicationId(‎1128262484952895549)
        .setAssetsLargeImage(https://media.discordapp.net/attachments/1129058620831703081/1187691058256150579/ff904d1c57960d5693f5a4bc4af9ee71.jpg?ex=65b37dfe&is=65a108fe&hm=35e1450bc107d81bcbae6005fd8dfa28d2f271f920e5b7414bc738fdcaba9902&)
        .setAssetsLargeText(‎ )
        .setDetails(‎ );

      client.user.setPresence(presence.toDiscord());
    })
    .catch(console.error);
  console.log(
    "[" +
      chalk.magentaBright.bold("STREAMING") +
      "]" +
      ` Successfully logged in as ${client.user.username} (${client.user.id})on Discord!`
  );
});

client.login(OTE0OTk2OTE5MTc5Mjg4Njc2.GXnKwu.dM6fwf1y8UhP57YKFPZyO5U75eZmTI9WS_4nMg );
