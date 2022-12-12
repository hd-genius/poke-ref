import { useEffect, useState } from "react";
import { TypeChartTable } from "./type-chart-table"
import { PokemonType, TypeChart } from "../../models";

import generation6 from "../../data/type-charts/gen6.json";

export const TypeChartPage = () => {
    const typeRevision = "gen6";
    const [types, setTypes] = useState([] as PokemonType[]);
    const [relationships, setRelationships] = useState({});

    const loadFromData = (data: TypeChart) => {
        setTypes(data.types);
        setRelationships(data.attackRelationships);
    }

    useEffect(() => {
        switch (typeRevision) {
            case "gen6":
                loadFromData(generation6 as TypeChart);
                break;
            default:
                setTypes([]);
                setRelationships({});
        }
    }, [typeRevision])

    return <TypeChartTable types={types} relationships={relationships} />;
};