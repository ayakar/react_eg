import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        common: {
            red: '#f21c1c',
            black: '#0a0a0a',
            darkgray: '#383838',
            white: '#fff',
        },
        primary: {
            main: '#f21c1c',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        h1: {},
        h2: {
            fontSize: '3.2rem',
           fontFamily: 'Open Sans',
            position:'relative',
            paddingBottom:'.5em',
            '&:before': {
                content: "''",
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: '38px',
                height: '1px',
                marginLeft: '-18px',
                backgroundColor: '#F21C1C',
            },
            [breakpoints.down("sm")]: {
                fontSize: "2rem"
            }
        },
        h5: {
            fontSize: '2rem'
        },
        subtitle2: {
            fontSize: '1.2rem'
        },
        body1: {
            fontSize: '1.6rem'
        },
        button: {
            fontSize: '1.6rem'
        },
        fontFamily: 'News Cycle'
    },
    shadows: [
        'none',
        '0px 0px 4px #dcdcdc'
    ],
    overrides: {
        MuiButton: {
            outlinedPrimary: {
                borderRadius: '2px',
                width: '100%',
                padding: '0.1em 1em',
                '&:hover': {
                    color: '#fff',
                    backgroundColor: '#f21c1c',
                },
                '&:disabled': {
                    color: '#f21c1c',
                    borderColor: '#f21c1c',
                    opacity: 0.3
                }
            },
            containedPrimary: {
                borderRadius: '2px',
                width: '100%',
                padding: '0.1em',
                '&:hover': {
                    color: '#f21c1c',
                    backgroundColor: '#fff',
                },
                '&:disabled': {
                    color: '#fff',
                    backgroundColor: '#f21c1c',
                    opacity: 0.3
                }
            }
        },
        MuiTableCell: {
            root: {fontSize: '1.6rem'}
        },
        MuiTextField:{
            root: {
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius:'2px',
                        borderColor: '#0a0a0a',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#000',
                        borderWidth:'1px'
                    },
                },
                '& .MuiOutlinedInput-input': {
                    fontSize:'1.6rem',
                    padding:'0.5em',

                },
            },
        },

    },

});

export default theme;