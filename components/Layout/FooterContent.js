import PropTypes from 'prop-types';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles=makeStyles(theme=>({
    root:{
        backgroundColor:theme.palette.common.darkgray,
        color:theme.palette.common.white,
        paddingTop:'2rem',
        paddingBottom:'2rem'
    }
}))

const FooterContent = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Container>
            &copy; {new Date().getFullYear()} Easy Groceries
            </Container>
        </div>
    );
};

export default FooterContent;
