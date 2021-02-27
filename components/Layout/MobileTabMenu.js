import Link from 'next/link';
//material-ui
import {Button, SvgIcon, useMediaQuery, SwipeableDrawer, Grid, Box, Container} from '@material-ui/core';
import {useTheme} from '@material-ui/styles';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SearchField from "./SearchField";
import CartButton from "./CartButton";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem',
        // paddingBottom:'1rem'
    },
    logoWrap: {
        textAlign: 'center',
        '& img': {
            width: '5rem',
        }
    },
    backdropProps: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    drawer: {
        right: 0,
        top: '4rem',
    },
    link:{
        color:theme.palette.common.black
    }


    // bottomRow:{
    //     marginTop:'1rem'
    // },

    // listItem: {
    //     listStyle: 'none',
    //     padding: '2em',
    //     '& a': {
    //         color: 'inherit',
    //         textDecoration: 'none'
    //     }
    // },
    // searchInput:{
    //     marginRight:'1rem'
    // }
}))


const MobileTabMenu = () => {
    const classes = useStyles();

    //checking if it's iOS
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    //toggle function for drawer
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <Grid container alignItems={"center"} justify={"space-between"} classes={{root: classes.root}}>
                <Grid item classes={{root: classes.logoWrap}}>
                    <Link href="/"><a><img src="/assets/logo.svg"/> </a></Link>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"}>
                        <CartButton/>
                        <Button
                            onClick={toggleDrawer}
                            endIcon={
                                <SvgIcon>
                                    <rect x="0" y="16.79" fill="#ff0c0c" width="24" height="1.95"/>
                                    <rect x="0" y="11.03" fill="#ff0c0c" width="24" height="1.95"/>
                                    <rect x="0" y="5.26" fill="#ff0c0c" width="24" height="1.95"/>
                                </SvgIcon>
                            }
                        />
                    </Grid>
                </Grid>
            </Grid>
            <SwipeableDrawer
                open={openDrawer}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onClose={() => {
                    setOpenDrawer(false)
                }}
                onOpen={() => {
                    setOpenDrawer(true)
                }}
                ModalProps={{
                    BackdropProps: {
                        classes: {
                            root: classes.backdropProps
                        }
                    }
                }}
                PaperProps={{
                    classes: {
                        root: classes.drawer
                    },
                }}

            >
                <Container style={{textAlign:'center'}}>
                    <Box mt={6}><Link href="/departments" ><a><Typography onClick={()=>setOpenDrawer(false)} classes={{root:classes.link}}>Departments</Typography></a></Link></Box>
                    <Box mt={3}><Link href="/#location"><a><Typography onClick={()=>setOpenDrawer(false)} classes={{root:classes.link}}>Location</Typography></a></Link></Box>
                    <Box mt={3}><Link href="/#contact"><a><Typography onClick={()=>setOpenDrawer(false)} classes={{root:classes.link}}>Contact</Typography></a></Link></Box>
                    <SearchField/>
                </Container>
            </SwipeableDrawer>
        </>
    );
};
export default MobileTabMenu;