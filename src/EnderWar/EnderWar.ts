import { Router } from "../ui/GameRoot";

const warSize = 10;
const cellSize = 10;

export let enderWar: IEnderWar = { world: [] };

export interface ICell {
  tiles: number[][];
  entities: IEntity[];
}

export interface IEntity {}

export interface IEnderWar {
  world: ICell[][];
}

const generateWorld = (): ICell[][] => {
  const generateCell = (): ICell => ({
    tiles: Array(cellSize)
      .fill(Array(cellSize).fill(0))
      .map((arr) => arr.map(() => Math.floor(Math.random() * 3))),
    entities: [],
  });
  return Array(warSize).fill(Array(warSize).fill(generateCell()));
};

export const startEnderWar = (): void => {
  enderWar = {
    world: generateWorld(),
  };
  console.log(JSON.stringify(enderWar).length);
  Router.toEnderWar();
};
