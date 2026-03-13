import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, Settings } from './settings/SettingsInterface';
import { MyPluginSettingTab } from './settings/SettingsTab';
import { addAllCommands } from './commands';

export default class MyPlugin extends Plugin {
	settings: Settings;

	async onload() {
		await this.loadSettings();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new MyPluginSettingTab(this.app, this));

		// Add all commands registered
		addAllCommands(this);
	}

	onunload() {
		// TEST CHANGES FOR RELEASE WORKFLOW 6
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
