import React from 'react';
import './footer.scss';
import FooterItem from './footerItem/footerItem';
import teamMember from './constants';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__team">
        <ul className="team">
          {teamMember.map((item) => (
            <FooterItem key={item.id} name={item.name} github={item.github} />
          ))}

          {/* <li className="team__item">
            <a href="https://github.com/MaksimLuzhinskiy" target="_blank">
              Максим Лужинский
            </a>
          </li>
          <li className="team__item">
            <a href="https://github.com/arturyaroshinski" target="_blank">
              Артур Ярошинский
            </a>
          </li>
          <li className="team__item">
            <a href="https://github.com/Dovoyan" target="_blank">
              Коваленков Ян
            </a>
          </li> */}
        </ul>
      </div>
      <div className="footer__rsschool">
        <a href="https://rs.school/" target="_blank">
          <img src="./rs_school.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
