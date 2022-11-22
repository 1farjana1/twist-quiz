import React, { useState } from 'react';
import Option from '../Option/Option';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;

    const handleCorrectAnswer = (option) => {
        console.log("clicked", option);
        if (correctAnswer === option) {
            toast.success("True");
        }
        else {
            toast.error("Wrong");
        }
    }

    return (
        <div className='question'>
            <div>
                <h2> {question}</h2>
            </div>
            <div className='options ms-5 me-5'>
                {
                    options.map(option => <Option
                        option={option}
                        handleCorrectAnswer={handleCorrectAnswer}
                    ></Option>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Questions;