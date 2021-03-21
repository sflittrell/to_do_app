import { render } from '@testing-library/react';
import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super();
        this.id = '';

    }

    render() {
        return (
            <div className="task text-start">
                <div className="form-check border p-3">
                    <input className="form-check-input ms-0" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label ms-2" for="flexCheckDefault">
                        Task
                    </label>
                    <button type="button" className="btn-close btn-sm position-absolute end-0 me-4" aria-label="Close"></button>
                </div>

            </div>
        )
    }
}

export default Task;