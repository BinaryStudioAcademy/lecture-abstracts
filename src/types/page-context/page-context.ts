type Meta = {
  author: string;
  orderId: number;
  title: string;
  duration: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

type LecturesContext = {
  frontmatter: Meta;
};

type PageContext = {
  frontmatter?: Meta;
};

export { LecturesContext, PageContext };
