import { SeoProps } from '../seo/seo-props';

type LecturesContext = {
  frontmatter: SeoProps;
};

type PageContext = {
  frontmatter?: SeoProps;
};

export { LecturesContext, PageContext };
