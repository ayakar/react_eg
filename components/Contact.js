import PropTypes from 'prop-types';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    table:{
        maxWidth:'400px',
        margin:'3rem auto 0',
        overflow:'visible'
    },

    tableCell:{
        borderBottom:'none',
        paddingBottom:'0rem',

    },
    socialIconsWrap:{
        marginTop:'5rem',
        '& > *':{
            padding:'1rem',
            '& img':{
                width:'4rem'
            }
        }
    }
}))

const Contact = props => {
    const classes = useStyles();
    return (
        <secction id={'contact'}>
            <Typography component ="h2" variant={"h2"} align={"center"}>Contact</Typography>

            <TableContainer  classes={{root: classes.table}}>
                <Table aria-label="contact table">
                    <TableBody>
                        <TableRow classes={{root:classes.tableRow}}>
                            <TableCell classes={{root: classes.tableCell}}>Phone:</TableCell>
                            <TableCell classes={{root: classes.tableCell}}>(xxx) xxx-xxxx</TableCell>
                        </TableRow>
                        <TableRow classes={{root:classes.tableRow}}>
                            <TableCell classes={{root: classes.tableCell}}>Email:</TableCell>
                            <TableCell classes={{root: classes.tableCell}}>easy_groceries@demo.com</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justify={"center"} classes={{root:classes.socialIconsWrap}}>
               <Grid item>
                   <a href={"#"}><img src={"/assets/facebook.svg"} alt={"facebook"}/></a>
               </Grid>
                <Grid item>
                   <a href={"#"}><img src={"/assets/twitter.svg"} alt={"twitter"}/></a>
               </Grid>
                <Grid item>
                   <a href={"#"}><img src={"/assets/instagram.svg"} alt={"instagram"}/></a>
               </Grid>
            </Grid>
        </secction>
    );
};

Contact.propTypes = {

};

export default Contact;