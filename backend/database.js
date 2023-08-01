import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE

})
.promise();



export async function getTodo(id){
    const [row] = await pool.query(
       `SELECT * FROM todos WHERE id =?`,
       [id]
    );
    return row[0];
   //console.log(row[0]);
    
}
export async function getUsers(){
    const [row] = await pool.query(
       `SELECT * FROM users`,
       
    );
    return row;
}


export async function getTodosByID(id){
    const [row] = await pool.query(
       `SELECT todos.*, shared_todos.share_whith_id
       FROM todos
       LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
       WHERE todos.user_id = ? OR shared_todos.share_whith_id = ?;`,
       [id, id]
    );
    return row
}

export async function getSharedTodoById(id){
    const [row] = await pool.query(
       `SELECT todos.*, shared_todos WHERE todo_id = ?`,
       [id]
    );
    return row[0]
}

export async function getUserbyId(id){
    const [row] = await pool.query(
       `SELECT * FROM users WHERE id = ?`,
       [id]
    );
    return row[0]
}

export async function getUserByEmail(email){
    const [row] = await pool.query(
       `SELECT * FROM users WHERE email = ?`,
       [email]
    );
    return row[0]
}


export async function CreateTodo(user_id, title){
    const [result] = await pool.query(
       `INSERT INTO todos (user_id, title)
        VALUES(?,?)
       `,
       [user_id, title]
    );
    const todoID = result.insertId;
    return getTodo(todoID); 
}

/*    ---- create users----- */
export async function CreateUsers( name, email, password){
    const [result] = await pool.query(
       `INSERT INTO users (name, email, password)
        VALUES(?,?,?)
       `,
       [name, email, password]
    );
    const todoID = result.insertId;
    return getUsers(todoID); 
}





export async function DeleteTodo(id){
    const [result] = await pool.query(
       `DELETE FROM todos WHERE id = ?`,
       [id]
    );
    return result; 
}

export async function toggleCompleted(id, value){
    const newValue = value === true ? "TRUE" : "FALSE";
    const [result] = await pool.query(
       `
       UPDATE todos
       SET completed = ${newValue}
       WHERE id = ?;
       `,
       [id]
    );
    return result; 
}

export async function shareTodo(todo_id, user_id, shared_whith_id){
    const [result] = await pool.query(
       `
       INSERT INTO shared_todos (todo_id, user_id, shared_whit_id)
        VALUES(?, ?, ?);
       `,
       [todo_id, user_id, shared_whith_id]
    );
    return result.insertId;
}






