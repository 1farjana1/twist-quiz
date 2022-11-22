import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    console.log(quiz)
    const { name, logo, total, id } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" /> <br />
            <h1>{name}</h1>
            <p>Total Questions:{total}</p>
            <Link to={`/quiz/${id}`}><h4> <button className='btn-quiz mt-3'>Try Quiz
            </button></h4></Link>
        </div>
    );
};

export default Quiz;