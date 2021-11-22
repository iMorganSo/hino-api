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

async function status(errorStatus) {
    errorStatus
    return errorStatus => {
        errorStatus("403", "HIGHER")
    }
}

async function websocket(websocket, connect) {
    websocket.connection = connect
    websocket.speed = async(speed) => {
        speed.fetch("1 - 100", latency, {URL: "https://hino.gq/api"})
    }
}

let API = {
    "name": "Hino API",
    "url": "https://hino.gq/api",
    "author": "! EkoT#0040",
    "license": "MIT",
    "version": "4.2",
    "latency": `${1 * Date.now(latency({ms: "connection", fetchSpeed: true})) - 1635899729742 - 12354 / 1 || latency({ms: true, websocket: true, connect: false})}ms`,
    "connect": async function(connect, disconnect) {
        return connect,
        async(connect) => {
            await connect.dispawn(API, {URL: API.url})
            await websocket({websocketIntents: ["INTERVAL_REFRESH", "ONLINE_DEPLOY", "WEBSOCKET_DISPAWN"]}).then(connect.getWebscoket(websocket())).catch(err => {
                throw new TypeError("Missing connect function")
            })
        },
        console.log(`${API.name} connected!`)
    },
    "shards": {
        "count": "3",
        "shard1": {
            "name": "Shard 1",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Default shard",
            "path": "./api.js#line/36"
        },
        "shard2": {
            "name": "Shard 2",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Second shard",
            "path": "./api.js#line/44"
        },
        "shard3": {
            "name": "Shard 3",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Data shard",
            "path": "./api.js#line/52",
            "database": "Local mongo"
        }
    },
    "client": {
        "name": "Hino#7027",
        "banner": "https://i.imgur.com/bp3TSi7.png",
        "version": "7.2",
        "color": "#dfdce2",
        "developers": ["743809739703451749", "667753369858736148", "376088642046918660", "317197357684883456"],
    "partners": ["750912806429130882"],
    },
    "handler": {
        "name": "Def Ocean",
        "description": `Def Ocean is an API handler for handling API's and export them to other files and other npm manager options`,
        "version": "9.0",
        "process": "PROCESS_ENGINER_THROW",
        "websocket": "PREF_WEBSOCKET_DISPAWN_304",
        "type": "API handle Supporter",
        "module": "PROCESS_MODULE_PROTYPE"
    },
    "intents": {
        "INTERVAL_MONITOR": websocket(intent => {
            intent.setInterval(function (){
                intent.intervalAction({startInterval: true, time: null, stopWhen: websocket("DISCONNECT"), monitor: intent.getMonitorClass(async(monitor, start, stop, interval, stopInterval) => {
                    await monitor.start(start);
                    if(monitor.gotsError()) {
                        await monitor.stop();
                        await stop();
                    }
                    if(monitor.isStopped()) {
                        await stopInterval();
                    }

                })})
            }, null)
        }),
         "MODES": {
             "pervorm": "PERVORM",
             "script": "SCRIPT",
             "noMode": "NO_MODE"|| null,
             "apt": "APT",
         }, 
          "DISCONNECT_IF_NO_CONNECT_FUNCTION": async() => {
            if(!API.connect) {
                throw new TypeError("Missing connect function")
            }
          },
          "USING_EXIT": exit => {
            exit.register({interactWithAPI: false, doWhile: false})
        },
         "INTERVAL_REFRESH": async(interval) => {
             await interval.refresh(true).setRegester
         },
          "ONLINE_DEPLOY": "noIntentScope",
           "WEBSOCKET_DISPAWN": websocket(async(dispawn) => {
               await dispawn.intentFetch({disconnect: true, intent: "DISCONNECT"})
           })
          }
    }

module.exports = API