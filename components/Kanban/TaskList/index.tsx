import React from "react";
import Button from "../../Button";
import TaskItem, { ITaskItem } from "../TaskItem";
import TaskListHeader from "../TaskListHeader";

export interface ITaskList {
  id: number;
  title: string;
  items: ITaskItem[];
}

export interface ITaskListAttributes {
  data: ITaskList;
  onCardAdd?(text: string, taskListId: number): void;
  startDrag?(listId: number, id: number): void;
  onChange(callback: any): void;
}
export default function TaskList({ data, onCardAdd, startDrag }: ITaskListAttributes) {
  return (
    <div className="task-list">
      <TaskListHeader data={{title: data.title, id: data.id}}/>
      {data.items.map((item, index) => {
        return <TaskItem data={item} key={item.id} onChange={onChange} />;
      })}
      <Button type="primary">+ Add new task</Button>
      <style jsx>{`
        .task-list {
          width: 300px;
          min-height: 20px;
          border-radius: 5px;
          background-color: #eeeeee;
          margin: 10px;
          padding: 5px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
