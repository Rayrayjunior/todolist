import { useState } from 'react'


const takeTask = ( { addTask } ) => {

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [completed, setCompleted] = useState(false);
}