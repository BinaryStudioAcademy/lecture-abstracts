declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export = classes;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.inline.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
