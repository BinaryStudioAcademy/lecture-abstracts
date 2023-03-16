import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';

import '~/assets/stylesheets/styles.scss';

const wrapPageElement = ({
  element,
}: WrapPageElementBrowserArgs): React.ReactNode => <>{element}</>;

export { wrapPageElement };
