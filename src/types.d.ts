import { } from 'obsidian';

declare module 'obsidian' {
	interface Commands {
		executeCommandById(commandId: string): boolean;
	}
}