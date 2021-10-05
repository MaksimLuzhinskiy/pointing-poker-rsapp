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
  role: string;
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
  status?: number;
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

export interface IDeck {
  id: number;
  name: string;
  short: string;
  value: Array<number | string>;
}

export interface IUsers {
  id: number;
  roomId: number;
  name: string;
  surname: string;
  jobPosition: string;
  image: string;
  role: string;
}

export interface IUserJson {
  name: string;
  surname: string;
  jobPosition: string;
  image: string;
  role: string;
  idSocket: string;
}

export interface IReconnect {
  socketId: string;
  roomCode: string;
}
