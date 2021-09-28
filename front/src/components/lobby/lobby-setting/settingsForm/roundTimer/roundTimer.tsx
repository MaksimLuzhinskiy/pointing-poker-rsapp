import React, { FC } from 'react';
import './roundTimer.scss';

export interface IInputSetting {
  value: {
    minutes: string;
    seconds: string;
  };
  changeValue(name: string, title: boolean | string);
}

const RoundTimer: FC<IInputSetting> = ({ value, changeValue }) => {
  const mouseEnter = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.disabled = false;
  };

  const mouseOut = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.disabled = true;
    e.currentTarget.blur();
  };

  const validation = (id: string, number: string) => {
    switch (id) {
      case 'minutes':
        {
          console.log();
          if (
            !Number.isInteger(Number(number)) ||
            Number(number) > 3 ||
            (number.split('')[0] === '0' && number.length !== 1) ||
            number.split('')[0] === undefined
          ) {
            return 3;
          } else {
            return number;
          }
        }
        break;
      case 'seconds': {
        if (
          !Number.isInteger(Number(number)) ||
          Number(number) > 59 ||
          number.split('')[0] === undefined
        ) {
          return 59;
        } else {
          return number;
        }
      }

      default:
        return 0;
        break;
    }
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    changeValue(
      e.currentTarget.id,
      String(validation(e.currentTarget.id, e.currentTarget.value))
    );
  };
  return (
    <div className="roundTimer-field">
      <div className="roundTimer-field__label">Round time:</div>
      <div className="roundTimer-field__input">
        <div className="block-time">
          <div className="block-time__title">minutes</div>
          <input
            type="text"
            onMouseOver={mouseEnter}
            onMouseOut={mouseOut}
            onChange={onChange}
            disabled={true}
            name=""
            id="minutes"
            value={value.minutes}
          />
        </div>
        <div className="block-time">
          <div className="block-time__title">seconds</div>
          <div className="block-hz">:</div>
          <input
            type="text"
            onMouseOver={mouseEnter}
            onMouseOut={mouseOut}
            onChange={onChange}
            disabled={true}
            name=""
            id="seconds"
            value={value.seconds}
          />
        </div>
      </div>
    </div>
  );
};

export default RoundTimer;
