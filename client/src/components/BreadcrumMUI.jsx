import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
    const rutaActual = window.location.pathname.split('/')
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {rutaActual.map((v, i)=>{
            return <><Link underline="hover" color="inherit" 
                    to={v == ''?'/':'/'+v}>
              {v}
            </Link></>
        })}
      </Breadcrumbs>
    </div>
  );
}