import React from "react";
import ComponentDidMount from "../components/ComponentMount";
import UpdatingExample from "../components/ComponentUpdate";
import UnmountingExample from "../components/ComponentUmount";
import FunctionalMount from "../components/FunctionalMount";
import Menu from "../components/Menu";
import Counter from "../components/eventClick";
import Counter1 from "../components/eventClick2";
import CheckLogin from "../components/login";
import ControlledComponent from "../components/ComponenteControl";
import Multiple from "../components/ComponenteForm1";
import Uncontrolled from "../components/ComponenteRef";
import LoginForm from "../components/FormReact";

function Clase_8(props){
  const mensaje = () => {console.log(props);
    alert("Este un popup desde la pagina principal")}
    return <>
        <Menu usuario={props.usuario}/>
        <Counter funcion={mensaje}/>
        <Counter1 />
        <CheckLogin fnUsuario={props.fnUsuario} usuario={props.usuario}/>
        <ControlledComponent />
        <Multiple />
        <Uncontrolled />
        <LoginForm />
        <br/>
        <br/>
        <br/>
        <br/>
    </>
}

export default Clase_8;