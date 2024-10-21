import { DID, PASSWORD } from './constants';

import { Bot } from "@skyware/bot";

const bot = new Bot();
await bot.login({
	identifier: DID,
	password: PASSWORD,
});

const post = await bot.post({ 
    text: "Like the replies to this post to receive labels.",
    threadgate: { 
        allowLists: [] 
    } 
});

const holofanPost = await post.reply({ text: "I'm a hololive fan!" });

console.log(
	`Holofan: ${holofanPost.uri}\n`
);
