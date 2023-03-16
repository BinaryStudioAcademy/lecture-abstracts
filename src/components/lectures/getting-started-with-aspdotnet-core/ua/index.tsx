import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layouts';
import { SEO } from '~/partials';
import {
  IntroBlueBubble,
  Language,
  Level,
  TimelineOfContents,
  VideoWrapper,
  Bubble,
  Code,
  DetailsCard,
  Panels,
  ThatsAllFolks,
} from '~/components/common';
import {
  introPayload,
  panelsPayload,
  seoPayload,
  slugPayload,
} from '../data/data';

import { CodeLanguage } from '~/enums/code-language/code-language';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Getting started with ASP.NET Core</h1>
      <Language currentLanguage="ua" languages={slugPayload} />

      <VideoWrapper duration="26 min 36 sec">
        <iframe
          src="https://www.youtube.com/embed/PZO2bBM_MVw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <IntroBlueBubble {...introPayload.ua} />

      <TimelineOfContents
        timeline={[
          {
            linkTo: '#intro-to-dotnet',
            title: 'Знайомство з .NET',
          },
          {
            linkTo: '#creating-an-app',
            title: 'Створення програми',
          },
          {
            linkTo: '#controllers-and-services',
            title: 'Контролери та сервіси',
          },
          {
            linkTo: '#additional-features',
            title: 'Додаткові функції',
          },
        ]}
      />

      <Level
        id="intro-to-dotnet"
        number="1"
        name={
          <span>
            Знайомство з{' '}
            <a href="https://dotnet.microsoft.com/download">.NET</a>
          </span>
        }
        difficulty="Не хвилюйся."
        objectives="Ознайомтеся з основами .NET, тому що ви станете друзями."
      />

      <h5>Як Microsoft придумала те, що ми зараз називаємо .NET</h5>
      <p>
        Були часи, коли термін «.NET» означав лише платформу Windows. Ця
        платформа називається .NET Framework. Це наклало деякі обмеження на
        розгортання, оскільки більшість машин має Linux як операційну систему.
        Тож люди з Microsoft зібралися на зустріч і придумали .NET Core.
        Основною ідеєю фреймворку є кросплатформні програми, що означає, що ви
        можете розмістити свою програму на різних ОС. Починаючи з .NET 5, версія
        платформи стала називатися .NET (без використання «Core» у назві). Крім
        того, .NET є open-source, тому має велику підтримку спільноти.
      </p>
      <h5>.NET переваги</h5>
      <ol className="counted">
        <li>
          <strong>Кросплатформенність</strong> Працює на Windows, Linux, macOS
        </li>
        <li>
          <strong>Гнучке розгортання</strong> Фреймворк можна включити у вашу
          програму або встановити side-by-side user-або machine-wide
        </li>
        <li>
          <strong>Інструменти командного рядка</strong> .NET has great CLI, .NET
          має чудовий CLI, тому всі сценарії продукту можна виконувати за
          допомогою командного рядка
        </li>
        <li>
          <strong>Сумісність</strong> .NET сумісний із .NET Framework, Xamarin і
          Mono
        </li>
        <li>
          <strong>Open-source</strong> Платформа .NET має відкритий вихідний код
          і використовує ліцензії MIT і Apache 2. Ви можете зробити внесок у
          розвиток
        </li>
        <li>
          <strong>Підтримується Microsoft</strong> Величезна корпорація змушує
          .NET розвиватися та отримувати нові функції
        </li>
      </ol>

      <h5>Що можна створити за допомогою .NET</h5>

      <Panels {...panelsPayload.ua} />

      <h5>З чого потрібно почати</h5>

      <ul>
        <li>
          <p>
            <strong>.NET SDK</strong> включає все необхідне для створення та
            запуску програм .NET. Оскільки ви не обмежені лише Windows, ви
            можете вибрати будь-яке IDE або текстовий редактор (
            <a href="https://visualstudio.microsoft.com/">
              <strong>Visual Studio</strong>
            </a>
            ,{' '}
            <a href="https://code.visualstudio.com/">
              <strong>Visual Studio Code</strong>
            </a>
            ,{' '}
            <a href="https://www.jetbrains.com/rider/">
              <strong>JetBrains Rider</strong>
            </a>
            ,{' '}
            <a href="https://www.sublimetext.com/">
              <strong>Sublime</strong>
            </a>
            ,{' '}
            <a href="https://atom.io/">
              <strong>Atom</strong>
            </a>
            ). Ви можете писати код за допомогою свого улюбленого інструменту та
            виконувати необхідні дії за допомогою CLI. Деякі корисні команди
            CLI:
          </p>
          <ul>
            <li>
              <code>dotnet new</code> — ініціалізує шаблон консольного проекту
              C#
            </li>

            <li>
              <code>dotnet restore</code> — відновлює залежності програми
            </li>

            <li>
              <code>dotnet build</code> — створює програму .NET
            </li>

            <li>
              <code>dotnet publish</code> — публікує портативну або самодостатню
              програму .NET
            </li>

            <li>
              <code>dotnet run</code> — запускає програму
            </li>

            <li>
              <code>dotnet test</code> — запускає тести за допомогою програми
              виконання тестів, вказаної в project.json
            </li>
            <li>
              <code>dotnet pack</code> — створює пакет NuGet вашого коду
            </li>
          </ul>
        </li>
        <li>
          <strong>.NET Runtime</strong> містить ресурси, необхідні для запуску
          програм .NET (це середовище виконання включено до SDK)
        </li>
      </ul>

      <Level
        id="creating-an-app"
        number="2"
        name="Створення програми"
        difficulty="Стає тепліше, потрібно друкувати."
        objectives={<span>Зрозуміти анатомію програми ASP.NET Core.</span>}
      />

      <h5>
        Що таке ASP.NET Core{' '}
        <sup>
          <strong>
            <a href="https://dotnet.microsoft.com/learn/web/what-is-aspnet-core">
              [1]
            </a>{' '}
            <a href="https://docs.microsoft.com/en-us/aspnet/core/">[2]</a>
          </strong>
        </sup>
      </h5>

      <p>
        <strong>ASP.NET</strong> - популярний фреймворк веб-розробки для
        створення веб-програм на платформі .NET. <strong>ASP.NET Core</strong> —
        це версія ASP.NET із відкритим кодом, яка працює на macOS, Linux і
        Windows. Була уперше випущена у 2016 році та є оновленням попередніх
        версій ASP.NET лише для Windows. У порівнянні з ASP.NET, версія Core
        забезпечує:
      </p>
      <ul>
        <li>Чистішу та модульну архітектуру</li>
        <li>Посилену безпеку</li>
        <li>Покращену продуктивність </li>
      </ul>

      <h5>Навіщо використовувати ASP.NET Core</h5>

      <ul>
        <li>
          Інтеграція сучасних клієнтських фреймворків і робочих процесів
          розробки
        </li>
        <li>Система конфігурації на основі хмарного середовища</li>
        <li>Вбудований dependency injection</li>
        <li>Новий легкий і модульний конвеєр запитів HTTP</li>
        <li>
          Створено на платформі .NET, яка підтримує паралельне керування
          версіями програми
        </li>
        <li>Поставляється повністю як пакети NuGet</li>
        <li>Нові інструменти, які спрощують сучасну веб-розробку</li>
        <li>
          Створюйте та запускайте кросплатформенні програми ASP.NET у Windows,
          Linux і macOS
        </li>
        <li>Відкритий вихідний код, орієнтований на спільноту</li>
      </ul>
      <h5>
        Створіть нову програму, запустивши <code>dotnet new webapi</code> або
        використавши функції вашого IDE{' '}
        <sup>
          <strong>
            <a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/startup">
              [1]
            </a>
          </strong>
        </sup>
      </h5>

      <DetailsCard>
        <>
          <strong>Program.cs</strong>
        </>
        <>
          Ось так виглядає точка входу:
          <Code language={CodeLanguage.CSHARP}>
            {`public static void Main(string[] args)
{
  var builder = WebApplication.CreateBuilder(args);

  // Add services to the container.

  builder.Services.AddControllers();

  var app = builder.Build();

  // Configure the HTTP request pipeline.

  app.UseHttpsRedirection();

  app.UseAuthentication();
  app.UseAuthorization();

  app.MapControllers();

  app.Run();
}
`}
          </Code>
          Тут ми можемо налаштувати сервіси, які використовує програма, і
          визначити, як програма буде оброблювати запити HTTP (ви можете
          налаштувати конвеєр, який оброблятиме запити).
        </>
      </DetailsCard>

      <Level
        id="controllers-and-services"
        number="3"
        name="Контролери та сервіси"
        difficulty="No kidding."
        objectives="Learn that services are no joke and business logic shouldn't live in controllers."
      />

      <p>
        Я покажу вам, як написати API за допомогою{' '}
        <strong>ASP.NET Core Web API</strong>.
      </p>
      <ol className="counted">
        <li>
          <p>
            По-перше, давайте створимо просту програму, яка повертає всіх
            студентів Binary. Створіть нові файли під назвою{' '}
            <strong>BinaryStudentsController.cs</strong> у папці{' '}
            <strong>Controllers</strong> та <strong>BinaryStudent.cs</strong>,
            де хочете
          </p>
          <DetailsCard>
            <strong>BinaryStudentsController.cs</strong>
            <Code language={CodeLanguage.CSHARP}>
              {`using Microsoft.AspNetCore.Mvc;
using BSA_ASP.NET.Business.Models;

namespace BSA_ASP.NET.Controllers;

[ApiController]
[Route("[controller]")]
public class BinaryStudentsController : ControllerBase
{
  public BinaryStudentsController() { }

  [HttpGet]
  public IEnumerable<BinaryStudent> GetStudents() => new BinaryStudent[]
    {
      new BinaryStudent { Id = 1, FirstName = "Serhii", LastName = "Yanchuk", Age = 21 },
      new BinaryStudent { Id = 2, FirstName = "Vadym", LastName = "Kolesnyk", Age = 21 }
    };
}`}
            </Code>
          </DetailsCard>

          <DetailsCard>
            <strong>BinaryStudent.cs</strong>

            <Code language={CodeLanguage.CSHARP}>
              {`namespace BSA_ASP.NET.Business.Models;

public class BinaryStudent
{
  public int Id { get; set; }
  public string? FirstName { get; set; }
  public string? LastName { get; set; }
  public int Age { get; set; }
}`}
            </Code>
          </DetailsCard>
        </li>
        <li>
          <p>
            Для запуску сервера можна використати команду{' '}
            <code>dotnet run</code>. Щоб переконатися, що наш API працює, ми
            повинні надіслати запит до <code>BinaryStudentsController</code>.
            Відкрийте{' '}
            <a href="https://localhost:7088/binarystudents">
              <b>https://localhost:7088/binarystudents</b>
            </a>{' '}
            — ви повинні отримати студентів у форматі JSON (номер порту можна
            знайти у файлі launchSettings.json).
          </p>
          <Bubble size="small">
            Ви можете використовувати Postman для тестування свого API або,
            наприклад, використовувати розширення для VSCode ―{' '}
            <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">
              <strong>REST Client</strong>
            </a>
          </Bubble>
        </li>
        <li>
          <p>
            Давайте ще трохи попрактикуємось і ускладнимо наш додаток, додамо
            більше кінцевих точок (endpoints) і залежностей. Модифікований
            контролер буде повним CRUD (C - create, R - read, U - update, D -
            delete) контролером. Писати бізнес-логіку в контролерах – не
            найкраща ідея, тому було б краще, якби ми створили для цього окремий
            сервіс.
          </p>

          <DetailsCard>
            <strong>IBinaryStudentService.cs</strong>

            <Code language={CodeLanguage.CSHARP}>
              {`using BSA_ASP.NET.Business.Models;

namespace BSA_ASP.NET.Business.Interfaces;

public interface IBinaryStudentService
{
  public List<BinaryStudent> Get(string? filter);
  public BinaryStudent GetById(int id);
  public BinaryStudent Add(BinaryStudent student);
  public BinaryStudent Update(BinaryStudent student);
  public void Delete(int id);
}`}
            </Code>
          </DetailsCard>

          <DetailsCard>
            <strong>BinaryStudentService.cs</strong>

            <Code language={CodeLanguage.CSHARP}>
              {`using BSA_ASP.NET.Business.Interfaces;
using BSA_ASP.NET.Business.Models;

namespace BSA_ASP.NET.Business.Services;

public class BinaryStudentService: IBinaryStudentService
{
  public BinaryStudentService()
  {
    _students = new List<BinaryStudent>
    {
      new BinaryStudent { Id = 1, FirstName = "Serhii", LastName = "Yanchuk", Age = 21 },
      new BinaryStudent { Id = 2, FirstName = "Vadym", LastName = "Kolesnyk", Age = 21 }
    };
  }

  public List<BinaryStudent> Get(string? filter) =>
    string.IsNullOrEmpty(filter) ?
      _students :
      _students.Where(s => s.LastName.Contains(filter, StringComparison.OrdinalIgnoreCase)).ToList();

  public BinaryStudent GetById(int id) => _students.SingleOrDefault(s => s.Id == id);

  public BinaryStudent Add(BinaryStudent student)
  {
    student.Id = _students.Max(s => s.Id) + 1;
    _students.Add(student);
    return student;
  }

  public BinaryStudent Update(BinaryStudent student)
  {
    var studentToUpdate = GetById(student.Id);

    if (studentToUpdate is not null)
    {
      studentToUpdate.FirstName = student.FirstName;
      studentToUpdate.LastName = student.LastName;
      studentToUpdate.Age = student.Age;
    }

    return studentToUpdate;
  }

  public void Delete(int id)
  {
    _students = _students.Where(s => s.Id != id).ToList();
  }

  private List<BinaryStudent> _students;
}`}
            </Code>
          </DetailsCard>

          <DetailsCard>
            <strong>BinaryStudentsController.cs</strong>

            <Code language={CodeLanguage.CSHARP}>
              {`using BSA_ASP.NET.Business.Interfaces;
using BSA_ASP.NET.Business.Models;
using Microsoft.AspNetCore.Mvc;

namespace BSA_ASP.NET.Controllers;

[ApiController]
[Route("[controller]")]
public class BinaryStudentsController : ControllerBase
{
  public BinaryStudentsController(IBinaryStudentService studentService)
  {
    _studentService = studentService;
  }

  [HttpGet] // https://localhost:7088/binarystudents?filter=yan
  public IEnumerable<BinaryStudent> GetStudents([FromQuery] string? filter = default) => _studentService.Get(filter);

  [HttpGet("{id}")] // https://localhost:7088/binarystudents/1
  public BinaryStudent GetStudent(int id) => _studentService.GetById(id);

  [HttpPost] // https://localhost:7088/binarystudents
  public BinaryStudent AddStudent([FromBody] BinaryStudent student) => _studentService.Add(student);

  [HttpPut] // https://localhost:7088/binarystudents
  public BinaryStudent UpdateStudent([FromBody] BinaryStudent student) => _studentService.Update(student);

  [HttpDelete("{id}")] // https://localhost:7088/binarystudents/3
  public void DeleteStudent(int id) => _studentService.Delete(id);

  private IBinaryStudentService _studentService;
}`}
            </Code>
          </DetailsCard>

          <DetailsCard>
            <strong>Program.cs</strong>

            <Code language={CodeLanguage.CSHARP}>
              {`using BSA_ASP.NET.Business.Interfaces;
using BSA_ASP.NET.Business.Services;

namespace BSA_ASP.NET;

public class Program
{
  public static void Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);

    // Add services to the container.
    ConfigureServices(builder.Services);

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    ConfigurePipeline(app);

    app.Run();
  }

  private static void ConfigureServices(IServiceCollection services)
  {
    services.AddControllers();
    services.AddSingleton<IBinaryStudentService, BinaryStudentService>();
  }

  private static void ConfigurePipeline(WebApplication app)
  {
    app.UseHttpsRedirection();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();
  }
}`}
            </Code>
          </DetailsCard>
        </li>
        <li>
          <p>
            Запустіть програму та перевірте три кінцеві точки, щоб переконатися,
            що все працює.
          </p>
          <ul>
            <li>
              <a href="https://localhost:7088/binarystudents?filter=yan">
                <strong>
                  https://localhost:7088/binarystudents?filter=yan
                </strong>
              </a>{' '}
              - GET запит, отримання тих студентів, прізвища яких містять рядок
              фільтра;
            </li>
            <li>
              <a href="https://localhost:7088/binarystudents/1">
                <strong>https://localhost:7088/binarystudents/1</strong>
              </a>{' '}
              - GET запит, пошук студента за ідентифікатором;
            </li>
            <li>
              <a href="https://localhost:7088/binarystudents">
                <strong>https://localhost:7088/binarystudents</strong>
              </a>{' '}
              - POST запит, додавання нового студента, якого ви визначаєте в
              тілі запиту у форматі JSON.
            </li>
          </ul>
        </li>
      </ol>

      <Level
        id="additional-features"
        number="4"
        name="Додаткові функції"
        objectives="Усувайте неполадки, налагоджуйте, розширюйте та краще підключайте свою програму."
      />

      <h5 id="dependency-injection">
        Короткий огляд Dependency Injection (Singleton, Scoped, Transient)
      </h5>
      <p>
        Як ми можемо прокинути залежності? Відповідь - це DI або Dependency
        injection.
      </p>
      <p>
        <a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection">
          <strong>Dependency injection (DI)</strong>
        </a>{' '}
        — патерн проектування програмного забезпечення, який є технікою для
        досягнення{' '}
        <a href="https://docs.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/architectural-principles#dependency-inversion">
          <strong>Inversion of Control (IoC)</strong>
        </a>{' '}
        між класами та їхніми залежностями. У нашому випадку
        <code>BinaryStudentsController</code> залежить від{' '}
        <code>BinaryStudentService</code>. Може бути випадок, коли ми захочемо
        використати іншу реалізацію. У цьому випадку нам потрібно буде пройти
        нашу програму та вручну змінити назву класу в усіх місцях, де він
        використовується. З DI ми можемо легко зробити це в одному місці (в{' '}
        <b>Program.cs</b>). Контейнер .NET DI бере на себе відповідальність за
        створення екземпляра залежності та видалення його, коли він більше не
        потрібен. Є кілька опцій тривалості життя сервісу:
      </p>
      <ol className="counted">
        <li>
          <b>Singleton</b>— сервіс створюється під час першого запиту (або коли
          екземпляр вказано під час реєстрації іншого сервісу при налаштуванні
          веб-програми). Кожен наступний запит використовує той самий екземпляр.
        </li>
        <li>
          <b>Scoped</b>— сервіс створюється один раз на запит клієнта
          (connection).
        </li>
        <li>
          <b>Transient</b>— сервіс створюється кожного разу, коли він
          запрошується з DI контейнеру. Найкраще підходить для легких сервісів
          без збереження стану.
        </li>
      </ol>
      <p>
        Давайте застосуємо <b>Singleton</b> для нашого сервісу{' '}
        <code>BinaryStudentService</code>, щоб використовувати ту саму колекцію
        студентів:
      </p>
      <ol className="counted">
        <li>
          <p>
            Це можна зробити за допомогою IServiceCollection в <b>Program.cs</b>
            :
          </p>
          <Code language={CodeLanguage.CSHARP}>
            {'builder.Services.AddSingleton<BinaryStudentService>();'}
          </Code>
        </li>
        <li>
          <p>
            Ми можемо створити інтерфейс для <code>BinaryStudentService</code> і
            прив’язати його до реалізації. Це дозволить нам змінювати реалізацію
            в одному місці.
          </p>
          <Code language={CodeLanguage.CSHARP}>
            {
              'builder.Services.AddSingleton<IBinaryStudentService, BinaryStudentService>();'
            }
          </Code>
        </li>
      </ol>

      <h5>Middleware</h5>

      <p>
        Middleware - це програмне забезпечення, створюване у вигляді конвейєра
        (pipeline) додатків для обробки запитів і відповідей. Якщо коротко:
        програма застосовує всі middlewares однин за іншим для кожного запиту.
      </p>

      <img src="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/index/_static/request-delegate-pipeline.png" />
      <p>
        Наприклад, якщо ви хочете логувати всі запити, ви можете додати у
        конвеєр (у наведеному нижче прикладі для спрощення використовується{' '}
        <code>Console.WriteLine</code>, ви можете використовувати будь-який
        фреймворк для логування). Отже, додайте наступний код до конфігурації
        конвеєра в <b>Program.cs</b>:
      </p>
      <Code language={CodeLanguage.CSHARP}>{`app.Use(async(context, next) =>
{
  Console.WriteLine("Started handling request");
  await next.Invoke();
  Console.WriteLine("Finished handling request");
});`}</Code>
      <p>Тепер запустіть програму, надішліть запит і подивіться у консоль.</p>

      <h5>Маршрутизація</h5>
      <p>
        Маршрутизація (routing) відповідає за зіставлення URI запитів із
        селекторами кінцевих точок (endpoints) і відправлення вхідних запитів до
        кінцевих точок. Маршрути визначаються в програмі та налаштовуються під
        час запуску програми. Маршрут може додатково отримувати значення з
        URL-адреси, що міститься в запиті, і ці значення потім можна
        використовувати для обробки запиту. По суті, маршрутизація — це
        middleware. Дивлючись на зображення вище, уявіть як запит надходить на
        сервер, потім він обробляється ланцюгом middleware-ів, а потім
        middleware маршрутизації співставляє URL з URL-адресою контролеру та
        іменем метода. У WebAPI ми визначаємо маршрут за допомогою атрибута{' '}
        <code>Route</code>:
      </p>
      <Code language={CodeLanguage.CSHARP}>
        {`[ApiController]
[Route("[controller]")]
public class BinaryStudentsController : ControllerBase`}
      </Code>
      <p>
        Ви можете прописати конкретний рядок або використати плейсхолдер{' '}
        <b>[controller]</b>. І якщо ви дотримуєтеся угоди про іменування, тобто
        ім’я вашого класу має префікс <b>"Controller"</b> у кінці, тоді замість
        плейсхолдера буде підставлено ім’я класу без префікса Існує той самий
        атрибут для методів у контролері.
      </p>

      <h5>Minimal API</h5>

      <p>
        Minimal API - це новий спосіб створення API без великої кількості коду
        на основі контролера. Ви можете визначити кінцеві точки за допомогою цих
        методів розширення в конфігурації конвеєра:
      </p>
      <ul>
        <li>MapGet;</li>
        <li>MapPost;</li>
        <li>MapPut;</li>
        <li>MapDelete;</li>
        <li>MapMethods.</li>
      </ul>
      <Code language={CodeLanguage.CSHARP}>
        {
          'app.MapGet("/binarystudents", (IBinaryStudentService studentService) => studentService.Get(string.Empty));'
        }
      </Code>
      <p>
        Перший параметр — шлях, який обробляє кінцева точка, а другий — обробник
        типу делегату. Це зручно, якщо створення цілого контролера безглуздо. Це
        також зручно, якщо вам потрібно швидко перевірити кінцеву точку.
      </p>

      <h5>Коди стану</h5>
      <p>
        Повертати тільки коди 200 або 500 звісно круто. Але є велика кількість
        інформативних кодів, тому чого їх не використовувати? Одним із способів,
        щоб задавати конкретні коди стану при відправленні відповіді клієнту, є
        використання методів класу <code>ControllerBase</code>, від якого
        наслідується створений нами контролер. Наприклад, наступні методи:
      </p>

      <ul>
        <li>Ok - 200;</li>
        <li>Created - 201;</li>
        <li>BadRequest - 400;</li>
        <li>NotFound - 404;</li>
        <li>Forbid - 403;</li>
        <li>StatusCode - будь-який код.</li>
      </ul>
      <p>
        Для того, щоб використати їх, ми повинні обернути тип значення, що
        повертається, класом <code>ActionResult</code>:
      </p>
      <Code
        language={CodeLanguage.CSHARP}
      >{`[HttpGet("{id}")] // https://localhost:7088/binarystudents/1
public ActionResult<BinaryStudent> GetStudent(int id) => Ok(_studentService.GetById(id));

[HttpPost] // https://localhost:7088/binarystudents
public ActionResult<BinaryStudent> AddStudent([FromBody] BinaryStudent student)
{
    var addedStudent = _studentService.Add(student);
    return Created($"~binarystudents/{addedStudent.Id}", addedStudent);
}`}</Code>

      <ThatsAllFolks />

      <Bubble>
        Ось так коротко про ASP.NET Core. На цьому все, дуже дякую за увагу🎩!
        Ставте питання та залишайте відгуки на лекцію на сайті академії. Успіхів
        з домашкою, скоро побачимося, бувай!
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };
