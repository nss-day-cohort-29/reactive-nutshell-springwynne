import React, { Component } from "react"

export default class NewTaskForm extends Component {

    state = {
        userId: "",
        task: "",
        expectedCompletionDate: "",
        complete: ""
    }

    handleFieldChange = evt => {
        const stateToChange= {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange);
    };

    buildNewTask = evt => {
        evt.preventDefault();
        const task = {
            userId: "",
            task: this.state.task,
            expectedCompletionDate: this.state.expectedCompletionDate,
            complete: ""
        }
        this.props.addTask(task)
        .then(()=> this.props.history.push("/tasks"))

    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label htmlFor="Task"> Task </label>
                        <input type="text" required onChange={this.handleFieldChange} id="task" placeholder="Task" />
                    </div>
                    <div>
                        <label htmlFor="Completion Date">Completion Date</label>
                        <input type="date" required onChange={this.handleFieldChange} id="expectedCompletionDate"/>
                    </div>
                    <button type="submit" onClick={this.buildNewTask}> Submit </button>
                </form>
            </React.Fragment>

        )
    }
}