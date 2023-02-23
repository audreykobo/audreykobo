import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
    const THEME = useTheme();

    return (
        <Box sx={{ width: '100%', backgroundColor: THEME.color.secondary, position: 'fixed', bottom: 0, justifyContent: 'center' }}>
            <Typography>Hello</Typography>
        </Box>
    )
}

export default Footer;