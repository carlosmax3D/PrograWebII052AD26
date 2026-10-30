import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Carga(props){
    const [data, setData] = useState(null);
    useEffect(()=>{
        setInterval(()=>{
            setData(data ? data+"." : ".")
        },1000)
        return ()=>{
            console.log("No me quiero ir señor Stark!");
        }
    },[data])
    return <>
        {data ? "Loading" + data : "Loading"}
    </>
}

function FunctionalMount(props){
    const [data, setData] = useState(null);
    console.dir(props)
    useEffect(()=>{
        setInterval(()=>{
            setData("Datos obtenidos!");
        },5000);
        return ()=>{
            console.log("No me quiero ir señor Stark 2!");
        }
    },[data])
    return <>
        {data ? props.children : <Carga/>}
    </>
}
export default FunctionalMount;