import React, { useState } from 'react';
import {
    Form,
    //Row, 
    //Col 
} from 'react-bootstrap'
import clsx from 'clsx'
import {
    Container,
    Paper,
    FormControl,
    //TextField,
    InputLabel,
    //Input,
    FormHelperText,
    OutlinedInput,
    //CssBaseline,
    InputAdornment,
    IconButton,
    //Icon,
    Button,
    makeStyles
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import * as authRemote from '../../remote/auth'
import { useHistory } from 'react-router'


const useStyles = makeStyles((theme) => ({
    root: {
        //    '& > *': {
        //        margin: theme.spacing(2),
        //        width: '60ch'
        //    },
    },
    form: {
        marginTop: 20,
        //width: '50ch',
        paddingTop: 20,
        paddingBottom: 10,
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        //marginTop: theme.spacing(3),
    },
    textField: {
        width: '40ch',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export const SignUpComponent: React.FC = () => {

    const classes = useStyles();
    const history = useHistory();


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [samePassword, setSamePassword] = useState('');
    const [showSamePassword, setShowSamePassword] = useState(false);
    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');


    const signup = async () => {
        if (password !== samePassword) {
            return
        }
        //const payload = { username, email, password, firstName, lastName }
        const payload = { username, email, password }
        await authRemote.signupRequest(payload).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })


        // Need to handle response
    }

    return (
        <React.Fragment>
            <section id="registration">
                <header className="registration-header">
                    <h5>Registered users can leave comments and submit content.</h5>

                </header>
                <Container id="user-registration-container" className={classes.root} >

                    {/*<CssBaseline />*/}
                    <Form>
                        <Paper className={classes.form} elevation={3}>
                            <header>
                                <h5>Create a new account.</h5>
                            </header>

                            <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <OutlinedInput
                                    id="username"
                                    value={username}
                                    labelWidth={85}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </FormControl>
                            <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <OutlinedInput
                                    id="email"
                                    value={email}
                                    aria-describedby="email-txt"
                                    labelWidth={50}
                                    onChange={(e) => setEmail(e.target.value)}
                                    inputProps={{
                                        'aria-label': '',
                                    }}
                                />
                                <FormHelperText id="email-txt"></FormHelperText>
                            </FormControl>
                            <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                onMouseDown={(e) => e.preventDefault()}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={80}
                                />
                            </FormControl>
                            <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="passwordVal">Verify password</InputLabel>
                                <OutlinedInput
                                    id="passwordVal"
                                    type={showSamePassword ? 'text' : 'password'}
                                    value={samePassword}
                                    onChange={(e) => setSamePassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowSamePassword(!showSamePassword)}
                                                onMouseDown={(e) => e.preventDefault()}
                                                edge="end"
                                            >
                                                {showSamePassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={135}
                                />
                            </FormControl>
                            {/*<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <OutlinedInput
                            id="firstName"
                            value={values.firstName}
                            labelWidth={80}
                            onChange={handleChange('firstName')}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <OutlinedInput
                            id="lastName"
                            value={values.lastName}
                            labelWidth={80}
                            onChange={handleChange('lastName')}
                        />
                    </FormControl>*/}
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => signup()}
                            >SIGN UP</Button>

                        </Paper>
                    </Form>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default SignUpComponent
