import 'dotenv/config';
const l_did = process.env.LABELER_DID || "";
const l_pw = process.env.LABELER_PASSWORD || "";

import { Bot } from "@skyware/bot";

const bot = new Bot();
await bot.login({
	identifier: l_did,
	password: l_pw,
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
