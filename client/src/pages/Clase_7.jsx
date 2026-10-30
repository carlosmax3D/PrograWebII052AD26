import React from "react";
import ComponentDidMount from "../components/ComponentMount";
import UpdatingExample from "../components/ComponentUpdate";
import UnmountingExample from "../components/ComponentUmount";
import FunctionalMount from "../components/FunctionalMount";
import Menu from "../components/Menu";

function Clase_7(props){
    return <>
        <Menu/>
        <ComponentDidMount/>
        <br/>
        <UpdatingExample/>
        <br/>
        <UnmountingExample/>
        <br/>
        <FunctionalMount>
            <Menu></Menu>
        </FunctionalMount>
        <br/>
        <br/>
        <br/>
        <br/>
    </>
}

export default Clase_7;