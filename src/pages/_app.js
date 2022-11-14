import { MainMenu, MainLayout } from "components";
import "styles/globals.css";
import "styles/vars.colors.css";
import "styles/vars.globals.css";
import "styles/utils.margins.css";
import "styles/variables.css";

function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <MainMenu />

            <div style={{ width: "100%" }}>
                <Component {...pageProps} />
            </div>
        </MainLayout>
    );
}

export default MyApp;
