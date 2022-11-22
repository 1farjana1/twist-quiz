import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';

export const NameContext = createContext();

const Home = () => {
    const allQuiz = useLoaderData().data;
    console.log(allQuiz)
    return (
        <div>
            <NameContext.Provider value={allQuiz.name}>

                <div className='image-set ms-5 me-5 ps-5 d-flex align-items-center'>
                    <h2 className='text-md-start text-secondary'>
                        <span>"The longer you wait for something.
                            The <br /> more you appreciate it when you get it.
                            <br /> Because anything worth having is always<br /> worth for the wait..."</span>
                    </h2>
                </div>

                <div className='mt-5'>
                    <h2>All Quiz Folders Here</h2>
                    <div className='all-quiz-container ms-5 me-5 mt-5'>
                        {
                            allQuiz.map(quiz => <Quiz
                                key={quiz.id}
                                quiz={quiz}
                            ></Quiz>)
                        }
                    </div>
                </div>
            </NameContext.Provider>

        </div>
    );
};

export default Home;