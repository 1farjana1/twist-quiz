// import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
// import { NameContext } from '../Quiz/Quiz';
import './ReactQuiz.css';

const ReactQuiz = () => {
    const reactAllQuiz = useLoaderData().data.questions;
    // const name = useContext(NameContext);
    // console.log(name)
    // console.log(reactAllQuiz);
    return (
        <div className='all-questions me-5 ms-5 mt-5 bg-light rounded'>
            {/* <h2>{name}</h2> */}
            {
                reactAllQuiz.map(quiz => <Questions
                    key={quiz.id}
                    quiz={quiz}
                ></Questions>)
            }
        </div>
    );
};

export default ReactQuiz;