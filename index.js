require("dotenv").config()
let fetch = require("node-fetch")
const { Client, Message, MessageEmbed } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_PRESENCES", "GUILD_INVITES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_BANS", "DIRECT_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGES"]});

client.on("ready", () => {
    console.log(`connected with ${client.user.tag}!`);
    let channel = client.channels.cache.get("893849568800808960");
    //channel.send("> :white_check_mark: API connected `Developer mode`")
})

if(client.ws.ping == NaN) {
    client.ws.ping = "Cannot get latency"
}

let API = {
    name: "Hino_API",
    URL: "https://hino.gq/api",
    version: "3.3",
    latency: client.ws.ping,
    shards_count: "2",
    shards: {
        "shard1": {
            "name": "Shard 1",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "latency": `${client.ws.ping * Date.now()}ms`,
            "type": "Default shard"
        },
        "shard2": {
            "name": "Shard 2",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "latency": `${client.ws.ping}ms`,
            "type": "Helper shard"
        }
    },
    "error": {
        "device": {
            "unsupported": "Your device are unsupported to use Hino's API",
            "noBase": "You don't have an much base to use Hino's API, required base: 6MB"
        },
        "node": {
            "unsupportedNode": "Unsupported node version, the required node is: 16 or higher"
        },
        "handler": {
            "unsupportedHandler": "Unsupported handler, (required handler is: \"node-fetch\")"
        },
        "status": {
            "errorCodeStatus": "$ echo err status code R?{statusCode.displayStatus}D $$ err"
        },
        "APIerrors": {
            "unsupportedVersion": "unsupported API version, required version is: 3.0 or higher"
        }, 
        "disconnectErrors": {
            "APIdisconnected": "API disconnected, $ echo err api disconnected R?{API.disconnectMessage}D $$ err",
            "websocketDisconnected": "WebSocket disconnected, $ echo err websocket disconnected R?{API.websocket.status('DISCONNECTED').sendMessage()}D $$ err",
            "handler Disconnected": "$ echo err handler disconnected R?{API.fetch('handler').name || API.handler.name || API.handler.undefined}D $$ disconnected"
        },
        "clientErrors": {
            "undefinedGuild": "This guild are undefined by local",
            "undefinedUser": "This user are undefined by local",
            "notDeveloper": "You are not developer",
            "undefinedDeveloper": "This developer are undefined by client catcher"
        }
     } 
}


client.login(process.env.TOKEN);

let base = require("./base.json");

client.on("messageCreate", message => {
    if(message.content.startsWith("lu.api")) {
        let embed = new MessageEmbed()
        .setAuthor("API info", client.user.displayAvatarURL({ dynamic: true }))
        .addFields({
name: "> API",
value: `\`\`\`js
name: ${API.name}
version: ${API.version}
URL: ${API.URL}
Latency: ${client.ws.ping}
Shards: ${API.shards_count}
\`\`\``
        }, {
            name: "Shard 1",
            value: `\`\`\`js
Version: ${API.shards.shard1["version"]},
Type: ${API.shards.shard1["type"]}
            \`\`\``,
            inline: true
        }, {
            name: "Shard 2",
            value: `\`\`\`js
Version: ${API.shards.shard2["version"]},
Type: ${API.shards.shard2["type"]}
            \`\`\``,
            inline: true
        })
        .setColor("#f2af66")
        .setImage("https://i.imgur.com/wCicMxx.png")
        message.reply({embeds: [embed]})
    }
})

client.on("messageCreate", message => {
    if(message.content.startsWith("lu.ping")) {
        message.reply({content: `${client.ws.ping}`})
    }
})