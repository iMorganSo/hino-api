async function latency() {

this.latency = async(ms, websocket, connect) => {
        ms.fetch(websocket.connection, speed => {
            websocket.speed("1 - 100")
            speed.fetch("1 - 100", ms, {URL: "https://hino.gq/api"})
        })
    }
    if(this.latency === "0") {
        return latency === "API offline"
    }
}

let API = {
    "name": "Hino API",
    "url": "https://hino.gq/api",
    "license": "MIT",
    "version": "3.3",
    "shards_count": "2",
    "latency": `1 => ${1 * Date.now(latency({ms: "connection", fetchSpeed: true})) - 1635899729742 - 12354 / 1 || latency({ms: true, websocket: true, connect: false})}ms`,
    "shards": {
        "shard1": {
            "name": "Shard 1",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Default shard",
            "path": "./api/shards/shard1"
        },
        "shard2": {
            "name": "Shard 2",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Second shard",
            "path": "./api/shards/shard2"
        }
    },
    "client": {
        "name": "Hino#7027",
        "banner": "https://i.imgur.com/wCicMxx.png",
        "version": "6.6",
        "color": "#f2af66"
    },
    "handler": {
        "name": "Def Ocean",
        "description": `Def Ocean is an SDK/API handler for handling SDK's/API's and export them to other files and other npm manager options`
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
            "undefinedDeveloper": "This developer are undefined by client catcher",
            "notResponding": "Hino are doesn't responding right now try later"
        }
     } 
}

module.exports = API