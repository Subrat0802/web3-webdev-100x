import { useEffect, useRef, useState } from 'react';
import './App.css';
import { toast } from 'sonner';

function App() {
  const [todos, setTodos] = useState(null);
  const titleRef = useRef();
  const descRef = useRef();

  async function getTodos() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/gettodos", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const data = await response.json();
      setTodos(data.data);
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  const submitTodo = async () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;

    if (!title || !description) {
      alert("Please fill all the inputs");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/createtodo", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      })

      const data = await response.json();
      if (data.success) {
        getTodos();
        toast.success("New Todo Created");
      } else {
        alert('Error creating todo');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  };

  const deleteTodo = async (id) => {
    try {
      // Send DELETE request to delete the todo
      const response = await fetch(`http://localhost:3000/api/v1/deleteTodo/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await response.json();
      if (data.success) {
        // If deletion is successful, filter out the deleted todo from the state
        setTodos(todos.filter(todo => todo._id !== id));
        toast.success("Todo Deleted")
      } else {
        alert('Error deleting todo');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while deleting the todo');
    }
  };

  return (
    <div className='flex justify-center items-center bg-[#121212] w-full min-h-screen'>
      <div className='sm:w-[50%] w-[90%] max-w-[900px] min-h-[60vh] bg-[#2f2f2f] rounded-lg p-8 shadow-lg'>
        <h1 className='text-3xl font-semibold text-center text-white mb-6'>Todo App</h1>
        <div className='w-full flex flex-col items-center gap-4 mb-8'>
          <input
            ref={titleRef}
            placeholder='Enter Todo Title'
            className='w-[80%] py-3 px-4 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]'
          />
          <input
            ref={descRef}
            placeholder='Enter Todo Description'
            className='w-[80%] py-3 px-4 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]'
          />
          <button
            onClick={submitTodo}
            className='w-[80%] py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-[#388E3C] transition duration-200'
          >
            Submit Todo
          </button>
        </div>

        <div className='todo-list'>
          {
            todos === null ? <p className='text-white text-center'>Loading...</p> : (
              todos.length > 0 ? (
                <div className='space-y-4'>
                  {todos.map((el, i) => (
                    <div key={i} className='flex justify-between items-center bg-[#444] p-4 rounded-lg shadow-md'>
                      <div className='flex flex-col'>
                        <p className='text-xl font-medium text-white'>{el.title}</p>
                        <p className='text-sm text-gray-300'>{el.description}</p>
                      </div>
                      <div className='flex justify-center items-center gap-x-3'>
                        <p className={`text-sm ${el.status ? 'text-green-500' : 'text-red-500'}`}>
                          {el.status ? 'Completed' : 'Pending'}
                        </p>
                        <button
                          onClick={() => deleteTodo(el._id)}
                          className="text-red-500 hover:text-red-700 transition duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-white text-center'>No todos available</p>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
