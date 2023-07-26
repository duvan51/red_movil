import express from "express";

import {
    getTodo,
    shareTodo,
    DeleteTodo,
    getTodosByID,
    CreateTodo,
    toggleCompleted,
    getUserByEmail,
    getUserbyId,
    getSharedTodoById
} from "./database.js";

import cors from "cors";
const corsOptions = {
    origin: "http://192.168.0.7.19000/", // especificar el origen unico al cual se va dejar conectar
    methods : ["POST", "GET"],   // metodos que queremos que se manejen
    Credentials: true   // credenciales cookies, authentications
};


const app = express();
app.use(express.json());
app.use(cors(corsOptions));

//------------//get users-------
app.get("/users/:id", async (req, res)=>{
    const user = await  getUserbyId(req.params.id);
    res.status(200).send(user);
    
})
app.get("/todos/:id", async (req, res)=>{
    const todos = await  getTodosByID(req.params.id);
    res.status(200).send(todos);
})
app.get("/todos/shared_todos/:id", async (req, res)=>{
    const todo = await getSharedTodoById(req.params.id);
    const author = await getUserbyId(todo.user_id);
    const shared_whith = await getUserbyId(todo.shared_whith_id);
    res.status(200).send({ author, shared_whith });    
})


//  --- user api de put ----- // 
app.put("/todos/:id", async (req, res)=>{

    const { value } = req.body;
    const todo = await toggleCompleted(req.params.id, value);
    res.status(200).send(todo);    
})

// --- user api de delete ---- //

app.delete("/todos/:id", async (req, res)=>{
    await DeleteTodo(req.params.id);
    res.status.send({ message: "borrado exitoso" });    
})


app.post("/todos/:id", async (req, res)=>{
    const {todo_id, user_id, email} = req.body;
    const userToshare = await getUserByEmail(email);
    const shared_todo = await shareTodo(todo_id, user_id, userToshare.id);
    res.status(201).send(shared_todo);   
})

app.post("/todos", async (req, res)=>{
    const {user_id, title} = req.body;
    const todo = await CreateTodo(user_id, title);
    res.status(201).send(todo);   
})













app.listen(8080, ()=>{
    console.log("server runing on port 8080")
});