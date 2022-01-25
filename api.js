let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function latency() {
    let start = new Date().getTime(Date.now());
    let latency = 0;
    let result = start * latency
return result
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
    "version": "4.5",
    "latency": `${latency() /*0 is the latency() connection between the DB and the connection callback({response: "200"})*/ /* If latency isn't 0 = failure API connection*/}ms`,
    "connect": function(url = "https://hino.gq/api", callback) {
        callback = callback || function(callback) {
            if(callback === undefined) {
                callback = async(calling) => {
                    await calling.callback(request, response => {
                        return response, response.data;
                    })
                    return callback()
                }
            };
            return callback;
        };
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.addEventListener("load", function() {
            if (request.status !== 200) {
                return callback(new Error("Failed to connect to API, retry again later"));
            };
            callback(null, request.responseText);
        });
        let status;
            status = status => {
                correct_connection = {valueOf: connection => connection.status, response: "200", currentStatus: "OK", request: ["RESPONSED_AT_URI_STATUS", "RESENT_AT_FAILURE_CONNECTION"]};
                return correct_connection
            }
        request.send();
        return new callback({data: {request: request, response: new callback(response => response.data), connect: status()}});
    },
    "shards": {
        "count": "3",
        "shard1": {
            "name": "Shard 1",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Default shard",
            "path": "./api.js#line/66"
        },
        "shard2": {
            "name": "Shard 2",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Second shard",
            "path": "./api.js#line/74"
        },
        "shard3": {
            "name": "Shard 3",
            "version": "1.0",
            "users": "soon",
            "servers": "soon",
            "type": "Data shard",
            "path": "./api.js#line/82",
            "database": "CleanUI DB"
        }
    },
    "client": {
        "name": "Hino#7027",
        "banner": "https://i.imgur.com/bp3TSi7.png",
        "version": "7.5",
        "color": "#dfdce2",
        "color2": "#bac8d4",
        "developers": ["743809739703451749", "667753369858736148", "376088642046918660", "317197357684883456"],
    "partners": ["697163985480581200", "750912806429130882"],
    },
    "handler": {
        "name": "Def Ocean",
        "description": `Def Ocean is an API handler for handling APIs and export them to other files and other NPM manager options`,
        "version": "2x.1.0",
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
             "RealTimePerformance":"REALTIMEPERFORMANCE" || "RTP",
         }, 
          "USING_EXIT": exit => {
            exit.register({interactWithAPI: false, doWhile: false})
        },
         "INTERVAL_REFRESH": async(interval) => {
             await interval.refresh(true).setRegester
         },
          "ONLINE_DEPLOY": async(deploy) => {
              await deploy.editConfig({value: "ONLINE_DEPLOY", confirm: true, intent: "ONLINE_DEPLOY"}).saveValue(true).setTimer(null);
              deploy.saveConfig({value: "ONLINE_DEPLOY", save: true, intent: "ONLINE_DEPLOY"}).catch(err => {
                  deploy.catchError(err, console.error(err));
              })
          },
           "WEBSOCKET_DISPAWN": websocket(async(dispawn) => {
               await dispawn.intentFetch({disconnect: true, intent: "DISCONNECT"})
           })
          }
    }
module.exports = API
