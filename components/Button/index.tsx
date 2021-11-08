import React, { MouseEventHandler } from "react";
export type ButtonTypes =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "info";

export default function Button({
  onClick,
  children,
  type = "default",
  fullWidth = false,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: any | null;
  type?: ButtonTypes;
  fullWidth?: boolean
}) {
  return (
    <>
      <button className={`btn btn-${type}`} onClick={onClick}>{children}</button>
      <style jsx>{`
        .btn {
            ${fullWidth? "width: 100%;" : ""}
            padding: 12px 16px;
            border-radius: 5px;
            outline: none;
            border: none;
        }
        .btn-primary {
            background-color: #6ca2e7;
            color: white;
        }
      `}</style>
    </>
  );
}
