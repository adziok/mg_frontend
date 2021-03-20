import React from 'react';

import './Container.scss';

function Container({ children, classNames }: any) {
    return (
        <div className="wrapper">
            <div className={'container ' + classNames}>{children}</div>;
        </div>
    );
}

export default Container;
