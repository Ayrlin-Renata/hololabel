import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";
export const MAXLABELS = 4;

export const DELETE = "3kwsqucto3j2a"; //message id 
export const POSTS: Record<string, string> = {
    "": "holofan" //message id
}