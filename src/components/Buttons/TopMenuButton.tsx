import React, { useEffect, useState } from 'react';

import { DefaultButtonProps } from '.';
import './TopMenuButton.scss';

const BaseButton = ({ onClick, text, type = 'rounded', size = 'large' }: DefaultButtonProps) => {
    return (
        <button className={['top-menu-button', type, size].join(' ')} onClick={onClick}>
            {text}
        </button>
    );
};

export default BaseButton;
