# A simple package for Hino's Discord bot API.


### Installation
```sh
npm i hino.api
```

### Usage
```js
const { API } = require("hino.api");

console.log(API)
```

### Options

| Options | Description |
| - | - |
|name| get API's name|
url| get API's url|
|license| get API's license|
version| get API's version|
|shards_count| get API shard's count|
shards| get the info about all shards|
|shard1| get info about shard1|
shard2| get info about shard2|
|client| get API's client options|
error| get API's errors type|
| latency | get API's latency ping|

#


## Shards


### Shard 1

```js
const { API } = require("hino.api");

API.shards.shard1
```

| Options| Description|
| - | - |
| name |  get shard's name |
| version | get shard's version |
| users | get shard's users **soon**|
| servers | get shard's servers **soon**|
| type | get shard's type|
| path | get shard's file path |

#

### Shard 2

```js
const { API } = require("hino.api");

API.shards.shard2
```

| Options| Description|
| - | - |
| name |  get shard's name |
| version | get shard's version |
| users | get shard's users **soon**|
| servers | get shard's servers **soon**|
| type | get shard's type|
| path | get shard's file path |

#

### Shard 3

```js
const { API } = require("hino.api");

API.shards.shard3
```

| Options| Description|
| - | - |
| name |  get shard's name |
| version | get shard's version |
| users | get shard's users **soon**|
| servers | get shard's servers **soon**|
| type | get shard's type|
| path | get shard's file path |
| database | get database's type |

#

### Client

```js
const { API } = require("hino.api");
API.client
```
| Options| Description|
| - | - |
| name | get Hino's name |
| version | get Hino's version |
| banner | get Hino's banner |
| color | get Hino's local color |

#

### Handler

```js
const { API } = require("hino.api");
API.handler
```
| Options| Description|
| - | - |
| name | get handler's name |
| description | get handler's description|
| version | get handler's version|
| process | get handler's process type|
| websocket | get handler's websocket type|
| type | get handler's type|
| module | get handler's module type | 

#

### Support
Discord support server: [here](https://discord.gg/yWkcRmZt6B)