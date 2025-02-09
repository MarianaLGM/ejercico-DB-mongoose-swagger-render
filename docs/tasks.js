//SWAGGER 7-Para documentar este endpoint, editamos el /docs/tasks.js archivo de la siguiente manera:
// documentación de los diferentes endpoints

const Task = require("../models/Task");

module.exports = {
    paths: {
      "/create": {
        post: {
          tags: ["Tasks"],
          summary: "Create a task",
          description: "Creates a new task with a title and sets 'completed' to false by default.",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" }
                  },
                  required: ["title"]
                }
              }
            }
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/": {
        get: {
          tags: ["Tasks"],
          summary: "Get all tasks",
          description: "Retrieves a list of all tasks stored in the database.",
          operationId: "getTasks",
          parameters: [],
          responses: {
            200: {
              description: "List of tasks retrieved successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Task" },
                  },
                },
              },
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/id/{_id}": {
        put: {
          tags: ["Tasks"],
          summary: "Update a task title",
          description: "Update the title of a specific task without modifying the 'completed' status.",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "The ID of the task to update.",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" }
                  },
                  required: ["title"]
                }
              }
            }
          },
          responses: {
            200: { description: "Task title updated successfully" },
            500: { description: "Server error" },
          },
        },
        delete: {
          tags: ["Tasks"],
          summary: "Delete a task",
          description: "Deletes a task permanently by its ID.",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "The ID of the task to delete.",
            },
          ],
          responses: {
            200: { description: "Task deleted successfully" },
            500: { description: "Server error" },
          },
        }
      },
    },
};