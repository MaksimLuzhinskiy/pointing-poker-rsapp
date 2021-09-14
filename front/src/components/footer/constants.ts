export interface IFooterItem {
  id?: number;
  github: string;
  name: string;
}

const teamMember: IFooterItem[] = [
  {
    id: 1,
    github: 'https://github.com/MaksimLuzhinskiy',
    name: 'Максим Лужинский',
  },
  { id: 2, github: 'https://github.com/arturyaroshinski', name: 'Артур Ярошинский' },
  { id: 3, github: 'https://github.com/Dovoyan', name: 'Коваленков Ян' },
];
export default teamMember;
