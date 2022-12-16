import { render, screen } from "@testing-library/react";
import { TypeIndicator } from "./type-indicator";
import { PokemonType } from "../../../models";


describe("TypeIndicator", () => {
    it("should show the type name when it is not abbreviated", () => {
        render(<TypeIndicator type={PokemonType.GRASS} />);
        expect(screen.getByText("grass")).toBeVisible();
    });

    it("should show the abbreviated name when it is abbreviated", () => {
        render(<TypeIndicator type={PokemonType.GRASS} isAbbreviated />);
        expect(screen.getByText("gra")).toBeVisible();
    });

    it.todo("should pass through the className");

    it.todo("should show the correct styles for the type");
});