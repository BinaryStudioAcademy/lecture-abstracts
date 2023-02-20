import { AuthorName } from '~/enums';

type Author = (typeof AuthorName)[keyof typeof AuthorName];

export { Author };
