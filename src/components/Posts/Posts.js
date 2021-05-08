import { Typography, Button, Paper, TextField, Grid } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'

import Post from './Post/Post'


const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts);

    return (
        <Grid container>
            <Grid item>
                Posts
                <Post />
            </Grid>
        </Grid>
    );
}

export default Posts;