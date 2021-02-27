import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    address: {
        marginTop: '3rem'
    },
    mapWrap: {
        marginTop: '2rem'
    },
    map: {
        margin: '0 auto'
    }
}))
const Location = () => {
    const classes = useStyles();
    return (
        <secction id={'location'}>
            <Typography component="h2" variant={"h2"} align={"center"}>Location</Typography>
            <Typography align={"center"} classes={{root: classes.address}}>111 Groceries Street, Toronto, Ontario,
                Canada</Typography>
            <div className={classes.mapWrap}>
                <iframe
                    className={classes.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369106.7267949492!2d-79.65824079514913!3d43.71789901030551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1614030460296!5m2!1sen!2sca"
                    width="400" height="300" style={{border: 0}} allowFullScreen=""></iframe>
            </div>
        </secction>
    );
};

export default Location;