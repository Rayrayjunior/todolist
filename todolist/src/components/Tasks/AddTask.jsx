import { useState } from 'react'


const takeTask = ( { addTask } ) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [completed, setCompleted] = useState(false);

    const addtoTask = () => {

        if(name.trim() === "") return;

        const foodinfo = {
            name: name,
            description: description,
            priority: priority,
            completed: completed
        };

        addTask(foodinfo);
        setDescription("");
        setPriority("");
        setCompleted("");
    }
}