import React, { useEffect, useState } from 'react';

import { DefaultButtonProps } from '.';
import './BaseButton.scss';

const BaseButton = ({
    onClick,
    text,
    type = 'rounded',
    size = 'large',
    style = 'fill',
    icon,
    additionalClass,
}: DefaultButtonProps) => {
    return (
        <button className={['top-menu-button', type, size, style, additionalClass].join(' ')} onClick={onClick}>
            {[icon, text]}
        </button>
    );
};

export default BaseButton;
