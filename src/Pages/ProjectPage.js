import { Grid, Typography, useTheme } from "@mui/material";

const ProjectPage = () => {
    const THEME = useTheme();
    return (
        <Grid container justifyContent={"center"}>
            <Typography variant="h3" sx={{ color: THEME.color.primary }}><b>PROJECTS</b></Typography>
        </Grid>
    )
}

export default ProjectPage