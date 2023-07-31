import React, { useCallback, useState } from 'react';
import useStyles from './styles';
import Logo from 'assets/images/logo.jpeg';
import { Box, Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { setUserInfo } from 'utils/storage';

export function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [formModel, setFormModel] = useState({
    username: '',
    password: '',
  });
  const [errorControl, setErrorControl] = useState(false);

  const handleInputChange = useCallback(
    event => {
      const { name, value } = event.target;
      setFormModel({
        ...formModel,
        [name]: value,
      });
    },
    [formModel, setFormModel],
  );

  const submitForm = useCallback(async () => {
    setErrorControl(true);
    const { username, password } = formModel;
    if (!username.trim() || !password.trim()) {
      return;
    }

    try {
      setUserInfo({ username });
      history.replace('/top-page');
    } catch (error) {}
  }, [formModel]);

  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <img width="100%" src={Logo} />
      </div>

      <Box className={classes.formContainer}>
        <TextField
          id="username"
          name="username"
          required={true}
          fullWidth
          margin="normal"
          label="Username"
          variant="outlined"
          value={formModel.username}
          onChange={handleInputChange}
          error={errorControl && !formModel.username}
          helperText={
            errorControl && !formModel.username && 'Username is required'
          }
        />
        <TextField
          id="password"
          name="password"
          required={true}
          fullWidth
          margin="normal"
          label="Password"
          variant="outlined"
          type="password"
          value={formModel.password}
          onChange={handleInputChange}
          error={errorControl && !formModel.password}
          helperText={
            errorControl && !formModel.password && 'Password is required'
          }
        />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          onClick={submitForm}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
