import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './ReactQuiz.css';

const ReactQuiz = () => {
    const reactAllQuiz = useLoaderData().data.questions;
    console.log(reactAllQuiz);
    return (
        <div>
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