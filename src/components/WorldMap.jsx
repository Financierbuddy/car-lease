import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { fraudData } from "@/constant/fraudData";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = React.useState("");

  const handleMouseEnter = (geo) => {
    const country = fraudData.find((c) => c.code === geo.ISO_A3);
    if (country) {
      setTooltipContent(`${country.name}: ${country.value}`);
    }
  };

  return (
    <div>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = fraudData.some(
                (c) => c.code === geo.properties.ISO_A3
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo.properties)}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{
                    default: {
                      fill: isHighlighted ? "#E42" : "#DDD",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
