import React, {useEffect} from "react"
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardContent,
    Container,
    List,
    ListItem,
    SwipeableDrawer
} from "@mui/material";
import expeditionsData from "../../../data/expeditions/expeditions.json"

const container = window !== undefined ? () => window.document.body : undefined;

interface IMapLeftDrawer {
    drawerOpen: boolean
    drawerClose: (status: boolean) => void
    rightDrawerOpen: (status: boolean) => void
}

const MapLeftDrawer = ({drawerOpen, drawerClose, rightDrawerOpen}: IMapLeftDrawer) => {
    const [getDrawerOpen, setDrawerOpen] = React.useState(false);


    useEffect(() => {
        console.log(drawerOpen, "dsfds")
        setDrawerOpen(drawerOpen)
    }, [drawerOpen])
    const toggleDrawer = (newOpen: boolean) => () => {
        drawerClose(newOpen)
        setDrawerOpen(newOpen);
    };
    return (
        <Card sx={{
            backgroundColor: "background.default",
            position: "absolute",
            height: "91vh",
            width: 400,
            zIndex: 500,
            background: "palette.background.default",
            opacity: 0.8
        }}>
            <CardContent sx={{
                marginTop: "5rem"
            }}>
                <Box sx={{
                    width: "400px"
                }}>
                    <List
                        sx={{
                            width: '100%',
                            //backgroundColor: "rgba(0,0,0,0.7)",
                            position: 'relative',
                            overflow: 'auto'
                        }}
                    >
                        {
                            expeditionsData.map((item: any) => (
                                <ListItem>
                                    <Accordion
                                        sx={{
                                            width: "100%"
                                        }}
                                    >
                                        <AccordionSummary>
                                            {item.expedition_no}
                                        </AccordionSummary>
                                        <AccordionDetails onClick={() => rightDrawerOpen(true)}>
                                            {
                                                item.loads.length > 0 ?
                                                    <>
                                                        {
                                                            item.loads.map((load: any) => {
                                                                return load.load_no
                                                            })
                                                        }
                                                    </> :
                                                    <>
                                                        No Load Information Found
                                                    </>
                                            }
                                        </AccordionDetails>
                                    </Accordion>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}

export default MapLeftDrawer
