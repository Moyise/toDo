const mongoose = require("mongoose");

const taskListSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ToDo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TaskList = mongoose.model("TaskList", taskListSchema);

module.exports = TaskList;
