import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import { ICell } from "@EnderWar/EnderWar";
import { Tooltip } from "@mui/material";

interface IProps {
  cell: ICell;
}
export const Cell = ({ cell }: IProps): React.ReactElement => {
  const [coord, setCoord] = useState([0, 0]);
  return (
    <Tooltip title={"a"}>
      <div>
        {cell.tiles.map((r, i) => (
          <Typography key={i}>
            {r.map((v, j) => (
              <Typography
                key={j}
                component="span"
                sx={{ lineHeight: 0.8, fontSize: "3em" }}
                onMouseEnter={() => setCoord([i, j])}
              >
                {v}
              </Typography>
            ))}
          </Typography>
        ))}
      </div>
    </Tooltip>
  );
};
