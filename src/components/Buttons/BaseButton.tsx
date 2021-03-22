import React, { useEffect, useState } from 'react';

import { DefaultButtonProps } from '.';
import './BaseButton.scss';

const BaseButton = ({ onClick, text, type = 'rounded', size = 'large', style = 'fill' }: DefaultButtonProps) => {
    return (
        <button className={['top-menu-button', type, size, style].join(' ')} onClick={onClick}>
            {text}
        </button>
    );
};

export default BaseButton;
