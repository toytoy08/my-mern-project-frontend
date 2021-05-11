import { Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core'
import useStyles from './styles'

const Post = ({ post }) => {

    const classes = useStyles();

    console.log(post);

    return (
        <Card className={classes.card}>
            <Typography variant="h5" gutterBottom>{post.title}</Typography>
            <div className={classes.overlay}>
                <Typography variant="body1">By {post.creator}</Typography>
            </div>
            <div className={classes.content}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
            </div>
            <CardActions>
                <Button variant="outlined" color="primary">Like</Button>
                <Button variant="outlined" color="primary">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Post;