import { ArrowRightAltRounded } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Paper, Typography, useTheme } from "@mui/material"
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const THEME = useTheme();

    return (
        <Grid container justifyContent="center" alignContent="center">

            {/* <Grid item xs={12} container justifyContent="center" textAlign="center" >
                <Typography variant="h3" sx={{ color: THEME.color.primary }}>Hello, I'm</Typography>
            </Grid> */}
            <Grid item xs={12} container justifyContent="center" textAlign="center" sx={{ paddingTop: '2vh' }} >
                <Typography variant="h2" sx={{ color: THEME.color.primary }}><b>AUDREY KOBAYASHI</b></Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center" textAlign="center" >
                <Typography variant="h5" sx={{ color: THEME.color.primary }}>DEVELOPER & ARTIST</Typography>
            </Grid>

        </Grid >
    )
}

export default HomePage