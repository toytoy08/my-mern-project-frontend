import { Typography, Button, Paper, TextField } from '@material-ui/core'
import useStyles from './styles'


const Form = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.paper} variant="outlined">
            <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
                <Typography className={classes.heading} variant="h3">Form</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth />
                <TextField name="title" variant="outlined" label="Title" fullWidth />
                <TextField name="message" variant="outlined" label="Message" fullWidth />
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth>Reset</Button>
            </form>
        </Paper>

    );
}

export default Form;