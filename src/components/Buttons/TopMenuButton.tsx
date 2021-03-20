import React, { useEffect, useState } from 'react';

import { ButtonSizeEnum, ButtonTypeEnum, DefaultButtonProps } from '.';
import './TopMenuButton.scss';

const defaultProps = {
    type: ButtonTypeEnum.ROUNDED,
    size: ButtonSizeEnum.LARGE,
};

const TopMenuButton = ({ onClick, text, type = defaultProps.type, size = defaultProps.size }: DefaultButtonProps) => {
    return (
        <button className={['top-menu-button', type, size].join(' ')} onClick={onClick}>
            {text}
        </button>
    );
};

export default TopMenuButton;
