import { DID, URL } from "./constants.js";
import { label } from "./labeler.js";

import { Jetstream } from "@skyware/jetstream";
import fs from "node:fs";

let intervalID: NodeJS.Timeout;
const cursorFile = fs.readFileSync("cursor.txt", "utf8");
if (cursorFile) console.log(`Initiate jetstream at cursor ${cursorFile}`);

//new jetstream specifically looking for likes
const jetstream = new Jetstream({
  endpoint: URL,
  wantedCollections: ["app.bsky.feed.like"],
  cursor: Number(cursorFile),
});

//write jetstream to cursor file
jetstream.on("open", () => {
  intervalID = setInterval(() => {
    if (!jetstream.cursor) return;
    fs.writeFile("cursor.txt", jetstream.cursor.toString(), (err) => {
      if (err) console.log(err);
    });
  }, 60000);
});

jetstream.on("error", (err) => console.error(err));
jetstream.on("close", () => clearInterval(intervalID));

//on like of post, apply label given user and end of uri
jetstream.onCreate("app.bsky.feed.like", (event) => {
  if (event.commit.record.subject.uri.includes(`${DID}/app.bsky.feed.post`))
    label(event.did, event.commit.record.subject.uri.split("/").pop()!);
});

jetstream.start();