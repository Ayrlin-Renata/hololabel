import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PASSWORD = process.env.PASSWORD ?? "";

export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";


export const MAXLABELS = 74;
export const DELETE = "3l7el3lwsxd23"; //message id 
export const ORG_POSTS: Record<string, string> = {
    "3l7el3lkfub2t": "post",
    "3l7el3m4nif2n": "hololive_post",
    "3l7el3mcmtd2l": "hololive_en_post",
    "3l7el3mi6pc2f": "hololive_id_post",
    "3l7el3mnro226": "hololive_dev_is_post",
    "3l7el3mtesa2l": "gen0_post",
    "3l7el3myval2b": "gen1_post",
    "3l7el3n6rpt2b": "gen2_post",
    "3l7el3necxd2l": "hololive_gamers_post",
    "3l7el3njvpt23": "hololive_fantasy_post",
    "3l7el3np6gc2v": "gen4_post",
    "3l7el3nvgdd2b": "nepolabo_post",
    "3l7el3o2z3e2b": "secret_society_holox_post",
    "3l7el3oaszv2p": "jp_former_post",
    "3l7el3ogcel2b": "myth_post",
    "3l7el3olsov2n": "promise_post",
    "3l7el3ortyd2l": "advent_post",
    "3l7el3oxd4r2j": "justice_post",
    "3l7el3p5ec22f": "en_former_post",
    "3l7el3pd4ki2l": "area_15_post",
    "3l7el3pj5m32b": "holoro_post",
    "3l7el3pour52n": "holoh3ro_post",
    "3l7el3pukuu2b": "regloss_post",
}
export const POSTS: Record<string, string> = {
    "3l7el3lzsmu2o": "holofan",
    "3l7el3q225e2o": "🐻",
    "3l7el3q5efi2l": "🤖",
    "3l7el3qa6ft2l": "⚒️",
    "3l7el3qcx2p2m": "🌸",
    "3l7el3qfnys2v": "☄️",
    "3l7el3qihtl2t": "🌽",
    "3l7el3ql73k2f": "🏮",
    "3l7el3qnvf32b": "🍎",
    "3l7el3qqovc2h": "❤️‍🔥",
    "3l7el3qtgne2o": "⚓",
    "3l7el3qw7zm2b": "🌙",
    "3l7el3qyz532t": "😈",
    "3l7el3r3w5t23": "💋",
    "3l7el3r6kus2v": "🚑",
    "3l7el3rb3wk2v": "🌽",
    "3l7el3rdtz32l": "🌲",
    "3l7el3rglvl2l": "🍙",
    "3l7el3rjekh2m": "🥐",
    "3l7el3rm2zz2j": "👯",
    "3l7el3rosmm2o": "🔥",
    "3l7el3rrill23": "⚔️",
    "3l7el3rtyrk2h": "🏴‍☠️",
    "3l7el3rwr242b": "💫",
    "3l7el3rzhgu2o": "🐏",
    "3l7el3s4b272m": "👾",
    "3l7el3s745323": "🍬",
    "3l7el3sbvx42o": "☃️",
    "3l7el3semtl2l": "🍑🥟",
    "3l7el3shf2r2j": "♌",
    "3l7el3sk6542b": "🎪",
    "3l7el3smvhf2p": "🛸💜",
    "3l7el3spn7i2l": "🥀",
    "3l7el3ssgbe2o": "🧪",
    "3l7el3sv6wy2l": "🎣",
    "3l7el3sxw3d23": "🍃",
    "3l7el3t2nxt23": "🌟",
    "3l7el3t5dvt23": "🦋",
    "3l7el3t7vcc26": "🐉",
    "3l7el3tcprt23": "👅",
    "3l7el3tfiwj2j": "🌰",
    "3l7el3tif6k2v": "💀",
    "3l7el3tldvs2v": "🐔",
    "3l7el3toafd2b": "🦑",
    "3l7el3tr34226": "🔱",
    "3l7el3ttuxz2t": "🔎",
    "3l7el3twzck2h": "💎",
    "3l7el3tzogr2j": "🌿",
    "3l7el3u4gsi2l": "⏳",
    "3l7el3u76wf2n": "🪶",
    "3l7el3ubuxk2h": "🎲",
    "3l7el3uel4s26": "👁️‍🗨️",
    "3l7el3uhbpd23": "🗿",
    "3l7el3ujxkn2p": "🎼",
    "3l7el3umpy32b": "🐾💙",
    "3l7el3upi6i2l": "🐾🩷",
    "3l7el3us6dv2n": "💄",
    "3l7el3uutcd23": "👧",
    "3l7el3uxkij2j": "🍵",
    "3l7el3v2b3u2o": "🐱",
    "3l7el3v4zyl23": "🪐",
    "3l7el3v7quu2o": "🐿",
    "3l7el3vckb42b": "🔮",
    "3l7el3vfb532b": "🎨",
    "3l7el3vhw3t2b": "🧟‍♀️",
    "3l7el3vkgs22f": "🍂",
    "3l7el3vmxzz2j": "🦚",
    "3l7el3vpp5u2b": "📜",
    "3l7el3vsex226": "🔨",
    "3l7el3vuv532b": "☔",
    "3l7el3vxncs2v": "🖋️",
    "3l7el3w2inr2j": "🎹✨",
    "3l7el3w5bal23": "🌃",
    "3l7el3w7zhs26": "🐚",
    "3l7el3wcrec26": "🐧⚡️",
}