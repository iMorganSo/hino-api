require("dotenv").config()
const { Client } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_PRESENCES", "GUILD_INVITES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_BANS", "DIRECT_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGES"]});

client.on("ready", () => {
    console.log(`connected with ${client.user.tag}!`);
    let channel = client.channels.cache.get("893849568800808960");
    channel.send("> :white_check_mark: API connected `v3`")
})

function API(request, send, fetch, set, add, remove) {
/**
@const { API }[API]:[moduleRequest]Required!Important;
@var { API }[Request]:[excute]Required;
@var { API }[Send]:[excute]Required;
@var { API }[Fetch]:[excute]Option;
@var { API }[Set]:[export]Option;
@var { API }[Add]:[async]Option;
@var { API }[Remove]:[async]Option;
*/
HttpsRequest = "https://hino.gq/api"["startsWith".replace("http://hino.gq/api")]
}

API.addCommand = async function(commands, create, remove) { 

API.addCommand = client.options({API: true, command: true, create: true})
}

API.removeCommand = async function(commands, create, remove) { 

    API.removeCommand = client.options({API: true, command: true, remove: true})
    }

    API.intents = {
            CREATED_COMMANDS_FETCH: async slash => {
                
            API.addCommand({Guildonly: false, public: true}, { 
                name: "FetchGuild",
                description: "API intent"
            })
            },
            FETCH_GUILDS: client.guilds.cache.map(g => {
                g.id
            }),
            FETCH_USERS: client.users.cache.map(u => {
                u.tag
            }),
            GET_USER_ID: client.users.cache.map(user => {
                user.id
            }),
            REQUEST: new API(request => {
                request.fetch(API) >[module.filename]> request.apt(APII.clientIntents) >[module.id]> request.intent();
            })

    }


let APII = {
    apiUrl: "https://hino.gq/api",
    clientEvent: client,
    clientIntents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_WEBHOOKS",
    "GUILD_PRESENCES",
    "GUILD_INVITES",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_BANS",
    "DIRECT_MESSAGE_TYPING",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES"],
}

client.on("messageCreate", message => {
    if(message.content.startsWith("l.aintents")) {
        message.channel.send(`API intents: ${API.intents}\n`)
        console.log(API.intents)
    }
})

client.login(process.env.TOKEN);

new Event(API, Array.from(String(API), os => {
    void API, os >> toString(void API.intents)>> APII.clientEvent, static => {
        static(APII.clientEvent)
    }
}))

new Event(API.intents["REQUEST"], request => {
    request.fetch(client.requests);
    fetch(request, API.intents["REQUEST"])
})