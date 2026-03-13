import { Command } from "obsidian";
import CurrentPlugin from "../main";

export default function (plugin: CurrentPlugin): Command {
    return {
        id: "sample",
        name: "Sample",
        callback: () => {
            console.log(plugin);
        },
    };
}