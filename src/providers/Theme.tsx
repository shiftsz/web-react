import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const Theme: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme