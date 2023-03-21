import { AuthorName } from '~/enums/enums';

type Author = (typeof AuthorName)[keyof typeof AuthorName];

export { Author };
