import { DID, PASSWORD, LABELS } from './constants';

import { Bot } from "@skyware/bot";

const bot = new Bot();
await bot.login({
    identifier: DID,
    password: PASSWORD,
});

//PIN POST
const post = await bot.post({
    text: "Like the replies to this post to receive labels.",
    threadgate: {
        allowLists: []
    }
});

//BRANCH POSTS
const remove_post = await post.reply({ text: "Like this post to remove all labels." });
const holofan_post = await post.reply({ text: "i'm a hololive fan!" });

const hololive_post = await post.reply({
    text: "hololive",
    threadgate: { allowLists: [] }
});
const hololive_en_post = await post.reply({
    text: "hololive English",
    threadgate: { allowLists: [] }
});
const hololive_id_post = await post.reply({
    text: "hololive Indonesia",
    threadgate: { allowLists: [] }
});
const hololive_dev_is_post = await post.reply({
    text: "hololive DEV_IS",
    threadgate: { allowLists: [] }
});

// GENERATION POSTS
const gen0_post = await hololive_post.reply({
    text: "0th Generation",
    threadgate: { allowLists: [] }
});
const gen1_post = await hololive_post.reply({
    text: "1st Generation",
    threadgate: { allowLists: [] }
});
const gen2_post = await hololive_post.reply({
    text: "2nd Generation",
    threadgate: { allowLists: [] }
});
const hololive_gamers_post = await hololive_post.reply({
    text: "hololive GAMERS",
    threadgate: { allowLists: [] }
});
const hololive_fantasy_post = await hololive_post.reply({
    text: "hololive Fantasy",
    threadgate: { allowLists: [] }
});
const gen4_post = await hololive_post.reply({
    text: "4th Generation",
    threadgate: { allowLists: [] }
});
const nepolabo_post = await hololive_post.reply({
    text: "NePoLaBo",
    threadgate: { allowLists: [] }
});
const secret_society_holox_post = await hololive_post.reply({
    text: "Secret Society holoX",
    threadgate: { allowLists: [] }
});
const jp_former_post = await hololive_post.reply({
    text: "Former members",
    threadgate: { allowLists: [] }
});

const myth_post = await hololive_en_post.reply({
    text: "-Myth-",
    threadgate: { allowLists: [] }
});
const promise_post = await hololive_en_post.reply({
    text: "-Promise-",
    threadgate: { allowLists: [] }
});
const advent_post = await hololive_en_post.reply({
    text: "-Advent-",
    threadgate: { allowLists: [] }
});
const justice_post = await hololive_en_post.reply({
    text: "-Justice-",
    threadgate: { allowLists: [] }
});
const en_former_post = await hololive_post.reply({
    text: "Former members",
    threadgate: { allowLists: [] }
});

const area_15_post = await hololive_id_post.reply({
    text: "-AREA 15-",
    threadgate: { allowLists: [] }
});
const holoro_post = await hololive_id_post.reply({
    text: "-Holoro-",
    threadgate: { allowLists: [] }
});
const holoh3ro_post = await hololive_id_post.reply({
    text: "-HoloH3ro-",
    threadgate: { allowLists: [] }
});

const regloss_post = await hololive_dev_is_post.reply({
    text: "ReGLOSS",
    threadgate: { allowLists: [] }
});

// TALENT POSTS
const tokino_sora_post = await gen0_post.reply({text: "🐻 Tokino, Sora"});
const roboco_post = await gen0_post.reply({text: "🤖 -, Roboco"});
const azki_post = await gen0_post.reply({text: "⚒️ -, AZKi"});
const sakura_miko_post = await gen0_post.reply({text: "🌸 Sakura, Miko"});
const hoshimachi_suisei_post = await gen0_post.reply({text: "☄️ Hoshimachi, Suisei"});

const shirakami_fubuki_post = await gen1_post.reply({text: "🌽 Shirakami, Fubuki"});
const natsuiro_matsuri_post = await gen1_post.reply({text: "🏮 Natsuiro, Matsuri"});
const rosenthal_aki_post = await gen1_post.reply({text: "🍎 Rosenthal, Aki"});
const akai_haato_post = await gen1_post.reply({text: "❤️‍🔥 Akai, Haato"});

const minato_aqua_post = await gen2_post.reply({text: "⚓ Minato, Aqua"});
const murasaki_shion_post = await gen2_post.reply({text: "🌙 Murasaki, Shion"});
const nakiri_ayame_post = await gen2_post.reply({text: "😈 Nakiri, Ayame"});
const yuzuki_choco_post = await gen2_post.reply({text: "💋 Yuzuki, Choco"});
const oozora_subaru_post = await gen2_post.reply({text: "🚑 Oozora, Subaru"});

const shirakami_fubuki_post_2 = await hololive_gamers_post.reply({text: "🌽 Shirakami, Fubuki"});
const ookami_mio_post = await hololive_gamers_post.reply({text: "🌲 Ookami, Mio"});
const nekomata_okayu_post = await hololive_gamers_post.reply({text: "🍙 Nekomata, Okayu"});
const inugami_korone_post = await hololive_gamers_post.reply({text: "🥐 Inugami, Korone"});

const usada_pekora_post = await hololive_fantasy_post.reply({text: "👯 Usada, Pekora"});
const shiranui_flare_post = await hololive_fantasy_post.reply({text: "🔥 Shiranui, Flare"});
const shirogane_noel_post = await hololive_fantasy_post.reply({text: "⚔️ Shirogane, Noel"});
const houshou_marine_post = await hololive_fantasy_post.reply({text: "🏴‍☠️ Houshou, Marine"});

const amane_kanata_post = await gen4_post.reply({text: "💫 Amane, Kanata"});
const tsunomaki_watame_post = await gen4_post.reply({text: "🐏 Tsunomaki, Watame"});
const tokoyami_towa_post = await gen4_post.reply({text: "👾 Tokoyami, Towa"});
const himemori_luna_post = await gen4_post.reply({text: "🍬 Himemori, Luna"});

const yukihana_lamy_post = await nepolabo_post.reply({text: "☃️ Yukihana, Lamy"});
const momosuzu_nene_post = await nepolabo_post.reply({text: "🍑🥟 Momosuzu, Nene"});
const shishiro_botan_post = await nepolabo_post.reply({text: "♌ Shishiro, Botan"});
const omaru_polka_post = await nepolabo_post.reply({text: "🎪 Omaru, Polka"});

const darknesss_laplus_post = await secret_society_holox_post.reply({text: "🛸💜 Darknesss, La+"});
const takane_lui_post = await secret_society_holox_post.reply({text: "🥀 Takane, Lui"});
const hakui_koyori_post = await secret_society_holox_post.reply({text: "🧪 Hakui, Koyori"});
const sakamata_chloe_post = await secret_society_holox_post.reply({text: "🎣 Sakamata, Chloe"});
const kazama_iroha_post = await secret_society_holox_post.reply({text: "🍃 Kazama, Iroha"});

const yozora_mel_post = await jp_former_post.reply({text: "🌟 Yozora, Mel"});
const uruha_rushia_post = await jp_former_post.reply({text: "🦋 Uruha, Rushia"});
const kiryu_coco_post = await jp_former_post.reply({text: "🐉 Kiryu, Coco"});
const mano_aloe_post = await jp_former_post.reply({text: "👅 Mano, Aloe"});
const hitomi_chris_post = await jp_former_post.reply({text: "🌰 Hitomi, Chris"});


const mori_calliope_post = await myth_post.reply({text: "💀 Mori, Calliope"});
const takanashi_kiara_post = await myth_post.reply({text: "🐔 Takanashi, Kiara"});
const ninomae_inanis_post = await myth_post.reply({text: "🦑 Ninomae, Ina’nis"});
const gawr_gura_post = await myth_post.reply({text: "🔱 Gawr, Gura"});
const watson_amelia_post = await myth_post.reply({text: "🔎 Watson, Amelia"});

const irys_post = await promise_post.reply({text: "💎 -, IRyS"});
const ceres_fauna_post = await promise_post.reply({text: "🌿 Ceres, Fauna"});
const ouro_kronii_post = await promise_post.reply({text: "⏳ Ouro, Kronii"});
const nanashi_mumei_post = await promise_post.reply({text: "🪶 Nanashi, Mumei"});
const hakos_baelz_post = await promise_post.reply({text: "🎲 Hakos, Baelz"});

const novella_shiori_post = await advent_post.reply({text: "👁️‍🗨️ Novella, Shiori"});
const koseki_bijou_post = await advent_post.reply({text: "🗿 Koseki, Bijou"});
const ravencroft_nerissa_post = await advent_post.reply({text: "🎼 Ravencroft, Nerissa"});
const abyssgard_fuwawa_post = await advent_post.reply({text: "🐾💙 Abyssgard, Fuwawa"});
const abyssgard_mococo_post = await advent_post.reply({text: "🐾🩷 Abyssgard, Mococo"});

