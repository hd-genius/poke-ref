import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { PokemonType } from "../../models";
import { TypeIndicator } from "../type-indicator";
import styles from "./pokemon-list-card.module.scss";

export const PokemonListCard = ({}) => {
    return <Card>
        <CardContent sx={{ flexDirection: "row", display: "flex" }}>
            <CardMedia component="img"
                sx={{ width: 151 }}
                image="https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png"
                alt="Live from space album cover" />
            <Box>
                <Typography color="text.secondary">#006</Typography>
                <Typography variant="h6" component="div">Charizard</Typography>
                <PokemonTypesBar types={[PokemonType.FIRE, PokemonType.FLYING]} />
            </Box>
        </CardContent>
    </Card>
}

interface PokemonTypesBarProps {
    types: PokemonType[],
}

const PokemonTypesBar = ({ types }: PokemonTypesBarProps) => {
    return <div className={styles.typeBar}>
        {types.map(type => <TypeIndicator className={styles.typeBarType} type={type} key={type} />)}
    </div>
}