import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const TasksList = ({ task }) => {
  const list = {
    task: task.task,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleClicked = () => {
    //
    console.log("clicked");
    fetch(`http://localhost:5000/completed`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    swal("Success", "Your Task successfully added!", "success");

    if (handleClicked) {
      fetch(`http://localhost:5000/toDoList`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };

  //
  
  

  const onSubmit = (data) => {
    console.log("clicked");

    fetch(`http://localhost:5000/toDoList`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    swal("Success", "Your Task successfully edited!", "success");
  };

  return (
    <div>
      <div class="card w-96 bg-base-200 shadow-xl ">
        <div class="card-body">
          <div className="flex">
            <input
              className="w-4"
              type="checkbox"
              name="accept"
              onClick={() => handleClicked()}
              value="yes"
            ></input>

            <h1 className="ml-1 text-xl">{task.task}</h1>
          </div>
          <div class="card-actions justify-end">
            <label for="my-modal-6" class="btn btn-xs modal-button">
              Edit
            </label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle  ">
              <div class="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control  max-w-xs ">
                    <label className="label">
                      <span className="label-text"> New Task </span>
                    </label>
                    <div>
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
                    <div>
                      <input
                        className="btn btn-success w-28 max-w-xs mt-5 text-white"
                        type="submit"
                        value="Add "
                      />
                    </div>
                  </div>
                </form>
                <div class="modal-action">
                  <label for="my-modal-6" class="btn btn-xs">
                    X
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
