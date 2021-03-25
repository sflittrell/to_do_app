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

    function restoreDeleted() {
        props.restore(props.newTask.id)
    }

    return (
        <li>
            <div className="task text-start border p-3 d-flex">
                    {/* {checkBtn()} */}
                    <i
                        type="button"
                        className={props.newTask.completed ? "bi bi-check-circle-fill" : "bi bi-circle"}
                        onClick={setCompleted}
                    >
                    </i>
                    <span className={props.newTask.completed ? "text-decoration-line-through ms-2" : "ms-2"}>
                        {props.newTask.taskText}</span>
                    {props.newTask.deleted ? <button type="button" className="btn btn-sm btn-outline-secondary ms-auto" onClick={restoreDeleted}>Restore</button> : 
                    <button type="button" className="btn-close btn-sm ms-auto" onClick={deleteItem}></button>}
                        
                    
                </div>
        </li>
    )
}



export default Task;