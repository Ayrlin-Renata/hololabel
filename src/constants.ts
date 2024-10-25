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
    "3l7el3m4nif2n": "hololive-post",
    "3l7el3mcmtd2l": "hololive-en-post",
    "3l7el3mi6pc2f": "hololive-id-post",
    "3l7el3mnro226": "hololive-dev-is-post",
    "3l7el3mtesa2l": "gen0-post",
    "3l7el3myval2b": "gen1-post",
    "3l7el3n6rpt2b": "gen2-post",
    "3l7el3necxd2l": "hololive-gamers-post",
    "3l7el3njvpt23": "hololive-fantasy-post",
    "3l7el3np6gc2v": "gen4-post",
    "3l7el3nvgdd2b": "nepolabo-post",
    "3l7el3o2z3e2b": "secret-society-holox-post",
    "3l7el3oaszv2p": "jp-former-post",
    "3l7el3ogcel2b": "myth-post",
    "3l7el3olsov2n": "promise-post",
    "3l7el3ortyd2l": "advent-post",
    "3l7el3oxd4r2j": "justice-post",
    "3l7el3p5ec22f": "en-former-post",
    "3l7el3pd4ki2l": "area-15-post",
    "3l7el3pj5m32b": "holoro-post",
    "3l7el3pour52n": "holoh3ro-post",
    "3l7el3pukuu2b": "regloss-post",
}
export const POSTS: Record<string, string> = {
    "3l7el3lzsmu2o": "holofan",
    "3l7el3q225e2o": "tokino-sora",
    "3l7el3q5efi2l": "roboco",
    "3l7el3qa6ft2l": "azki",
    "3l7el3qcx2p2m": "sakura-miko",
    "3l7el3qfnys2v": "hoshimachi-suisei",
    "3l7el3qihtl2t": "shirakami-fubuki",
    "3l7el3ql73k2f": "natsuiro-matsuri",
    "3l7el3qnvf32b": "rosenthal-aki",
    "3l7el3qqovc2h": "akai-haato",
    "3l7el3qtgne2o": "minato-aqua",
    "3l7el3qw7zm2b": "murasaki-shion",
    "3l7el3qyz532t": "nakiri-ayame",
    "3l7el3r3w5t23": "yuzuki-choco",
    "3l7el3r6kus2v": "oozora-subaru",
    "3l7el3rb3wk2v": "shirakami-fubuki",
    "3l7el3rdtz32l": "ookami-mio",
    "3l7el3rglvl2l": "nekomata-okayu",
    "3l7el3rjekh2m": "inugami-korone",
    "3l7el3rm2zz2j": "usada-pekora",
    "3l7el3rosmm2o": "shiranui-flare",
    "3l7el3rrill23": "shirogane-noel",
    "3l7el3rtyrk2h": "houshou-marine",
    "3l7el3rwr242b": "amane-kanata",
    "3l7el3rzhgu2o": "tsunomaki-watame",
    "3l7el3s4b272m": "tokoyami-towa",
    "3l7el3s745323": "himemori-luna",
    "3l7el3sbvx42o": "yukihana-lamy",
    "3l7el3semtl2l": "momosuzu-nene",
    "3l7el3shf2r2j": "shishiro-botan",
    "3l7el3sk6542b": "omaru-polka",
    "3l7el3smvhf2p": "darknesss-laplus",
    "3l7el3spn7i2l": "takane-lui",
    "3l7el3ssgbe2o": "hakui-koyori",
    "3l7el3sv6wy2l": "sakamata-chloe",
    "3l7el3sxw3d23": "kazama-iroha",
    "3l7el3t2nxt23": "yozora-mel",
    "3l7el3t5dvt23": "uruha-rushia",
    "3l7el3t7vcc26": "kiryu-coco",
    "3l7el3tcprt23": "mano-aloe",
    "3l7el3tfiwj2j": "hitomi-chris",
    "3l7el3tif6k2v": "mori-calliope",
    "3l7el3tldvs2v": "takanashi-kiara",
    "3l7el3toafd2b": "ninomae-inanis",
    "3l7el3tr34226": "gawr-gura",
    "3l7el3ttuxz2t": "watson-amelia",
    "3l7el3twzck2h": "irys",
    "3l7el3tzogr2j": "ceres-fauna",
    "3l7el3u4gsi2l": "ouro-kronii",
    "3l7el3u76wf2n": "nanashi-mumei",
    "3l7el3ubuxk2h": "hakos-baelz",
    "3l7el3uel4s26": "novella-shiori",
    "3l7el3uhbpd23": "koseki-bijou",
    "3l7el3ujxkn2p": "ravencroft-nerissa",
    "3l7el3umpy32b": "abyssgard-fuwawa",
    "3l7el3upi6i2l": "abyssgard-mococo",
    "3l7el3us6dv2n": "bloodflame-elizabeth",
    "3l7el3uutcd23": "murin-gigi",
    "3l7el3uxkij2j": "immergreen-cecilia",
    "3l7el3v2b3u2o": "panthera-raora",
    "3l7el3v4zyl23": "tsukumo-sana",
    "3l7el3v7quu2o": "ayunda-risu",
    "3l7el3vckb42b": "hoshinova-moona",
    "3l7el3vfb532b": "airani-iofifteen",
    "3l7el3vhw3t2b": "kureiji-ollie",
    "3l7el3vkgs22f": "melfissa-anya",
    "3l7el3vmxzz2j": "pavolia-reine",
    "3l7el3vpp5u2b": "vestia-zeta",
    "3l7el3vsex226": "kovalskia-kaela",
    "3l7el3vuv532b": "kanaeru-kobo",
    "3l7el3vxncs2v": "hiodoshi-ao",
    "3l7el3w2inr2j": "otonose-kanade",
    "3l7el3w5bal23": "ichijou-ririka",
    "3l7el3w7zhs26": "juufuutei-raden",
    "3l7el3wcrec26": "todoroki-hajime",
}