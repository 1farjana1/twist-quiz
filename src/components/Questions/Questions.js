import Option from '../Option/Option';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Questions = ({ quiz }) => {
    // console.log(quiz)
    const { question, options, correctAnswer } = quiz;

    const handleCorrectAnswer = (option) => {
        if (correctAnswer === option) {
            toast.success("True");
        }
        else {
            toast.error("Wrong");
        }
    }

    const notify = () => {
        toast.success(correctAnswer);
    }

    return (
        <div className='question'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2> {question}</h2>
                <h5><FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon></h5>
            </div>
            <div className='options ms-5 me-5 mt-3'>
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