function Task(props) {

    function deleteRestore() {
        props.deleteRestoreTask(props.newTask.id); // helper function that sends the task id back to the App parent
    }

    function setCompleted() {
        props.completed(props.newTask.id); // helper function that sends the task id back to the App parent
    }

    return (
        <li>
            <div className="task text-start border p-3 d-flex">
                <i
                    type="button"
                    className={props.newTask.completed ? "bi bi-check-circle-fill" : "bi bi-circle"}
                    onClick={setCompleted}
                >
                </i>
                <span className={props.newTask.completed ? "text-decoration-line-through ms-2" : "ms-2"}>
                    {props.newTask.taskText}</span>
                {props.newTask.deleted ?
                    <button type="button" className="btn btn-sm btn-outline-secondary ms-auto"
                        onClick={deleteRestore}>Restore</button> :
                    <button type="button" className="btn-close btn-sm ms-auto"
                        onClick={deleteRestore}></button>}


            </div>
        </li>
    )
}



export default Task;