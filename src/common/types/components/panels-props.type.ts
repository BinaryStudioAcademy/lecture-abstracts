type Panel = {
  head: string;
  body: string;
};
type PanelsProps = {
  panels: Panel[];
  columns?: number;
  bodySize?: 'small' | 'regular';
};

export { PanelsProps };
