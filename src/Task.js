function Task(props) {


    //    function checkBtn() {
    //         if (props.newTask.completed) {
    //             return <i className="bi bi-check-circle-fill"></i>;
    //         } else {
    //             return <i className="bi bi-circle"></i>
    //         }
    //     }

    function deleteItem() {
        props.closeTask(props.newTask.id);
    }

    function setCompleted() {
        props.completed(props.newTask.id);
    }

    return (
        <li>
            <div className="task text-start">
                <div className="form-check border p-3">
                    {/* {checkBtn()} */}
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={setCompleted}
                    >
                        Completed
                    </button>
                    <span className={props.newTask.completed ? "text-decoration-line-through ms-2" : "ms-2"}>
                        {props.newTask.taskText}</span>
                    <button
                        type="button"
                        className="btn-close btn-sm position-absolute end-0 me-4"
                        onClick={deleteItem}
                    >
                    </button>
                </div>
            </div>
        </li>
    )
}



export default Task;