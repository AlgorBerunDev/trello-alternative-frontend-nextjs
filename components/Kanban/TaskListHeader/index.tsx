import React from 'react';


export default function TaskListHeader({data}: {data: any}) {
    return <div className='task-list-header'>
        <h3 className="title">{data.title}</h3>
        <style jsx>{`
            .task-list-header .title {
                font-size: 0.9em;
                color: #333333;
            }
        `}</style>
    </div>
}