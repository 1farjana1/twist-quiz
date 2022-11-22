import React from 'react';
import Option from '../Option/Option';
import './Questions.css'

const Questions = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    return (
        <div className='question'>
            <div>
                <h2> {question}</h2>
            </div>
            <div className='options ms-5 me-5'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;