import React, { Component } from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';
import KanbanBoardContainer from './KanbanBoardContainer';
import Hello from './Hello';
import Search from './Search';
import FormExample from './FormExample';
import Greeter from './Greeter';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      { 
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]    
  }
];

render(<KanbanBoardContainer/>, document.getElementById('root'));
//render(<KanbanBoard cards={ cardsList }/>, document.getElementById('root'));
//render(<Hello/>, document.getElementById('root'));
//render(<Search/>, document.body);
//render(<FormExample/>, document.getElementById('root'));
//render(<Greeter/>, document.getElementById('root'));
