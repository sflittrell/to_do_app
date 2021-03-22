# To Do Pseudocode


## App:

    HTML Items:

        Header
        Input Field
            Text input area - user inputs text that is used to create/name the tasks
            Submit Button - submits the inputted text for the creation of the task
        Container to hold all the tasks (probably a ul list) - the area where the tasks will be on the page
        Item Counter - shows how many tasks are left to complete (use filter to count all Tasks where Clear = false)
        Filter Buttons
            All - shows all tasks, completed and not
            Active - uncompleted tasks
            Completed - completed (clicked) tasks
        Clear Completed Button - removes all the completed tasks

    Data:

        Task Array - an array (empty on initial load) containing all the task objects

    Functions:

        Render - renders the HTML to the index file

        Filter - a function that filters the task array by a given input
            all tasks - sets all non-cleared tasks in Task Array to show
            uncompleted tasks - show all tasks in Task Array where completed = false
            completed tasks - show all tasks in Task Array where completed = true

        Event Handlers - what happens when a given button is clicked
            Submit - sends the user text input to the task class and creates a new task item to be rendered in the HTML
            Checked - toggles the Completed state of the task between true and false
                If checked (Completed = true) change text style to marked through
            Clear - sets state of Task to Clear = true and changes the style to invisible (d-none)
            All - runs Filter function to show all tasks where Clear = false
            Active - run Filter function to show all tasks where Completed = false
            Completed - run Filter function to show all Tasks where Completed = true
            Clear All - sets the Clear state = true of Tasks where Completed = true




## Tasks:
    HTML Items:

    Check Box / Radio Button - shows whether a task is completed or not
        changes state depending of if it is checked (true of false)
        if checked put line through inputted text
    Text Field - area that contains the user inputted text from the input field
    Clear/delete Button - button that removes a task from the list (hides or deletes?)

    Data:

        ID = id number
        Created at = timestamp of when the Task was created
        Updated at = timestamp of the last update for the Task
        Completed = true or false (false by default)
        Text = user text input
        Clear = true of false (false by default) - sets when user wants to delete an item from the to do list (removes the task but does not delete it)

    Functions:

        Return - returns the given HTML to be called by the Parent (App)


