import React from "react";
import Markdoc from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";
import HomeView from "./home-view";

const reader = createReader(process.cwd(), config);

export default async function Home() {
    const home = await reader.singletons.home.readOrThrow();
    const { biography, ...content } = home;
    const { node } = await biography();

    return (
        <HomeView content={content}>
            {Markdoc.renderers.react(Markdoc.transform(node.children), React)}
        </HomeView>
    );
}
