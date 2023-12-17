import React from 'react';

const ConnectItem = (props) => {
    const { logo } = props;
    return (
        <div className="connect-item">
            <button className='connect-button'>{logo}</button>
        </div>
    )
}

export default ConnectItem;