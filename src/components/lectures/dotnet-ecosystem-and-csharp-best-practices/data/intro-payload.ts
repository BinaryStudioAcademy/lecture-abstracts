import { AuthorName } from '~/common/enums/enums';
import { IntroPayload, IntroBlueBubbleProps } from '~/common/types/types';

const introEN: IntroBlueBubbleProps = {
  author: AuthorName.IVAN_HEDZ,
  about:
    'Ivan workes as Full Stack Web Developer in <a href="https://binary-studio.com"><strong>Binary Studio</strong></a>. Tech stack is C# and Typescript. Hobbies – listening to music, arcade games and yoga. Decided to record a lecture for the Academy for the first time so that it would be easier for you to understand the .NET ecosystem.',
  title: 'Hello!',
  subtitle:
    'The lecture about the .NET ecosystem and best practices for writing C# code will start in 5..4..3... But first, 🥁 some disclaimers about the lecture itself.',
  listItems: [
    'You have probably already heard (or not) about much of what will be discussed;',
    'Some topics are talked about superficially, without going into details;',
    'The lecture may seem long, but believe me is faster than diving into the MSDN documentation in search of the necessary information.',
  ],
  footer:
    'You will also need a .NET developer starter pack: <a href="https://dotnet.microsoft.com/download" title=".NET"><strong>.NET</strong></a>, <a href="https://git-scm.com/" title="Git"><strong>Git</strong></a>, <a href="https://visualstudio.microsoft.com/" title="Visual Studio"><strong>Visual Studio</strong></a> or <a href="https://www.jetbrains.com/rider/" title="Rider"><strong>Rider</strong></a>.',
};
const introUA: IntroBlueBubbleProps = {
  author: AuthorName.IVAN_HEDZ,
  about:
    'Іван працює Full Stack веб-розробником у <a href="https://binary-studio.com"><strong>Binary Studio</strong></a>. Пише на C# і TypeScript. З хобі ― слухати музику, грати в аркади, займатися йогою. Вирішив вперше записати лекцію для Академії, щоб тобі було легше розібратися з екосистемою .NET.',
  title: 'Привіт!',
  subtitle:
    'Лекція про екосистему .NET та кращі практики написання C#-коду почнеться за 5..4..3... Але спочатку 🥁 кілька дісклеймерів про саму ж лекцію:',
  listItems: [
    'багато з чого, про що йдеться у лекції, ви вже мабуть чули (або ні);',
    'деякі теми та терміни висвітлюються поверхнево, не вдаючись у деталі;',
    'лекція може здатися затягнутою, але believe me — це швидше, ніж прошуршати документацію MSDN-у в пошуках потрібної інфи 😝.',
  ],
  footer:
    'Вам також знадобиться стартовий пакет розробника .NET: <a href="https://dotnet.microsoft.com/download" title=".NET"><strong>.NET</strong></a>, <a href="https://git-scm.com/" title="Git"><strong>Git</strong></a>, <a href="https://visualstudio.microsoft.com/" title="Visual Studio"><strong>Visual Studio</strong></a> або <a href="https://www.jetbrains.com/rider/" title="Rider"><strong>Rider</strong></a>.',
};

const introPayload: IntroPayload = { ua: introUA, en: introEN };

export { introPayload };
