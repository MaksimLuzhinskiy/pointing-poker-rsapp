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
