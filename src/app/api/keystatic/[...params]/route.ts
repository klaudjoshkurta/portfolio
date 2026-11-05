import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

const configured =
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET &&
    process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;

const handler = configured || process.env.NODE_ENV === "development"
    ? makeRouteHandler({ config })
    : null;

export function GET(request: Request) {
    return handler?.GET(request) ?? new Response("Keystatic is not configured.", { status: 503 });
}

export function POST(request: Request) {
    return handler?.POST(request) ?? new Response("Keystatic is not configured.", { status: 503 });
}
