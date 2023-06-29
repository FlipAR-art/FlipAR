import React, { useState, useEffect, useContext,useCallback } from 'react';

import {
  Input,
  Button,
  Sheet,
  Typography} from '@mui/joy';
import {Divider, ButtonGroup,} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {useNavigate} from 'react-router-dom';
import { useReactive} from '../reactive';
import clsx from 'clsx';
import Auth from './Auth';
import UserContext from './userContext';
import FormControl from '@mui/material/FormControl';

const apiURL = import.meta.env.VITE_APP_API;
console.log('apiURL', apiURL);

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '93vh',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    maxHeight: 'auto',
    minHeight: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    boxShadow: theme.shadows[1],
    padding: 40,
    borderRadius: 15,
    overflow: 'hidden',
    background: theme.palette.primary.mainGradient
  },
  paperMedium:{
    width: '90vw',
    maxHeight: '95vh',
    padding: 40,
    minHeight: 400,
  },
  paperSmall:{
    width: '90vw',
    maxHeight: '95vh',
    padding: 40,
    minHeight: 400,
  },
  input: {
    margin: 20,
    color: 'white !important',
    minWidth: '300px'
  },
  password: {
    margin: 20,
    minWidth: '300px'
  },
  buttonGroup:{
    padding: "30px 0 0"
  }
}));

const Conexión = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {isMedium , isSmall} = useReactive();
  const paper = (isMedium) ? "paperMedium"  : (isSmall) ? "paperSmall" : null ;
  const navigate = useNavigate();
  const handleChange = (e,o) => {
    if(e) {
      (e.target.name === "email") ? setEmail(e.target.value) : void(0);
      (e.target.name === "password") ? setPassword(e.target.value) : void(0);
    }
  }
  const isLogged = useContext(UserContext);
  const login = useCallback(async () => {
    try {
      const fetchURL = apiURL + '/api/auth/local';
      let form= { identifier: email, password: password };
      await fetch(fetchURL, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type":"application/json",
        },
        body: JSON.stringify(form)
      })
      .then(response => {
        if (response && !response.ok) { throw new Error(response.statusText);}
        return response.json();
      })
      .then(data => {
          if(data) {
            Auth.authenticateUser(data);
            console.log('isLogged', isLogged);
            window.location.assign('/MiCuenta');
          } else {
            console.log('No Data received from the server');
          }
      })
      .catch((error) => {
        // Your error is here!
        if(error) console.log(JSON.stringify(error));
      });
    } catch(e) {
      console.log(e.message);
    }
  },[email, isLogged, password]);

  useEffect(() => {
    if (isLogged) navigate("/MiCuenta");
  }, [isLogged, navigate]);

  useEffect(() => {
    const keyDownHandler = event => {
      //console.log('User pressed: ', event.key);
      if (event.key === 'Enter') {
        event.preventDefault();
        // 👇️ your logic here
        login();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [login]);

  return (
    <Sheet className={classes.body}>
         <Sheet className={clsx (classes.paper, classes[paper])}>
           <Typography color="textSecondary" variant="h6" component="h2">Connexion</Typography>
           <FormControl color="neutral">
             <Input
               variant="soft"
               onChange={(e) => handleChange(e)}
               type="text"
               name="email"
               error={false}
               defaultValue={email}
               placeholder={"Email"}
               autoFocus={true}
               className={classes.input} />

           </FormControl>
           <Divider />

           <FormControl color="neutral">
             <Input
               variant="soft"
               error={false}
               defaultValue={password}
               placeholder={"Password"}
               type="password"
               name="password"
               onChange={(e) => handleChange(e)}
               className={classes.password} />

           </FormControl>
           <ButtonGroup className={classes.buttonGroup}>
             <Button 
              type="submit"
              color="success"
              size="sm"
              variant="soft" onClick={login}>{"Connexion"}</Button>
           </ButtonGroup>
         </Sheet>
      </Sheet>
  );
}
export default Conexión;
