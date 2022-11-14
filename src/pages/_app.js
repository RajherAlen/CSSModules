import { MainMenu, MainLayout, MainContent } from "components";
import "styles/globals.css";
import "styles/vars.colors.css";
import "styles/vars.globals.css";
import "styles/utils.margins.css";
import "styles/variables.css";

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <MainMenu />
            <MainContent>
                <Component {...pageProps} />
            </MainContent>
        </MainLayout>
    );
}

export default MyApp;
