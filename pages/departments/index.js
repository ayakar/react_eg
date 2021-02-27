import PropTypes from 'prop-types';
import Link from 'next/link';
import {config} from '../../constants';
//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout/Layout"
import React from "react";

const useStyles = makeStyles(theme => ({
    container:{
      paddingTop:'1rem',
    },
    wrap: {
        maxWidth: '900px',
        margin:'0 auto',
        border:`1px solid ${theme.palette.common.red}`,
        padding:'2rem'
    },
    list: {
        position: 'relative',
        paddingLeft: '1em',
        marginTop:'1em',

        '&:after': {
            content: "''",
            background: theme.palette.common.red,
            width: '.3em',
            height: '.3em',
            display: 'block',
            borderRadius: '50%',
            position: 'absolute',
            top: 'calc(50% - .15em)',
            left: 0
        },
        '& a': {
            color: theme.palette.common.black,
            '&:hover': {
                color: theme.palette.common.red
            },
        }
    }
}))

const Index = props => {
    const classes = useStyles();

    return (
        <Layout title="Easy Groceries">
            <Container classes={{root:classes.container}}>
                <Grid container classes={{root: classes.wrap}}>
                    {props.data.departments.map((el) =>
                        <Grid item xs={12} sm={6} md={4}><Typography key={el.id} classes={{root: classes.list}}><Link
                            href={`/departments/products?department_id=${el.id}`}><a>{el.name}</a></Link></Typography></Grid>
                    )}
                </Grid>
            </Container>
        </Layout>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(config.url.GET_DEPARTMENTS)
    const data = await res.json()
    // Pass data to the page via props
    return {props: {data}}
}

Index.propTypes = {};

export default Index;