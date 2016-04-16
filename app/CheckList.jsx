import React, { Component, PropTypes } from 'react';

class CheckList extends Component {
    checkInputKeyPressed(evt) {
        if (evt.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
            evt.target.value = '';
        }
    }
    render() {
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key = { task.id } className="checklist_task">
                <input type="checkbox" checked = { task.done } onChange = {
                    () => this.props.taskCallbacks.toggle(this.props.cardId, task.id, taskIndex)
                }/>
                    { task.name }{' '}
                <a href = "#" className = "checklist_task--remove" onClick = {
                    () => this.props.taskCallbacks.delete(this.props.cardId, task.id, taskIndex)
                }/>
            </li>
        ));
        
        return (
            <div className = "checklist">
                <ul>{ tasks }</ul>
                <input 
                    ref = "myInput" 
                    type = "text"
                    className = "checklist--add-task"
                    placeholder = "Type then hit Enter to add a task"
                    onKeyPress = { e => this.checkInputKeyPressed(e) }
                />
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default CheckList;