import axios from "axios"


export default async function BlogPage({ params }: any) {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.blogId}`);
    const response = await data.data
    return <div>
        Blog BlogPage
        <br></br>
        {response.title}
        <br></br>
        <p>{response.completed ? "completed" : "not complete"}</p>
    </div>
}