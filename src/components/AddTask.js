import React, { useState } from "react";
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Fill in your note close the form!",
      });
    } else {
      onSave({ text });
    }
    setText("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div class="mb-6">
        <label
          class="block text-blueGray-800 text-sm font-semibold mb-2"
          for=""
          data-config-id="02_label"
        >
          Add a Title of your Note
        </label>
        <input
          class="appearance-none w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a Note"
          data-config-id="02_input"
        />
      </div>
      <input
        class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
        value="Save Task"
        data-config-id="primary-hero"
        type="submit"
      />
    </form>
  );
};
export default AddTask;
