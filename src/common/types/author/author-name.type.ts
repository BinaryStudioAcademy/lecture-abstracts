import { AuthorName } from '~/common/enums/enums';

type Author = (typeof AuthorName)[keyof typeof AuthorName];

export { Author };
