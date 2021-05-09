import { Typography, Button, Paper, TextField } from '@material-ui/core'
import { useState } from 'react';
import useStyles from './styles'


const Form = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
    }

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return (
        <Paper className={classes.paper} variant="outlined">
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.heading} variant="h3">Form</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Reset</Button>
            </form>
        </Paper>
    );
}

export default Form;