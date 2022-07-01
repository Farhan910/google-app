import React, { useEffect, useState } from "react";
import CompletedLists from "./CompletedLists";

const CompletedTask = () => {
  const [lists, setLists] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/completed")
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  });
  return (
    <div className="grid lg:grid-cols-3 gap-10 px-28 lg:w-full">
      {lists?.map((task) => (
        <CompletedLists task={task}></CompletedLists>
      ))}
    </div>
  );
};

export default CompletedTask;
