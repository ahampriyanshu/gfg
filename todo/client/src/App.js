import React, { useState, useEffect } from "react";
import ContactService from "./contact.service";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

export default function App() {
  const [task, setTask] = useState([]);
  const [data, setData] = useState({
    editModal: false,
    addModal: false,
    title: "",
    id: "",
  });

  const openAddModal = () => {
    setData({
      addModal: true,
      title: "",
    });
  };

  const openEditModal = (data) => {
    setData({
      editModal: true,
      title: data.title,
      id: data._id,
    });
  };

  const closeModal = () => {
    setData({
      addModal: false,
      editModal: false,
      title: "",
    });
  };

  const refresh = () => {
    ContactService.getAll()
      .then((res) => {
        setTask(res.data);
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`);
      });
    console.log(task);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const deleteAll = () => {
    ContactService.deleteAll()
      .then((res) => {
        toast.success(`${res.data.message}`);
        refresh();
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`);
      });
  };

  const deleteOne = (id) => {
    ContactService.delete(id)
      .then((res) => {
        toast.success(`${res.data.message}`);
        refresh();
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`);
      });
  };

  const addData = async (e) => {
    e.preventDefault();
    const form = {
      title: data.title,
    };
    ContactService.create(form)
      .then((res) => {
        toast.success(`${res}`);
        closeModal();
        refresh();
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`);
      });
  };

  const updateData = async (e) => {
    e.preventDefault();
    const form = {
      title: data.title,
    };
    ContactService.update(data.id, form)
      .then((res) => {
        toast.success(`${res.data.message}`);
        closeModal();
        refresh();
      })
      .catch((e) => {
        toast.error(`${e.response.data.message}`);
      });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="my-12 mx-auto w-full lg:w-6/10">
          <div className="flex flex-wrap items-center px-4 py-4 text-sm">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="font-semibold text-sm md:text-base text-gray-900 dark:text-gray-50">
                Todo List
              </h2>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1 text-right space-x-2">
              <button
                type="submit"
                onClick={openAddModal}
                className="text-white text-center mx-auto rounded-md bg-blue-900 py-2 
                  px-4 inline-flex items-center focus:outline-none"
              >
                Add New
              </button>

              <button
                type="submit"
                onClick={deleteAll}
                className="text-white text-center mx-auto rounded-md bg-blue-900 py-2 
                  px-4 inline-flex items-center focus:outline-none"
              >
                Remove All
              </button>
            </div>
          </div>
          {task.length ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-5">Index</th>
                      <th className="px-4 py-5">Title</th>
                      <th className="px-4 py-5">Created</th>
                      <th className="px-4 py-5">Update</th>
                      <th className="px-4 py-5">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {task.map((todo, index) => (
                      <tr
                        key={todo._id}
                        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
                      >
                        <td className="px-4 py-3 text-sm">{index + 1}</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold">{todo.title}</p>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {moment(todo.createdAt).format("lll")}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => openEditModal(todo)}
                            className="inline-flex items-center focus:outline-none mr-4"
                          >
                            <svg
                              className="w-5 h-5 inline-block mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => deleteOne(todo._id)}
                            className="inline-flex items-center focus:outline-none mr-4"
                          >
                            <svg
                              fill="none"
                              className="w-4 mr-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="relative text-center w-full text max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-gray-50 capitalize">
                No Task
              </h3>
            </div>
          )}
        </div>

        {data.addModal && (
          <div
            className="fixed z-10 inset-0 overflow-none"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center block p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
         shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 p-6 pb-4">
                  <button
                    onClick={closeModal}
                    className="modal-close z-50 float-right"
                  >
                    <svg
                      className="fill-current text-black"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </button>
                  <div className="items-center">
                    <div className="mt-3 text-center">
                      <form onSubmit={addData}>
                        <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-700  items-center">
                          <div className="mx-auto">
                            <div className="w-full flex space-x-5">
                              <div className="border">
                                <input
                                  type="text"
                                  name="title"
                                  value={data.title}
                                  onChange={handleInputChange}
                                  className="w-full border-0 focus:text-gray-600 p-2 focus:outline-none 
                         focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                  placeholder="Enter the tile"
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="text-white text-center mx-auto rounded-md bg-blue-900 py-2 
                  px-4 inline-flex items-center focus:outline-none"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {data.editModal && (
          <div
            className="fixed z-10 inset-0 overflow-none"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center block p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
         shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 p-6 pb-4">
                  <button
                    onClick={closeModal}
                    className="modal-close z-50 float-right"
                  >
                    <svg
                      className="fill-current text-black"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                  </button>
                  <div className="items-center">
                    <div className="mt-3 text-center">
                      <form onSubmit={updateData}>
                        <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-700  items-center">
                          <div className="mx-auto">
                            <div className="w-full flex space-x-5">
                              <div className="border">
                                <input
                                  type="text"
                                  name="title"
                                  value={data.title}
                                  onChange={handleInputChange}
                                  className="w-full border-0 focus:text-gray-600 p-2 focus:outline-none 
                         focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                                  placeholder="Enter the tile"
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                className="text-white text-center mx-auto rounded-md bg-blue-900 py-2 
                  px-4 inline-flex items-center focus:outline-none"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}
