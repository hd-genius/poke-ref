import { useState } from "react";
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import { PokemonListCard } from "./pokemon-list-card";
import { LoadingIndicator } from "../common";

export const PokemonList = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const closeSearch = () => setIsSearchOpen(false);

    return <>
        <PokemonListCard />
        <LoadingIndicator />
        <Dialog
            open={isSearchOpen} 
            onClose={closeSearch}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Search for Pokemon
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Select the criteria to filter Pokemon by
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="warning" onClick={closeSearch}>
                    Cancel
                </Button>
                <Button onClick={closeSearch}>
                    Search
                </Button>
            </DialogActions>
        </Dialog>
        <Fab onClick={() => setIsSearchOpen(true)} color="primary" aria-label="add" sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}>
            <Search />
        </Fab>
    </>;
}