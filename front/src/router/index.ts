import Lobby from '../pages/lobby/lobby';
import Login from './../pages/login/login';

export interface IRouter {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteName {
  LOGIN = '/login',
  LOBBY = '/lobby/:idlobby',
}

export const publicRoutes: IRouter[] = [
  { path: RouteName.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRouter[] = [
  { path: RouteName.LOBBY, exact: true, component: Lobby },
];
