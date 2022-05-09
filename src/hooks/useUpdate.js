import { useEffect, useState } from "react";

const useUpdate = (id) => {
     const [update,setUpdate]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/foods/${id}`)
        .then(res=>res.json())
        .then(data=>setUpdate(data));
    },[]);
    return [update,setUpdate];
};

export default useUpdate;