import { render } from '@testing-library/react';
import React from 'react';

function Task(props) {

    // console.log(props)



        return (
            <li>
            <div className="task text-start">
                <div className="form-check border p-3">
                    <input 
                    className="form-check-input ms-0" 
                    type="checkbox" 
                    value="" 
                    />
                    <label 
                    className="form-check-label ms-2" 
                    htmlFor="flexCheckDefault">
                        {props.taskArr}
                    </label>
                    <button 
                    type="button" 
                    className="btn-close btn-sm position-absolute end-0 me-4">
                    </button>
                </div>
            </div>
            </li>
        )
    }


export default Task;