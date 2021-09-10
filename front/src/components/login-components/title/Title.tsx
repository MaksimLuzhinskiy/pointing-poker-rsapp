import React, { FC } from 'react';
import styled from 'styled-components';

export interface ITitle {
  title: string;
  textalign: string;
}

const Title: FC<ITitle> = ({ title, textalign }: ITitle) => {
  const TitleStyledComponent = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #66999b;
    text-align: ${textalign};
  `;
  return <TitleStyledComponent>{title}</TitleStyledComponent>;
};

export default Title;
