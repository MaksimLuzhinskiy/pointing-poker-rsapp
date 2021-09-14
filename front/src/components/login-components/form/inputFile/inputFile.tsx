import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IInput } from '../../../../interfaces';
import './inputFile.scss';

const InputFile: FC<IInput> = ({ id, onChange }: IInput) => {
  const { t, i18n } = useTranslation();
  const onchangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) {
      throw new Error('Error finding e.target.files');
    }
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const readerResult = reader.result as string;
      onChange(id, readerResult);
    };
    if (img) {
      reader.readAsDataURL(img);
    }
  };

  return (
    <div className="fileInput">
      <label>
        <div className="title">{t('form.inputImage.inputImageTitle')}</div>
        <div className="fakebutton">
          <div className="fakebutton__left">{t('form.inputImage.ChooseFile')}</div>
          <div className="fakebutton__right">{t('form.inputImage.Buttonfile')}</div>
        </div>
        <input
          type="file"
          onChange={onchangeFile}
          accept="image/png, image/jpeg"
          name=""
          id={id}
        />
      </label>
    </div>
  );
};

export default InputFile;
