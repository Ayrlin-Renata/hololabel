import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PASSWORD = process.env.PASSWORD ?? "";

export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";


export const MAXLABELS = 4;
export const DELETE = "3l6ybuq3g3d2v"; //message id 
export const POSTS: Record<string, string> = {
    "3l6yboclrty2l": "holofan" //message id
}