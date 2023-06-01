import React, { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L, { LeafletMouseEvent, Map } from "leaflet";
import {Button} from "@mui/material";
import ReactDOM from "react-dom";

interface IMapDrawerButton {
    drawer: (status: boolean) => void;
}
export const MapDrawerButton: React.FC<IMapDrawerButton> = ({ drawer }) => {
    const helpDivRef = useRef<HTMLDivElement>(null);
    const map = useMap();

    useEffect(() => {
        const createButtonControl = () => {
            const MapHelp = L.Control.extend({
                onAdd: (map: Map) => {
                    const helpDiv = L.DomUtil.create("div", "");
                    helpDiv.className = "leaflet-control-custom";

                    const button = document.createElement("div");
                    button.className = "custom-button";

                    const handleButtonClick = () => {
                        drawer(true); // Notify the parent component that the drawer should be opened
                    };

                    const reactButton = (
                        <Button variant="contained" onClick={handleButtonClick}>
                            Expeditions
                        </Button>

                    );

                    ReactDOM.render(reactButton, button);
                    helpDiv.appendChild(button);

                    return helpDiv;
                },
            });

            return new MapHelp({ position: "topleft" });
        };

        const control = createButtonControl();
        control.addTo(map);

        return () => {
            control.remove();
        };
    }, [drawer, map]);

    return null;
};


export function withMap<T>(Component: React.ComponentType<T>) {
    return function WrappedComponent(props: T) {
        const map = useMap();
        return <Component {...props} map={map} />;
    };
}
