import Lobby from '../pages/lobby/lobby';
import Login from './../pages/login/login';

export interface IRouter {
  id?: number;
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteName {
  LOGIN = '/login',
  LOBBY = '/lobby/:idlobby',
}

export const publicRoutes: IRouter[] = [
  { id: 1, path: RouteName.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRouter[] = [
  { id: 1, path: RouteName.LOBBY, exact: true, component: Lobby },
  { id: 2, path: RouteName.LOGIN, exact: false, component: Login },
];
