import * as React from 'react';
import ButtonUsage from '../components/BotonMUI';
import Menu from '../components/Menu';
import BasicTextFields from '../components/FormMUI';
import { MenuItem, Select } from '@mui/material';
import RecipeReviewCard from '../components/TarjetaMUI';
import FormDialog from '../components/LoginComponent';

function Clase_9(props){
    const [login, setLogin] = React.useState({})
    return <>
        <Menu />
        <div>
            <ButtonUsage valor={login.email != null? 'Hola ' + login.email: 'Hola'} variante='text'/>
            <ButtonUsage valor='Como' variante='outlined'/>
            <ButtonUsage valor='Estas' variante='contained'/>
            <BasicTextFields/>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={()=>{}} >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
                    </div>
                    <RecipeReviewCard/>
                    <FormDialog funcion={setLogin}/>
    </>
}

export default Clase_9