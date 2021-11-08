import React, { useState } from 'react'
import Button from '../Button';
import TaskList, {ITaskList} from './TaskList/index';


export default function Kanban() {
    const [taskLists, setTaskLists] = useState<ITaskList[]>([
        {
            id: 1,
            title: "Task list 1",
            items: [
                {id: 1, orderId: 3, text: "Card 3"},
                {id: 2, orderId: 1, text: "Card 1"},
                {id: 3, orderId: 2, text: "Card 2"},
                {id: 4, orderId: 4, text: "Card 4"},
            ]
        },
        {
            id: 2,
            title: "Task list 2",
            items: [
                {id: 5, orderId: 3, text: "Card 3"},
                {id: 6, orderId: 1, text: "Card 1"},
                {id: 7, orderId: 2, text: "Card 2"},
                {id: 8, orderId: 4, text: "Card 4"},
            ]
        },
        {
            id: 3,
            title: "Task list 3",
            items: [
                {id: 9, orderId: 3, text: "Card 3"},
                {id: 10, orderId: 1, text: "Card 1"},
                {id: 11, orderId: 2, text: "Card 2"},
                {id: 12, orderId: 4, text: "Card 4"},
            ]
        },
        {
            id: 4,
            title: "Task list 3",
            items: []
        },
        {
            id: 5,
            title: "Task list 3",
            items: []
        },
        {
            id: 6,
            title: "Task list 3",
            items: []
        },
        {
            id: 7,
            title: "Task list 3",
            items: []
        },
        {
            id: 8,
            title: "Task list 3",
            items: []
        }
    ])
    
    const onChange = (callback: any) => {
        setTaskLists(callback);
    }
    return <div className='todo-tab'>
        {
            taskLists.map((item, index) => {
                return <TaskList data={item} key={item.id} onChange={onChange}/>
            })
        }
        <div className='btn-add-col'>
            <Button type='primary' fullWidth={true}>+ Add new column</Button>
        </div>
        <style jsx>{`
            .todo-tab {
                width: 100vw;
                height: 100vh;
                overflow: scroll;
                padding: 20px;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-wrap: nowrap;
            }
            .btn-add-col {
                width: 200px;
                min-height: 20px;
                border-radius: 5px;
                background-color: transparent;
                margin: 10px;
                padding: 5px;
                flex-shrink: 0;
            }
        `}</style>
    </div>
}