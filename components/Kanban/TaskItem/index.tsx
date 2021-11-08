import React, { MouseEventHandler, DragEvent, useState } from "react";

export type StatusType = "default" | "important";
export interface ITaskItem {
  id: number;
  orderId: number;
  text: string;
  description?: string;
  status?: StatusType;
  colors?: string[];
  dragging?: boolean;
}

export interface ITaskItemAttributes {
  data: ITaskItem;
  onChange(callback: any): void;
  onClick?(item: ITaskItem): void;
}

export default function TaskItem({
  data,
  onChange,
  onClick,
}: ITaskItemAttributes) {
  const [pos, setPos] = useState(0);
  const dragStartHandler = (e: any, item: ITaskItem) => {
    
  }
  const dragLeaveHandler = (e: any) => {
    e.target.style.background = "#ffffff";
  }
  const dragEndHandler = (e: any, item: any) => {
    console.log(item);
  }
  const dragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.backgroundColor = "#dddddd";
  }
  const dropHandler = (e: DragEvent<HTMLDivElement>, card: any) => {
    e.preventDefault();
    setPos(state => state+1);
  }
  return (
    <div
      className={`task-item task-item-status-${data.status} ${data.dragging? "dragging" : ""}`}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, data)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e, data)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, data)}
    >
      <p>{data.text}</p>
      <style jsx>{`
        .task-item {
          width: 100%;
          min-height: 50px;
          background-color: #ffffff;
          border-radius: 5px;
          margin-bottom: 5px;
          padding: 5px;
          font-size: 0.8em;
          -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
          -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
          box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
        }
        .task-item-status-important {
          background-color: #f7a7a7;
        }
        .dragging {
          background-color: #aaaaaa;
          color: #aaaaaa;
        }
      `}</style>
    </div>
  );
}
