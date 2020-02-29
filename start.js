const { ShardingManager } = require('discord.js');
require("dotenv").config({ path: __dirname + "/config.json" })
const manager = new ShardingManager('./bot.js', {
    token: Token
});

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
manager.on('shardCreate', shard => console.log(`Create shard ${shard.id}`));