const bloodflame_elizabeth_post = await justice_post.reply({text: "💄 Bloodflame, Elizabeth"});
const murin_gigi_post = await justice_post.reply({text: "👧 Murin, Gigi"});
const immergreen_cecilia_post = await justice_post.reply({text: "🍵 Immergreen, Cecilia"});
const panthera_raora_post = await justice_post.reply({text: "🐱 Panthera, Raora"});

const tsukumo_sana_post = await en_former_post.reply({text: "🪐 Tsukumo, Sana"});


const ayunda_risu_post = await area_15_post.reply({text: "🐿 Ayunda, Risu"});
const hoshinova_moona_post = await area_15_post.reply({text: "🔮 Hoshinova, Moona"});
const airani_iofifteen_post = await area_15_post.reply({text: "🎨 Airani, Iofifteen"});

const kureiji_ollie_post = await holoro_post.reply({text: "🧟‍♀️ Kureiji, Ollie"});
const melfissa_anya_post = await holoro_post.reply({text: "🍂 Melfissa, Anya"});
const pavolia_reine_post = await holoro_post.reply({text: "🦚 Pavolia, Reine"});

const vestia_zeta_post = await holoh3ro_post.reply({text: "📜 Vestia, Zeta"});
const kovalskia_kaela_post = await holoh3ro_post.reply({text: "🔨 Kovalskia, Kaela"});
const kanaeru_kobo_post = await holoh3ro_post.reply({text: "☔ Kanaeru, Kobo"});

const hiodoshi_ao_post = await regloss_post.reply({text: "🖋️ Hiodoshi, Ao"});
const otonose_kanade_post = await regloss_post.reply({text: "🎹✨ Otonose, Kanade"});
const ichijou_ririka_post = await regloss_post.reply({text: "🌃 Ichijou, Ririka"});
const juufuutei_raden_post = await regloss_post.reply({text: "🐚 Juufuutei, Raden"});
const todoroki_hajime_post = await regloss_post.reply({text: "🐧⚡️ Todoroki, Hajime"});

