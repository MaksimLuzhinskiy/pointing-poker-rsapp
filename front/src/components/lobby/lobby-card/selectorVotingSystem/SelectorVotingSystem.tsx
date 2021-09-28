import React, { FC, useEffect, useState } from 'react';
import './SelectorVotingSystem.scss';

export interface ISelect {
  title: string;
  value?: string;
  id?: string;
  createDeck(): void;
}

export interface IValueSelect {
  id: number;
  name: string;
  value: Array<number | string>;
}

const SelectorVotingSystem: FC<ISelect> = ({ title, value, id, createDeck }) => {
  const arrayValue: IValueSelect[] = [
    { id: 1, name: 'Fibonacci', value: [0, 1, 3, 5, 8, 13, 21, 32, 55, 89] },
    { id: 2, name: 'Powers of 2', value: [0, 1, 2, 4, 8, 16, 32, 64] },
    {
      id: 3,
      name: 'T-shirts',
      value: ['xxx', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<IValueSelect>(arrayValue[0]);

  const selectValue = (e: React.FormEvent<HTMLDivElement>) => {
    const el = arrayValue.find((element) => {
      return `${element.id}${element.name.split('')[0]}` === e.currentTarget.id
        ? true
        : false;
    });
    if (el !== undefined) setSelected(el);
  };

  useEffect(() => {
    // onChangeValue(id, selected);
  }, [selected]);
  const openSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cardSelectInput">
      <label>{title}</label>
      <input disabled id={id} className="input-zagl" value={value} type="text" />
      <div className="selectInput" onClick={openSelect}>
        <div className="selectInput__title">
          {`${selected.name} (${[...selected.value]})`}
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
            {arrayValue.map((element) => {
              return (
                <div
                  key={element.name}
                  id={`${element.id}${element.name.split('')[0]}`}
                  className={
                    `${selected.name} (${[...selected.value]})` ===
                    `${element.name} (${[...element.value]})`
                      ? 'selectInput__item selected'
                      : 'selectInput__item'
                  }
                  onClick={selectValue}
                >
                  {`${element.name} (${[...element.value]})`}
                </div>
              );
            })}
            <div className="selectInput__item" onClick={createDeck}>
              Create custom deck...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectorVotingSystem;
