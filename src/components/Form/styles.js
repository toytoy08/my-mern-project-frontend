import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));