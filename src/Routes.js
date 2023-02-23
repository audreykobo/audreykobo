import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArtPage from "./Pages/ArtPage";
import AboutMePage from "./Pages/AboutMePage";
import Navbar from "./UI/Navbar";
import { Container, Grid } from "@mui/material";
import ProjectPage from "./Pages/ProjectPage";
import Footer from "./UI/Footer";

const Routes = () => {
    const routes = (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/art" component={ArtPage} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/about" component={AboutMePage} />
        </Switch>
    )

    return (
        <Grid container>
            <Navbar />
            <Container maxWidth="xxl">
                {routes}
            </Container>
            {/* <Footer /> */}
        </Grid>
    )
}
export default Routes