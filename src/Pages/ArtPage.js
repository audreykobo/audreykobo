import { Grid, Typography, useTheme } from "@mui/material";
const ArtPage = () => {
    const THEME = useTheme();
    return (
        <Grid container justifyContent={"center"}>
            <Typography variant="h3" sx={{ color: THEME.color.primary }}><b>ART</b></Typography>
        </Grid>
    )
}

export default ArtPage