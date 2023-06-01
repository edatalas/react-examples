import React, {useEffect} from "react"
import {Box, Card, CardContent, Container, Drawer, SwipeableDrawer} from "@mui/material";

const container = window !== undefined ? () => window.document.body : undefined;
interface IMapRightDrawer {
    drawerOpen: boolean
    drawerClose: (status: boolean) => void
}

const MapRightDrawer = ({drawerOpen, drawerClose}:IMapRightDrawer) => {

    const [getDrawerOpen, setDrawerOpen] = React.useState(false);

    useEffect(()=>{
        setDrawerOpen(drawerOpen)
    }, [drawerOpen])
    const toggleDrawer = (newOpen: boolean) => () => {
        drawerClose(newOpen)
        setDrawerOpen(newOpen);
    };

    return(
        <SwipeableDrawer
            container={container}
            anchor="right"
            open={getDrawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={0}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true
            }}
        >
            <Container sx={{
                marginTop:"5rem"
            }}>
                <Box sx={{
                    width:"400px"
                }}>
                </Box>
            </Container>
        </SwipeableDrawer>
    )
}

export default MapRightDrawer
