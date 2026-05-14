import CurrentPlugin from "../main";
import Sample from "./Sample";

export async function addAllCommands(plugin: CurrentPlugin) {
    // TODO: Dynamically import all files in the commands folder during bundling time

    plugin.addCommand(Sample(plugin));
}