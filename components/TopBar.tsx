import {ReactNode} from "react";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

interface TopBarProps {
    showBackButton: boolean
    onBackPressed: () => void
    children: ReactNode
}

function TopBar({children, onBackPressed, showBackButton}: TopBarProps) {
    return (
        <Toolbar>
            {showBackButton &&
            <IconButton edge="start" color="inherit" aria-label="back" onClick={() => onBackPressed()}>
                <ArrowBackIcon/>
            </IconButton>}
            <Typography variant="h6" component="h1">
                Insulter
            </Typography>
            <section className="top-bar-left">
                {children}
            </section>
        </Toolbar>
    )
}

TopBar.defaultProps = {
    showBackButton: true,
    onBackPressed: () => {},
    children: <></>
}

export default TopBar
