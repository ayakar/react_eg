import Layout from "components/Layout/Layout";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Location from "../components/Location";
import Contact from "../components/Contact";
import ProductCarousel from "../components/ProductCarousel";


const Index = () => {
    return (
        <Layout title="Easy Groceries">
            <ProductCarousel/>
            <Box py={{xs: 0, sm: 8}}>
                <Container>
                    <Grid container>

                        <Grid item xs={12} sm={6}>
                            <Box mt={{xs: 4, sm: 0}}>
                                <Location/>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <Box mt={{xs: 4, sm: 0}}>
                                <Contact/>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Layout>

    );

}


export default Index;


