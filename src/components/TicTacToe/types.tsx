export type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

export type BoardProps = {
  xNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquare:Array<string>) => void;
};
