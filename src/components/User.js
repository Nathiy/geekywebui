import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function User() {
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const [name,setName]=useState('')
    const [userName,setUserName]=useState('')
    const [address,setAddress]=useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        const user={name,userName,address}
        console.log(user)
        fetch('http://localhost:8080/user/add/',{
            method:'POST',
            headers:{'Content-Type':'application/jason;charset=UTF-8'},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log('New user added!')
        })
    }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:'blue'}}><u>Add User</u></h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: '20px auto', width: 600 },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <TextField id="outlined-basic" label="UserName" variant="outlined" fullWidth
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                />
            </Box>
            <Button variant="contained" color='secondary' onClick={handleClick}>
                Submit
            </Button>
        </Paper>
    </Container>
  );
}