console.log(`'${remove_post.uri}' :remove_post\n`)
console.log(`'${holofan_post.uri}' :holofan_post\n`)
console.log(`'${tokino_sora_post.uri}' :tokino_sora_post\n`);
console.log(`'${roboco_post.uri}' :roboco_post\n`);
console.log(`'${azki_post.uri}' :azki_post\n`);
console.log(`'${sakura_miko_post.uri}' :sakura_miko_post\n`);
console.log(`'${hoshimachi_suisei_post.uri}' :hoshimachi_suisei_post\n`);
console.log(`'${shirakami_fubuki_post.uri}' :shirakami_fubuki_post\n`);
console.log(`'${natsuiro_matsuri_post.uri}' :natsuiro_matsuri_post\n`);
console.log(`'${rosenthal_aki_post.uri}' :rosenthal_aki_post\n`);
console.log(`'${akai_haato_post.uri}' :akai_haato_post\n`);
console.log(`'${minato_aqua_post.uri}' :minato_aqua_post\n`);
console.log(`'${murasaki_shion_post.uri}' :murasaki_shion_post\n`);
console.log(`'${nakiri_ayame_post.uri}' :nakiri_ayame_post\n`);
console.log(`'${yuzuki_choco_post.uri}' :yuzuki_choco_post\n`);
console.log(`'${oozora_subaru_post.uri}' :oozora_subaru_post\n`);
console.log(`'${shirakami_fubuki_post_2.uri}' :shirakami_fubuki_post_2\n`);
console.log(`'${ookami_mio_post.uri}' :ookami_mio_post\n`);
console.log(`'${nekomata_okayu_post.uri}' :nekomata_okayu_post\n`);
console.log(`'${inugami_korone_post.uri}' :inugami_korone_post\n`);
console.log(`'${usada_pekora_post.uri}' :usada_pekora_post\n`);
console.log(`'${shiranui_flare_post.uri}' :shiranui_flare_post\n`);
console.log(`'${shirogane_noel_post.uri}' :shirogane_noel_post\n`);
console.log(`'${houshou_marine_post.uri}' :houshou_marine_post\n`);
console.log(`'${amane_kanata_post.uri}' :amane_kanata_post\n`);
console.log(`'${tsunomaki_watame_post.uri}' :tsunomaki_watame_post\n`);
console.log(`'${tokoyami_towa_post.uri}' :tokoyami_towa_post\n`);
console.log(`'${himemori_luna_post.uri}' :himemori_luna_post\n`);
console.log(`'${yukihana_lamy_post.uri}' :yukihana_lamy_post\n`);
console.log(`'${momosuzu_nene_post.uri}' :momosuzu_nene_post\n`);
console.log(`'${shishiro_botan_post.uri}' :shishiro_botan_post\n`);
console.log(`'${omaru_polka_post.uri}' :omaru_polka_post\n`);
console.log(`'${darknesss_laplus_post.uri}' :darknesss_laplus_post\n`);
console.log(`'${takane_lui_post.uri}' :takane_lui_post\n`);
console.log(`'${hakui_koyori_post.uri}' :hakui_koyori_post\n`);
console.log(`'${sakamata_chloe_post.uri}' :sakamata_chloe_post\n`);
console.log(`'${kazama_iroha_post.uri}' :kazama_iroha_post\n`);
console.log(`'${yozora_mel_post.uri}' :yozora_mel_post\n`);
console.log(`'${uruha_rushia_post.uri}' :uruha_rushia_post\n`);
console.log(`'${kiryu_coco_post.uri}' :kiryu_coco_post\n`);
console.log(`'${mano_aloe_post.uri}' :mano_aloe_post\n`);
console.log(`'${hitomi_chris_post.uri}' :hitomi_chris_post\n`);
console.log(`'${mori_calliope_post.uri}' :mori_calliope_post\n`);
console.log(`'${takanashi_kiara_post.uri}' :takanashi_kiara_post\n`);
console.log(`'${ninomae_inanis_post.uri}' :ninomae_inanis_post\n`);
console.log(`'${gawr_gura_post.uri}' :gawr_gura_post\n`);
console.log(`'${watson_amelia_post.uri}' :watson_amelia_post\n`);
console.log(`'${irys_post.uri}' :irys_post\n`);
console.log(`'${ceres_fauna_post.uri}' :ceres_fauna_post\n`);
console.log(`'${ouro_kronii_post.uri}' :ouro_kronii_post\n`);
console.log(`'${nanashi_mumei_post.uri}' :nanashi_mumei_post\n`);
console.log(`'${hakos_baelz_post.uri}' :hakos_baelz_post\n`);
console.log(`'${novella_shiori_post.uri}' :novella_shiori_post\n`);
console.log(`'${koseki_bijou_post.uri}' :koseki_bijou_post\n`);
console.log(`'${ravencroft_nerissa_post.uri}' :ravencroft_nerissa_post\n`);
console.log(`'${abyssgard_fuwawa_post.uri}' :abyssgard_fuwawa_post\n`);
console.log(`'${abyssgard_mococo_post.uri}' :abyssgard_mococo_post\n`);
console.log(`'${bloodflame_elizabeth_post.uri}' :bloodflame_elizabeth_post\n`);
console.log(`'${murin_gigi_post.uri}' :murin_gigi_post\n`);
console.log(`'${immergreen_cecilia_post.uri}' :immergreen_cecilia_post\n`);
console.log(`'${panthera_raora_post.uri}' :panthera_raora_post\n`);
console.log(`'${tsukumo_sana_post.uri}' :tsukumo_sana_post\n`);
console.log(`'${ayunda_risu_post.uri}' :ayunda_risu_post\n`);
console.log(`'${hoshinova_moona_post.uri}' :hoshinova_moona_post\n`);
console.log(`'${airani_iofifteen_post.uri}' :airani_iofifteen_post\n`);
console.log(`'${kureiji_ollie_post.uri}' :kureiji_ollie_post\n`);
console.log(`'${melfissa_anya_post.uri}' :melfissa_anya_post\n`);
console.log(`'${pavolia_reine_post.uri}' :pavolia_reine_post\n`);
console.log(`'${vestia_zeta_post.uri}' :vestia_zeta_post\n`);
console.log(`'${kovalskia_kaela_post.uri}' :kovalskia_kaela_post\n`);
console.log(`'${kanaeru_kobo_post.uri}' :kanaeru_kobo_post\n`);
console.log(`'${hiodoshi_ao_post.uri}' :hiodoshi_ao_post\n`);
console.log(`'${otonose_kanade_post.uri}' :otonose_kanade_post\n`);
console.log(`'${ichijou_ririka_post.uri}' :ichijou_ririka_post\n`);
console.log(`'${juufuutei_raden_post.uri}' :juufuutei_raden_post\n`);
console.log(`'${todoroki_hajime_post.uri}' :todoroki_hajime_post\n`);   
