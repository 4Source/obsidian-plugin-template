import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, Settings } from "./settings/SettingsInterface";

export default class MyPlugin extends Plugin {
	settings: Settings;

  async onload() {
		await this.loadSettings();

	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}