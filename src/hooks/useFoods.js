import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods,setfoods]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>setfoods(data));
    },[]);
    return [foods];
};

export default useFoods;