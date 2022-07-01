import React, { useEffect, useState } from "react";
import CompletedLists from "./CompletedLists";

const CompletedTask = () => {
  const [lists, setLists] = useState();

  useEffect(() => {
    fetch("https://immense-depths-73357.herokuapp.com/completed")
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  });
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:w-max gap-10 lg:px-28 lg:w-full">
      {lists?.map((task) => (
        <CompletedLists task={task}></CompletedLists>
      ))}
    </div>
  );
};

export default CompletedTask;
