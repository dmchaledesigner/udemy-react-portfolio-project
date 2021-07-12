import React from 'react';
import './button.scss';



const styles = ['btn--primary', 'btn--primary-black', 'btn--outline'];
const sizes = ['btn--medium', 'btn--large'];


const Button = ({children, type, onClick, buttonStyles, buttonSize}) => {

    const checkButtonStyle = styles.includes(buttonStyles) ? buttonStyles : styles[0];
    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];


    return (
        <div>
            <a>
                <button
                    type={type}
                    onClick={onClick}
                    className={`${checkButtonStyle} ${checkButtonSize}`}
                    >{children}
                    </button>
           </a>
        </div>
    )
}

export default Button;
