import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    return (
        <div>
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                <label className="form-check-label" for="flexRadioDefault1">
                    {option}
                </label>
            </div> */}

            <ol className='option'>{option}</ol>
        </div>
    );
};

export default Option;