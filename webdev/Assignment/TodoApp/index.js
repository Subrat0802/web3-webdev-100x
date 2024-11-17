const apiUrl = "http://localhost:3000";

// Function to fetch and display todos
async function fetchTodos() {
    try {
        const response = await fetch(`${apiUrl}/api/v1/getAllTodo`);
        const result = await response.json();
        const todoList = document.getElementById("todoList");
        todoList.innerHTML = ""; // Clear existing list

        result.data.forEach(todo => {
            const li = document.createElement("li");
            li.className = "p-4 border-b flex justify-between items-center";
            li.innerHTML = `
                <div>
                    <h3 class="font-bold">${todo.title}</h3>
                    <p>${todo.description}</p>
                    <small>${todo.doneOrNot ? "Completed" : "Not Completed"}</small>
                </div>
                <div>
                    <button onclick="updateTodo('${todo._id}')" class="bg-yellow-500 text-white p-1 rounded mr-2">Update</button>
                    <button onclick="deleteTodo('${todo._id}')" class="bg-red-500 text-white p-1 rounded">Delete</button>
                </div>
            `;
            todoList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
}

// Function to create a new todo
document.getElementById("todoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const doneOrNot = document.getElementById("doneOrNot").checked;

    try {
        const response = await fetch(`${apiUrl}/api/v1/createTodo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, doneOrNot }),
        });
        const result = await response.json();
        if (result.message === "Todo is created successfully") {
            fetchTodos();
            e.target.reset();
        }
    } catch (error) {
        console.error("Error creating todo:", error);
    }
});
async function deleteTodo(id) {
    console.log("Delete function called with ID:", id); // Debugging line
    try {
        const response = await fetch(`${apiUrl}/api/v1/deleteTodo/${id}`, {
            method: "DELETE",
        });
        const result = await response.json();
        console.log(result); // Log the response for debugging
        if (result.message === "Todo is deleted successfully") {
            fetchTodos();
        }
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
}

async function updateTodo(id) {
    console.log("Update function called with ID:", id); // Debugging line
    const title = prompt("Enter new title");
    const description = prompt("Enter new description");
    const doneOrNot = confirm("Is it done?");

    if (!title || !description) return;

    try {
        const response = await fetch(`${apiUrl}/api/v1/updateTodo/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, doneOrNot }),
        });
        const result = await response.json();
        console.log(result); // Log the response for debugging
        if (result.message === "Todo is Updated successfully") {
            fetchTodos();
        }
    } catch (error) {
        console.error("Error updating todo:", error);
    }
}


// Initial fetch to populate the list
fetchTodos();
