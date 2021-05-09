import { Typography, Button, Paper, TextField, Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'

import Post from './Post/Post'


const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} alignItems="stretch" spacing={3} container>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;