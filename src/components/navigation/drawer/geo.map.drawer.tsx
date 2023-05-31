import React from "react"
import {Accordion, AccordionSummary, Card, CardContent, List, ListItem} from "@mui/material";
import expeditionsData from "../../../data/expeditions/expeditions.json"

const GeoMapDrawer = () => {


    return(
        <Card sx={{
            backgroundColor: "smoke",
            position: "absolute",
            height: "99vh",
            width: 400,
            zIndex: 500,
            background: "rgba(35,35,35,.8)"
        }}>
            <CardContent>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        backgroundColor:"rgba(0,0,0,0.7)",
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: '700px',
                    }}
                >
                    {
                        expeditionsData.map((item:any)=>(
                            <ListItem>
                                <Accordion
                                    sx={{
                                        width:"100%"
                                    }}
                                >
                                    <AccordionSummary>
                                        {item.expedition_no}
                                    </AccordionSummary>
                                </Accordion>
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}

export default GeoMapDrawer
