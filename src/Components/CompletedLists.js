import React from "react";
import swal from "sweetalert";

const CompletedLists = ({ task }) => {
  const list = {
    task: task.task,
  };
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: " You will not be able to recover this  file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log("clicked");
        fetch(`https://immense-depths-73357.herokuapp.com/completed`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(list),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        swal(" Your file has been deleted!", {
          icon: "success",
        });
      }
    });
    //

    // swal("Success", "Your Task successfully deleted!", "success");
  };
  return (
    <div className="">
      <div class="card w-96 bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="font-bold">{list.task}</h2>

          <div class="card-actions justify-end">
            <button onClick={() => handleDelete()} class="btn btn-xs">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedLists;
