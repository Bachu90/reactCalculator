import React from 'react';

const Button = props => {
    return (
        <div id={props.id} className="button" style={{ gridArea: props.id }} onClick={() => props.click(props.label)}>{props.label}</div>
    );
}

export default Button;