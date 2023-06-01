import React from "react"
import {Box, Card, CardContent, Container, Drawer, SwipeableDrawer} from "@mui/material";

const container = window !== undefined ? () => window.document.body : undefined;

const MapRightDrawer = () => {

    const [getDrawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
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
