export interface IInput {
  value: string;
  id: string;
  onChange(name: string, title: string): void;
  title: string;
}

export interface IRedux {
  login: boolean;
}
