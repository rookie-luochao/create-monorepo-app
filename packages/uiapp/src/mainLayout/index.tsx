import { useState } from "react";
import { DatePicker, DatePickerProps } from "antd";
import { Outlet } from "react-router-dom";
import "./index.css";

export const MainLayout = () => {
  const [count, setCount] = useState(0);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="App">
      <DatePicker onChange={onChange} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <Outlet />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};
