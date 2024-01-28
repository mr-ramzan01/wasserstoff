import * as d3 from "d3";
import { hexbin } from "d3-hexbin";
import { useState } from "react";
import Tooltip from "./Tooltip";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

// This is size of my shape
const BIN_SIZE = 7;

export const Map = ({ width, height, data, countriesData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    value: "",
    population: null,
  });

  // Setting the tooltip position and showing
  const handleMouseOver = (event, value, population) => {
    setIsHovered(true);
    const { clientX, clientY } = event;
    const offset = 30;
    setTooltipPosition({ x: clientX, y: clientY - offset, value, population });
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  // The bounds (=area inside the axis) is calculated by substracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Scales using d3
  const yScale = d3.scaleLinear().domain([25, 65]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([-20, 60]).range([0, boundsWidth]);

  // It will generate the hexbin data
  const hexbinGenerator = hexbin()
    .radius(BIN_SIZE)
    .extent([
      [0, 0],
      [boundsWidth, boundsHeight],
    ]);

  const hexbinData = hexbinGenerator(
    data.map((item) => [xScale(item.lon), yScale(item.lat), item.properties])
  );

  // Build the hexagonal shapes
  const allShapes = hexbinData.map((d, i) => {
    // Getting the data of particlar country
    const country = countriesData.find(
      (c) => c.name.common === d[0][2].country
    );

    // Setting and changing the hexagon color according to the country's population
    let color = "#fff";
    if (country?.population > 1400000000) color = "#ff2d2e";
    else if (country?.population > 1000000000) color = "#ffa63f";
    else if (country?.population > 50000000) color = "#8676ff";
    else if (country?.population > 20000000) color = "#c0b9f1";

    return (
      <>
        <defs>
          {/* Shadow for the svg path */}
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur
              in="offseted-shadow"
              stdDeviation="5"
              result="blurred-shadow"
            />
            <feBlend in="SourceGraphic" in2="floodFill" mode="normal" />
          </filter>
        </defs>

        {/* Creating the hexagon using path */}
        <path
          key={i}
          onMouseOver={(e) =>
            handleMouseOver(e, d[0][2].country, country?.population)
          }
          onMouseOut={handleMouseOut}
          d={hexbinGenerator.hexagon()}
          transform={"translate(" + d.x + "," + d.y + ")"}
          stroke="#d8d5ec"
          strokeWidth={1.5}
          fill={color}
          className="shadow-md"
        />
      </>
    );
  });

  return (
    <div className="border-2 border-blue-800">
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {allShapes}
        </g>
      </svg>
      {isHovered && (
        <Tooltip
          x={tooltipPosition.x}
          y={tooltipPosition.y}
          content={`${tooltipPosition.value} (${tooltipPosition.population})`}
        >
          {/* You can customize the tooltip content as needed */}
        </Tooltip>
      )}
    </div>
  );
};
