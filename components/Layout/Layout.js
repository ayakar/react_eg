import Head from 'next/head';

//mui
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


import FooterContent from "./FooterContent";
import MobileTabMenu from "./MobileTabMenu";
import TabMenu from "./TabMenu";
import {useEffect, useState} from "react";


const Layout = ({children, title}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [headerHeight, setHeaderHeight] = useState(0)
    const [footerHeight, setFooterHeight] = useState(0)
    useEffect(() => {
        const headerHeight = document.getElementById('header').clientHeight;
        const footerHeight = document.getElementById('footer').clientHeight;
        setHeaderHeight(headerHeight);
        setFooterHeight(footerHeight);
    })

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/assets/favicon.png" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            <header id={"header"}>
                {isMobile ? <MobileTabMenu headerHeight={headerHeight}/> : <TabMenu/>}
            </header>
            <div style={{minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px )`,paddingBottom:"3rem"}}>
                {children}
            </div>
            <footer id={"footer"}>
                <FooterContent/>
            </footer>
        </>
    );
};

export default Layout;





