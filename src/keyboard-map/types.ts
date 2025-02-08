export type KeyboardMap = Record<string, KeyboardItem>;

export interface KeyboardItem {
  keyName: string;
  char: string;
  initials?: string;
  finals?: string[];
}
