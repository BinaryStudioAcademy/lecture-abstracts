import { PanelsPayload, PanelsProps } from '~/common/types/types';

const ua: PanelsProps = {
  panels: [
    {
      head: ' <a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/overview"><strong>ASP.NET Core MVC</strong></a>  ',
      body: 'Веб-програми, які реалізують патерн Model-View-Controller і використовують Razor для розмітки HTML із фрагментами C#',
    },
    {
      head: '<a href="https://docs.microsoft.com/en-us/aspnet/core/web-api/"><strong>ASP.NET Core Web API</strong></a>',
      body: 'Backend-програма, яка реалізує бізнес-логіку та може використовуватися будь-яким клієнтом <em>(чи це Angular-, React-, або інший frontend фреймворк, mobile apps, тощо.)</em>',
    },
  ],
};

const en: PanelsProps = {
  panels: [
    {
      head: '<a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/overview"><strong>ASP.NET Core MVC</strong></a>',
      body: 'Web apps which implement Model-View-Controller pattern and use Razor for HTML markdown with C# snippets',
    },
    {
      head: '<a href="https://docs.microsoft.com/en-us/aspnet/core/web-api/"><strong>ASP.NET Core Web API</strong></a>',
      body: 'Backend app which implements business logic and can be used by any client <em>(whether it’s Angular-, React-, or WhateverFramework-based frontend, mobile apps, etc.)</em>',
    },
  ],
};

const panelsPayload: PanelsPayload = { ua, en };

export { panelsPayload };
