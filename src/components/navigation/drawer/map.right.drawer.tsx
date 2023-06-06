import React, {useEffect} from "react"
import {Avatar, Box, Card, CardContent, Container, Divider, Drawer, Grid, Stack, SwipeableDrawer, Typography} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BallotIcon from '@mui/icons-material/Ballot';
import BadgeIcon from '@mui/icons-material/Badge';
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

    // @ts-ignore
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
                <Grid container md={12}>
                    <Grid md={10}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <Box>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    marginLeft:2,
                                    fontWeight:"bold",
                                }}>
                                    Lorem Ipsum
                                </Typography>
                                <Typography sx={{
                                    marginLeft:2,

                                }}>
                                    Lorem Ipsum
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid md={12} sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        height:80
                    }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{bgcolor:"#3EB03C"}}>
                                < StarIcon/>
                            </Avatar>
                            <Avatar sx={{ bgcolor:"#F25749" }}>
                                <ChatBubbleOutlineIcon/>
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#5B14FF",marginLeft:50 }}>
                                <AssignmentIcon/>
                            </Avatar>
                        </Stack>
                    </Grid>
                    <Grid container md={12}>
                        <Grid md={12}>
                            <Divider sx={{
                                backgroundColor:"grey",
                                fontWeight:"200",
                                marginTop:2
                            }}/>
                        </Grid>
                        <Grid md={5}>

                            <Typography sx={{
                                fontWeight:"bold",
                                marginTop:2,


                            }}>
                                Lorem Ipsum
                            </Typography>
                        </Grid>
                        <Grid md={7}>
                            <Typography sx={{
                                fontWeight:"bold",
                                marginTop:6,
                                fontSize:12,
                                color:"#9747FF",

                            }}>
                                Lorem Ipsum
                            </Typography>
                        </Grid>

                        <Grid md={12}>
                            <Box sx={{
                                display:"flex",
                                flexDirection:"row"
                            }}>
                                <Box sx={{
                                    marginRight:8
                                }}>
                                    <Typography sx={{
                                        color:"#6D6D6D",
                                        marginTop:1,
                                    }}>
                                        Başlangıç Tarihi
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight:"bold",
                                    }}>
                                        12 Mayıs 2023
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        color:"#6D6D6D",
                                        marginTop:1,
                                    }}>
                                        Bitiş Tarihi
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight:"bold",
                                    }}>
                                        17 Mayıs 2023
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid md={12}>
                            <Box sx={{
                                display:"flex",
                                flexDirection:"row"
                            }}>
                                <Box sx={{
                                    marginRight:5
                                }}>
                                    <Typography sx={{
                                        color:"#6D6D6D",
                                        marginTop:2,
                                    }}>
                                        Operasyon Yetkilisi
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight:"bold",
                                    }}>
                                        12 Mayıs 2023
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        color:"#6D6D6D",
                                        marginTop:2,
                                    }}>
                                        Satış Temsilcisi
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight:"bold",
                                    }}>
                                        17 Mayıs 2023
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color:"#6D6D6D",
                                    marginTop:2,
                                }}>
                                    Yükleme Tipi
                                </Typography>
                                <Typography sx={{
                                    fontWeight:"bold",
                                }}>
                                    Komple
                                </Typography>
                            </Box>
                            <Grid>
                                <Divider sx={{
                                    backgroundColor:"grey",
                                    fontWeight:200,
                                    marginTop:2
                                }}>

                                </Divider>
                            </Grid>
                            <Grid container md={12} sx={{
                                marginTop:2
                            }}>
                                <Grid md={4}>
                                    <Box
                                        sx={{

                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            backgroundColor:" #FFFF",
                                            boxShadow:"4",
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent:"flex-start",
                                            alignItems:"center"
                                        }}
                                    >
                                        <LocalShippingIcon/>
                                        <Box sx={{

                                        }}>
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:13
                                            }}>
                                                Çekici
                                            </Typography>
                                        </Box>
                                        <Box sx={{

                                        }}>
                                            <Typography sx={{
                                                fontSize:14,
                                                marginTop:1
                                            }}>
                                                Lorem Ipsum
                                            </Typography>
                                        </Box>

                                    </Box>

                                </Grid>
                                <Grid md={4}>
                                    <Box
                                        sx={{
                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            boxShadow:"4",
                                            backgroundColor:"#FFFF",
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display:"flex",
                                            flexDirection:"column",
                                            alignItems:"center",
                                            justifyContent:"flex-start",
                                        }}
                                    >
                                        <MonitorWeightIcon/>
                                        <Box >
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:13
                                            }}>
                                                Toplam Ağırlık
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:14,
                                                marginTop:1,
                                            }}>
                                                Lorem Ipsum
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid md={4}>
                                    <Box
                                        sx={{
                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            boxShadow:"4",
                                            backgroundColor:"#FFFF",
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display:"flex",
                                            justifyContent:"flex-start",
                                            alignItems:"center",
                                            flexDirection:"column",

                                        }}
                                    >
                                        <CalendarViewWeekIcon/>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:13,
                                            }}>
                                                Kap Adedi
                                            </Typography>
                                            <Typography sx={{
                                                display:"flex",
                                                justifyContent:"center",
                                                alignItems:"center",
                                                fontSize:14,
                                                marginTop:1
                                            }}>
                                                176
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container md={12} sx={{marginTop:2}}>
                                <Grid md={4}>
                                    <Box
                                        sx={{
                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            boxShadow:"4",
                                            backgroundColor: '#FFFF',
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display:"flex",
                                            justifyContent:"flex-start",
                                            alignItems:"center",
                                            flexDirection:"column"

                                        }}
                                    >
                                        <BadgeIcon/>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:13,
                                                display:"flex",
                                                justifyContent:"center",
                                                alignItems:"center",

                                            }}>
                                                Şoför Adı
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:14,
                                                marginTop:1
                                            }}>
                                                Lorem Ipsum
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid md={4}>
                                    <Box
                                        sx={{
                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            boxShadow:4,
                                            backgroundColor: '#FFFF',
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display:"flex",
                                            justifyContent:"flex-start",
                                            flexDirection:"column",
                                            alignItems:"center"

                                        }}
                                    >
                                        <CalendarViewMonthIcon/>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:13,
                                            }}>
                                                KAP Cinsi
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:14,
                                                marginTop:1,
                                                display:"flex",
                                                justifyContent:"center",
                                                alignItems:"center",
                                            }}>
                                                KAP
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid md={4}>
                                    <Box
                                        sx={{
                                            width:100,
                                            height:100,
                                            borderRadius:"10px",
                                            boxShadow:4,
                                            backgroundColor: '#FFFF',
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            display:"flex",
                                            justifyContent:"flex-start",
                                            flexDirection:"column",
                                            alignItems:"center"
                                        }}
                                    >
                                        <BallotIcon/>
                                        <Box>
                                            <Typography sx={{
                                                fontWeight:"bold",
                                                fontSize:14,
                                                display:"flex",
                                                justifyContent:"center",
                                                alignItems:"center",

                                            }}>
                                                Malın Adı
                                            </Typography>
                                            <Typography sx={{
                                                fontSize:13,
                                                marginTop:1,
                                                display:"flex",
                                                justifyContent:"center",
                                                alignItems:"center",
                                            }}>
                                                Masa,sandalye...
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </SwipeableDrawer>
    )
}

export default MapRightDrawer
