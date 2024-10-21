import { DID, PORT, MAXLABELS, POSTS, SIGN_KEY, DELETE } from "./constants.js";

import { LabelerServer } from "@skyware/labeler";
import { ComAtprotoLabelDefs } from "@atcute/client/lexicons";

const server = new LabelerServer({
    did: DID,
    signingKey: SIGN_KEY,
});

server.start(PORT, (error, address) => {
    if (error) {
        console.error("Failed to start: ", error);
    } else {
        console.log(`Listening on port ${address}`);
    }
});

//apply label given user and end of uri
export const label = (did: string, rkey: string) => {
    const query = server.db
        .prepare<string[]>(`SELECT * FROM labels WHERE uri = ?`)
        .all(did) as ComAtprotoLabelDefs.Label[];

    // find the labels the user has
    const labels = query.reduce((set, label) => {
        if (!label.neg) set.add(label.val);
        else set.delete(label.val);
        return set;
    }, new Set<string>());

    try {
        if (rkey.includes(DELETE)) { //remove labels if delete message liked
            //remove all user labels
            server.createLabels({ uri: did }, { negate: [...labels] });
            console.log(`${new Date().toISOString()} Deleted labels: ${did}`);
        } else if (labels.size < MAXLABELS && POSTS[rkey]) { //add labels to user
            //lookup label name using end of uri, then create for user
            server.createLabel({ uri: did, val: POSTS[rkey] });
            console.log(`${new Date().toISOString()} Labeled ${did}: ${POSTS[rkey]}`);
        }
    } catch (err) {
        console.error(err);
    }
};