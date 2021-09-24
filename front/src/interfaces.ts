export interface IInput {
  value: string;
  id: string;
  onChange(name: string, title: string): void;
  title: string;
}

export interface ItypeNamePaylod {
  type: string;
  link: string;
}

export interface IRedux {
  login: boolean;
  auth: boolean;
  typeForm: ItypeNamePaylod;
  roomInfo: IRoomInfo;
}

export interface IValueIssueForm {
  title: string;
  link: string;
  priority: string;
}
export interface IIssues {
  id: string;
  title: string;
  link: string;
  priority: string;
}

export interface IRoomInfo {
  id: string;
  code: string;
  users: {
    id: number;
    name: string;
    surname: string;
    role: string;
    jobPosition: string;
    image: string;
  }[];
  issues: {
    id: string;
    title: string;
    priority: string;
    link: string;
  }[];
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  role: string;
  jobPosition: string;
  image: string;
}
