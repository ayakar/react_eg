//mui
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {useRouter} from "next/router";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({}))


const SearchField = props => {
    const classes = useStyles();
    const [searchVal, setSearchVal] = useState();
    const router = useRouter();

    const submitSearchHandler = (e) => {
        props.submitSearchValue(searchVal);
        if (window.location.pathname !== '/search') {
            router.push(`/search`);
        }
    }
    return (
        <>
            <Box mx={2} my={{xs:2, sm:2}}>
                <TextField variant="outlined" onChange={(e) => setSearchVal(e.target.value)} value={searchVal}/>
            </Box>
            <Box>
                <Button style={{width: 'initial'}} onClick={submitSearchHandler} color={"primary"}
                        variant={"outlined"}>Search</Button>
            </Box>
        </>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        getNumOfItem: () => dispatch(actions.getNumOfItem()),
        submitSearchValue: (searchVal) => dispatch(actions.submitSearchValue(searchVal)),
    }
}
// export default TabMenu;
export default connect(null, mapDispatchToProps)(SearchField);

// export default SearchField;