type Panel = {
  head: string;
  body: string;
};
type PanelsLocalizationKey = {
  panels: Panel[];
  columns?: number;
  bodySize?: 'small' | 'regular';
};

export { PanelsLocalizationKey };
