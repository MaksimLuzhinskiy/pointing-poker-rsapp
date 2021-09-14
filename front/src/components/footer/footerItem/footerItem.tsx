import React, { FC } from 'react';
import { IFooterItem } from '../constants';

const FooterItem: FC<IFooterItem> = ({ github, name }: IFooterItem) => {
  return (
    <li className="team__item">
      <a href={github} target="_blank">
        {name}
      </a>
    </li>
  );
};

export default FooterItem;
