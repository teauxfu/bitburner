import React from "react";
import { enderWar } from "@EnderWar/EnderWar";
import { Cell } from "./Cell";

export const EnderWarRoot = (): React.ReactElement => {
  return (
    <>
      <Cell cell={enderWar.world[0][0]} />
    </>
  );
};
