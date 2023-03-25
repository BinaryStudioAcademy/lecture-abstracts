import { AuthorName, IconName } from '~/common/enums/enums';
import { IntroPayload, IntroLocalizationKey } from '~/common/types/types';

const introEN: IntroLocalizationKey = {
  author: AuthorName.ULIANA_LOBANOVA,
  about:
    'Full-Stack JavaScript Developer at <a href="https://binary-studio.com"><strong>Binary Studio</strong></a>, movie junkie and cat lover. Enjoys appealing UIs, watching the sea, crime comedies and Le Big Mac 🔫💼',
  contacts: [
    {
      ref: 'https://www.linkedin.com/in/uliana-l-b34129105/',
      title: 'uliana-l',
      iconName: IconName.LINKEDIN,
      iconColor: 'blue',
    },
  ],
  title: 'Hello, world!',
  subtitle:
    "Remembering the days when I was a student, I tried not to overload the lecture with unnecessary and complicated information that will not be useful to you in the next couple of months. On the other hand, it is encouraged to understand the details, therefore, I will attach links to additional materials and articles. The lecture is divided into blocks that are as independent of each other as possible, so if, after reading a title, you understand you're already familiar with the content, feel free to move on to the next block.",
  footer: 'Good luck!',
};
const introUA: IntroLocalizationKey = {
  author: AuthorName.ALEXANDR_TOVMACH_UA,
  about:
    'Full-stack розробник ― Олександр. На <a href="https://dou.ua/users/aleksandr-tovmach/articles/"><strong>DOU</strong></a> і <a href="https://habr.com/ru/users/alexandrtovmach/posts"><strong>Habr</strong></a> пише статті, на <a href="https://reactjs.org/"><strong>React</strong></a> и <a href="https://angular.io/"><strong>Angular</strong></a> пише код, на <a href="https://thumbs.dreamstime.com/b/computer-code-graffiti-abstract-white-brick-wall-52481211.jpg"><strong>стінах</strong></a> і <a href="https://translate.google.com.ua/?hl=ru#view=home&op=translate&sl=hi&tl=en&text=%E0%A4%85%E0%A4%97%E0%A4%B0%20(%E0%A4%B8%E0%A4%9A)%20%7B%0A%20%20%2F%2F%20%E0%A4%87%E0%A4%B8%20%E0%A4%95%E0%A5%8B%E0%A4%A1%20%E0%A4%95%E0%A5%8B%20%E0%A4%B9%E0%A4%B0%20%E0%A4%B8%E0%A4%AE%E0%A4%AF%20%E0%A4%9A%E0%A4%B2%E0%A4%BE%E0%A4%8F%E0%A4%82%0A%7D%20%E0%A4%B5%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%7B%0A%20%20%2F%2F%20%E0%A4%87%E0%A4%B8%20%E0%A4%95%E0%A5%8B%E0%A4%A1%20%E0%A4%95%E0%A5%8B%20%E0%A4%95%E0%A4%AD%E0%A5%80%20%E0%A4%A8%20%E0%A4%9A%E0%A4%B2%E0%A4%BE%E0%A4%8F%E0%A4%82%0A%7D"><strong>хінді</strong></a> не пише нічого. Хоче змінити цей світ, але руки не доходять.',
  contacts: [
    {
      ref: 'https://ru.stackoverflow.com/users/312473/alexandr-tovmach?tab=profile',
      title: 'alexandr-tovmach',
      iconName: IconName.STACK_OVERFLOW,
    },
    {
      ref: 'https://github.com/alexandrtovmach',
      title: 'alexandrtovmach',
      iconName: IconName.GITHUB,
    },
    {
      ref: 'https://alexandrtovmach.com/',
      title: 'https://alexandrtovmach.com',
      iconName: IconName.GLOBE,
    },
  ],
  title: 'Вітаю!',
  subtitle:
    'Згадуючи себе на місці студента, я намагався не навантажувати лекцію зайвою та <span class="tooltip" data-tooltip="теж запнувся коли читав це слово?"><u>важкозасвоюваною</u></span> інформацією, яка не знадобиться тобі у найближчі пару місяців. З іншого боку, розбиратися у деталях - це похвально. Тому для допитливих, я прикріпляю посилання на матеріали та статті. Лекція поділена на блоки, які максимально незалежні один від одного, тому якщо, прочитавши заголовок, ти розумієш що до чого, сміливо переходь до наступного блоку.<br />',
  footer: 'Хай щастить!',
};

const introPayload: IntroPayload = { ua: introUA, en: introEN };

export { introPayload };
