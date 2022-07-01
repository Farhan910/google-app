import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import ToDoLIst from "./ToDoLIst";

const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("worked");

    const tasks = {
      task: data.text,
    };
    console.log(tasks);

    if (tasks.task) {
      fetch(`https://immense-depths-73357.herokuapp.com/toDoList`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(tasks),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      swal("Success", "Your Task successfully added!", "success");
    }
  };

  return (
    <div className="mt-5 h-screen">
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Task </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Task </span>
              </label>
              <input
                type="text"
                placeholder="Your Task"
                className="input input-bordered w-full mb-2 max-w-xs"
                {...register("text", {
                  required: {
                    value: true,
                    message: "Please add a task",
                  },
                })}
              />
            </div>

            <input
              className="btn w-full max-w-xs mt-5 text-white"
              type="submit"
              value="Add "
            />
          </form>
        </div>
      </div>
      <div className="mt-5">
        <ToDoLIst />
      </div>
    </div>
  );
};

export default Home;
