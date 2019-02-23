import React from 'react';
import Button from './Button';


const Keyboard = props => {
    return (
        <div className="keyboard">
            <Button id="clear" label="AC" click={props.click} />
            <Button id="divide" label="/" click={props.click} />
            <Button id="multiply" label="x" click={props.click} />
            <Button id="seven" label="7" click={props.click} />
            <Button id="eight" label="8" click={props.click} />
            <Button id="nine" label="9" click={props.click} />
            <Button id="substract" label="-" click={props.click} />
            <Button id="four" label="4" click={props.click} />
            <Button id="five" label="5" click={props.click} />
            <Button id="six" label="6" click={props.click} />
            <Button id="add" label="+" click={props.click} />
            <Button id="one" label="1" click={props.click} />
            <Button id="two" label="2" click={props.click} />
            <Button id="three" label="3" click={props.click} />
            <Button id="equals" label="=" click={props.click} />
            <Button id="zero" label="0" click={props.click} />
            <Button id="decimal" label="." click={props.click} />
        </div>
    );
}

export default Keyboard;