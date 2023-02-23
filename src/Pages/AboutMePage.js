import { ArrowRightAltRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Paper, Tooltip, Typography, useTheme } from "@mui/material"
import { useHistory } from "react-router-dom";
const AboutMePage = () => {
    const THEME = useTheme();
    const history = useHistory();

    const handleNavigateToArtPage = () => {
        history.push('/art')
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} container justifyContent={"center"}>
                <Typography variant="h3" sx={{ color: THEME.color.primary }}><b>ABOUT ME</b></Typography>
            </Grid>
            <Grid container direction="row" spacing={{ sm: 1, md: 2, lg: 5 }} alignItems="center">
                <Grid item xs={12} sm={4} md={4}>
                    <Card elevation={0} sx={{ backgroundColor: THEME.color.secondary, color: THEME.color.quaternary }}>
                        <Grid item xs>
                            <CardContent>
                                <Paper elevation={0} sx={{ backgroundColor: THEME.color.quaternary, color: THEME.color.primary, p: 1 }}>
                                    <Grid container direction="column">
                                        <Grid item xs={12}>
                                            <Typography >
                                                My name is Audrey Kobayashi. I graduated from Cal State, Long Beach in December 2019 with a B.S. in Computer Science.
                                                Currently, I work at The Aerospace Corporation as a Web Developer,
                                                but in my free time I enjoy drawing, playing games, and spending time with friends and family.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} container justifyContent="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                            <Box
                                                component="img"
                                                sx={{ width: '45%' }}
                                                src={'../Images/csulb.png'}
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </CardContent>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Card elevation={0} sx={{ backgroundColor: THEME.color.tertiary }}>
                        <CardHeader
                            sx={{ backgroundColor: THEME.color.primary, color: THEME.color.quaternary }}
                            title="Welcome to my Website"
                            subheader="I'm just messing around with React and Material-UI"
                            subheaderTypographyProps={{ color: THEME.color.quaternary }}
                        />
                        <CardContent>
                            <Grid container direction="row">
                                <Grid item xs={3}>
                                    <Box
                                        component="img"
                                        sx={{ width: '100%' }}
                                        src={'../Images/bowtie_me.png'}
                                    />
                                </Grid>
                                <Grid item xs={9} container alignItems="center" justifyContent="flex-start">
                                    <Grid item xs={12} container spacing={1}>
                                        <Box sx={{ backgroundColor: THEME.color.quaternary, borderRadius: 2 }} >
                                            <Typography variant="body1" sx={{ color: THEME.color.primary, p: 2 }}>
                                                Hello!
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} container spacing={1}>
                                        <Box
                                            sx={{ backgroundColor: THEME.color.quaternary, borderRadius: 2 }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{ color: THEME.color.primary, p: 2 }}
                                            >
                                                I guess since you're here, you might as well take a look around.
                                            </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card elevation={0} sx={{ backgroundColor: THEME.color.tertiary, marginBottom: 2 }}>
                        <CardContent>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={10} container alignItems="center">
                                    <Box
                                        sx={{ backgroundColor: THEME.color.primary, borderRadius: 2, p: 1 }}
                                    >
                                        <Grid container justifyContent="space-between" alignContent="center">
                                            <Tooltip title="Valorant">
                                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../Images/valorant.png" />
                                            </Tooltip>
                                            <Tooltip title="Genshin Impact">
                                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../Images/genshin.jpg" />
                                            </Tooltip>
                                            <Tooltip title="Persona 5">
                                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../Images/p5.jpeg" />
                                            </Tooltip>
                                            <Tooltip title="Epic Seven">
                                                <Box sx={{ width: '20%', borderRadius: 50, m: 1 }} component="img" src="../Images/e7.png" />
                                            </Tooltip>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} container alignItems="center" justifyContent="center">
                                    <Box
                                        sx={{ backgroundColor: THEME.color.quaternary, borderRadius: 2 }}
                                    >
                                        <Typography variant="body1" sx={{ color: THEME.color.primary, p: 2 }}>Here are some games I like.</Typography>
                                    </Box>
                                    <Box
                                        component="img"
                                        sx={{ width: '80%' }}
                                        src={'../Images/me.png'}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* <CardActionArea
                            sx={{
                                backgroundColor: THEME.color.secondary,
                                color: THEME.color.quaternary,
                                p: 1,
                                flexGrow: 1,
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                            }}
                            onClick={handleNavigateToArtPage}
                        >
                            {`Want to see some more chibi art? ➜`}
                        </CardActionArea> */}
                    </Card>
                </Grid >
            </Grid >
        </Grid >
    )
}

export default AboutMePage