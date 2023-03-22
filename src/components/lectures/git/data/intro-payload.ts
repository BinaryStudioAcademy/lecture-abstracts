import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName } from '~/enums/enums';
import { IntroPayload } from '~/types/types';

const introEN: IntroBlueBubbleProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_EN,
  about:
    'Viktoriia works at Binary Studio as a Full stack developer after finishing Binary Studio Academy in 2020.',
  title: 'Hi, student!',
  subtitle:
    "Here you'll find a detailed instruction to your Git homework - so you just need to follow the steps and it's done ✅. But firstly, pay attention to that:",
  listItems: [
    "this is <strong>not</strong> a lecture script - some explanations may be omitted <em>(because you've just seen the lecture, right?)</em>;",
    'I highly recommend you to look throught all the tasks before you start your homework. Pay attention, that <strong>you have only 3 attempt</strong> to run the automated test.',
    'links to the documentations and guidelines are optional <em>(you may ignore them if you feel strong enough)</em>;',
    "please <strong>don't skip</strong> any steps and don't rename anything - we'll run automated test after you submit the homework and namings may be important!",
    'and if you have any questions - feel free to ask them in a chat',
  ],
  footer:
    'By the way, it\'s dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>. Now let\'s go!',
};
const introUA: IntroBlueBubbleProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_UA,
  about:
    'Вікторія працює в Binary Studio як Full stack developer після закінчення Binary Studio Academy в 2020.',
  title: 'Привіт!',
  subtitle:
    'Тут ти знайдеш детальну інструкцію до домашки по Git - тож тобі потрібно лиш виконувати інструкції і готово ✅. Але спочатку, зверни увагу, що:',
  listItems: [
    'це <strong>не</strong> є конспект до лекції - деякі пояснення можуть бути упущені <em> (ви ж щойно переглянути лекцію, правда?)</em>;',
    'я дійсно рекомендую вам ознайомитися з усіма завданнями, перш ніж почати виконувати домашнє завдання. Зверніть увагу, що <strong>у вас є лише 3 спроби </strong> для запуску автоматизованого тесту.',
    "посилання на документацію та інструкції необов'язкові <em>(ви можете ігнорувати їх, якщо відчуваєте себе достатньо просунутими)</em>",
    'будь ласка, <strong>не пропускайте</strong> жодних кроків і нічого не перейменовуйте - ми запустимо автоматичні тести після того, як ви заллєте домашнє завдання на перевірку і назви репозиторію, гілок, та завдань можуть бути важливі!',
    'і якщо виникатимуть питання - не соромтеся писати у чат!',
  ],
  footer:
    'До речі, не забудьте взяти з собою: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>. Тепер поїхали!',
};

const introPayload: IntroPayload = { ua: introUA, en: introEN };

export { introPayload };
