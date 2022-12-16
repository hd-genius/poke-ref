import { Card, CardContent, Typography, CardMedia, Box, CardActions, IconButton } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { PokemonType } from "../../models";
import { TypeIndicator } from "../common";
import styles from "./pokemon-list-card.module.scss";
import { If } from "react-semantic-components";
import { useState } from "react";

export const PokemonListCard = ({}) => {
    const [activeVariationIndex, setActiveVariationIndex] = useState(0);

    const variations = [
        {
            name: "Charizard",
            types: [PokemonType.FIRE, PokemonType.FLYING],
            image: "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png",
        },
        {
            name: "Mega Charizard X",
            types: [PokemonType.FIRE, PokemonType.DRAGON],
            image: "https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/ca3db4aad5c85a525d9be86852b26db1db7a22c0.png",
        },
        {
            name: "Mega Charizard Y",
            types: [PokemonType.FIRE, PokemonType.FLYING],
            image: "https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png",
        }
    ];

    const {
        name,
        types,
        image
    } = variations[activeVariationIndex];

    const navigatePreviousVariation = () => {
        setActiveVariationIndex(index => {
            if (index === 0) {
                return variations.length - 1;
            } else {
                return index - 1;
            }
        })
    };

    const navigateNextvVariation = () => {
        setActiveVariationIndex(index => (index + 1) % variations.length);
    }

    return <Card>
        <CardContent sx={{ flexDirection: "row", display: "flex" }}>
            <CardMedia component="img"
                sx={{ width: 151 }}
                image={image}
                alt={name} />
            <Box>
                <Typography color="text.secondary">#006</Typography>
                <Typography variant="h6" component="div">{name}</Typography>
                <PokemonTypesBar types={types} />
            </Box>
        </CardContent>
        <If condition={variations.length > 1}>
            <CardActions>
                <IconButton aria-label="previous variation" onClick={navigatePreviousVariation}>
                    <NavigateBefore />
                </IconButton>
                <IconButton aria-label="next variation" onClick={navigateNextvVariation}>
                    <NavigateNext />
                </IconButton>
            </CardActions>
        </If>
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