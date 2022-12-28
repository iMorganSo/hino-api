const axios = require("axios");

const API = {
    version: "v1.0",
    url: "https://hino.tk/api",
    connect: function(url = "https://hino.tk/api") {
    axios.get(url).then(res => {
         console.log(res.data);
    })
    },
    status: function(url = "https://hino.tk/api") {
        axios.get(url).then(res => {
             console.log(res.status);
        })
    },
    latency: function(url = "https://hino.tk/api") {
    const start = Date.now()
    axios.get(url)
    const finish = Date.now()
    const time = (finish - start) / 1000;
     console.log(time);
    }
}

module.exports = API;