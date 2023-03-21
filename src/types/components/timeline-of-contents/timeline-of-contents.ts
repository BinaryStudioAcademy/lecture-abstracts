type Timeline = {
  linkTo: string;
  title: string;
  time?: string;
};

type TimelineProps = {
  headerTitle?: string;
  headerClass?: string;
  timeline: Timeline[];
};

export { TimelineProps };
