import React from "react"
import {Card, CardContent, List} from "@mui/material";


const GeoMapDrawer = () => {
    return(
        <Card sx={{
            backgroundColor: "smoke",
            position: "absolute",
            height: "100vh",
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
                        maxHeight: '800px',
                    }}
                >

                </List>
            </CardContent>
        </Card>
    )
}

export default GeoMapDrawer
