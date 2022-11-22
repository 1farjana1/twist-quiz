import React from 'react';
import './Option.css'

const Option = ({ option, handleCorrectAnswer }) => {
    return (
        <div>
            <ol onClick={() => handleCorrectAnswer(option)} className='option'>{option}</ol>
        </div>
    );
};

export default Option;