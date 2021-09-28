/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import './IssueFormSelect.scss';

export interface ISelect {
  title: string;
  value: string;
  id: string;
  onChangeValue(title, value): void;
}

const IssueFormSelect: FC<ISelect> = ({ title, value, id, onChangeValue }) => {
  const arrayValue = ['Low', 'Middle', 'Hight'];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(arrayValue[0]);

  const selectValue = (e: React.FormEvent<HTMLDivElement>) => {
    setSelected(e.currentTarget.innerText);
  };

  useEffect(() => {
    onChangeValue(id, selected);
  }, [selected]);
  const openSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="issueFormSelectInput">
      <label>{title}</label>
      <input disabled id={id} className="input-zagl" value={value} type="text" />
      <div className="selectInput" onClick={openSelect}>
        <div className="selectInput__title">
          {selected}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 14L12 9L7 14L17 14Z" fill="black" />
          </svg>
        </div>
        {isOpen && (
          <div className="selectInput__items">
            {arrayValue.map((element, index) => {
              return (
                <div
                  key={index}
                  className={
                    selected === element
                      ? 'selectInput__item selected'
                      : 'selectInput__item'
                  }
                  onClick={selectValue}
                >
                  {element}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueFormSelect;
