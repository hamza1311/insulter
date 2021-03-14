import {Card as MaterialCard, CardContent} from "@material-ui/core";
import styles from "../styles/Card.module.scss";
import {ReactNode} from "react";
import TopBar from "./TopBar";

interface CardProps {
    children: ReactNode
    showBackButton: boolean
    onBackPressed: () => void
}

function Card({children, showBackButton, onBackPressed}: CardProps) {
    return (
        <MaterialCard raised={true} id={styles.card}>
            <CardContent>
                <TopBar showBackButton={showBackButton} onBackPressed={onBackPressed} />
                <div id={styles.content}>
                    {children}
                </div>
            </CardContent>
        </MaterialCard>
    )
}

Card.defaultProps = {
    showBackButton: false,
    onBackPressed: () => {},
}

export default Card
