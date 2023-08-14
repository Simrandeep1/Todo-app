import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();



export const TaskProvider = ({ children }) => {
    const { setMessage, user } = useContext(AuthContext);

    const [latestTask, setLatestTask] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [taskList, setTaskList] = useState(null);
    const[profile, setProfileList]=useState(null);



    const createTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }


        const response = await fetch('http://localhost:5000/tasks', config);
        console.log(response);
        if (response.ok) {
            setMessage("Task Created Successfully");
            getAllTasks();
            setTimeout(() => {
                setMessage("")

            }, 2000);
        } else {
            setMessage("Something went wrong! Try again");
        }
    }

    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }


        const response = await fetch(`http://localhost:5000/tasks/$(formData.id}`, config);
        console.log(response);
        if (response.ok) {
            setMessage("Task Created Successfully");
            getAllTasks();
            setTimeout(() => {
                setMessage("")

            }, 2000);
        } else {
            setMessage("Something went wrong! Try again");
        }
    }






    //get tasks
    const getAllTasks = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, { method: "Get" });
            if (response.ok) {
                const tasks = await response.json();
                setTaskList(tasks);
                const latest = tasks[tasks.length - 1];
                setLatestTask(latest);

                const recentTasks = tasks.slice(-3);
                setRecentTasks(recentTasks);
                recentTasks.reverse();

            } else {
                alert("something went wrong");
            }


        } catch (err) {
            console.log(err);
        }
    }

    const deleteTask=async(id)=>{
        try{
            const response =await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"});
            if(response.ok){
                setMessage("Task Deleted Successfully");
                
                getAllTasks();
                setTimeout(()=>{
                    setMessage("");
                }, 3000)
            }else{
                setProfileList("something went wrong");
            }

        }catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        if (user !== null) {
            getAllTasks();
        }
    }, [user])

    


     return (
        <TaskContext.Provider value={{
            createTask,
            latestTask,
            recentTasks,
            taskList,
            updateTask,
            deleteTask


        }}>
            {children}
        </TaskContext.Provider>
    )

}




export default TaskContext;