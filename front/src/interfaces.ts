export interface IInput {
  value: string;
  id: string;
  onChange(name: string, title: string): void;
  title: string;
}

export interface IRedux {
  login: boolean;
  auth: boolean;
}

export interface IValueIssueForm {
  title: string;
  link: string;
  priority: string;
}
