import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layout/layout';
import { SEO } from '~/partials/partials';
import {
  DetailsCard,
  IntroBlueBubble,
  Language,
  Level,
  TimelineOfContents,
  VideoWrapper,
  Bubble,
  Code,
  ThatsAllFolks,
} from '~/components/common/common';
import { introPayload, seoPayload, slugPayload } from '../data/data';
import stackAndHeap from '../assets/images/stack-and-heap.gif';
import exceptionClassHierarchy from '../assets/images/exception-class-hierarchy.jpg';
import boxingUnboxing from '../assets/images/boxing-unboxing.gif';
import constraintsTypes from '../assets/images/constraints-types.png';
import nugetLogo from '../assets/images/nuget-logo.png';
import dotnetPlatform from '../assets/images/dotnet-platform.jpg';
import dotnet6Platform from '../assets/images/net-6-ecosystem.png';
import lambdaExpressionStructure from '../assets/images/lambda-expression-structure.png';
import delegateEventFlow from '../assets/images/delegate-event-flow.png';
import collectionsHierarchy from '../assets/images/collections-hierarchy.jpg';
import stack from '../assets/images/stack.jpg';
import { CodeLanguage } from '~/enums/code-language/code-language';
import * as styles from '../assets/styles/dotnet-ecosystem-and-csharp-best-practices.module.scss';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>.NET ecosystem and C# best practices</h1>
      <Language currentLanguage="ua" languages={slugPayload} />

      <VideoWrapper duration="35 хв">
        <iframe
          src="https://www.youtube.com/embed/qESDPe_Gj5Y"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <IntroBlueBubble {...introPayload.ua} />

      <TimelineOfContents
        timeline={[
          {
            linkTo: '#dotnet-platform-overview',
            title: 'Огляд .NET платформи',
          },
          {
            linkTo: '#dotnet-under-the-hood',
            title: '.NET під катопом',
          },
          {
            linkTo: '#csharp-essential-topics',
            title: 'Найважливіші поняття C#',
          },
          {
            linkTo: '#clean-code-principles',
            title: 'Принципи чистого коду',
          },
        ]}
      />

      <Level
        id="dotnet-platform-overview"
        number="1"
        name="Огляд .NET платформи"
        difficulty={
          <span>
            <a href="https://www.urbandictionary.com/define.php?term=easy%20peasy%20lemon%20squeezy">
              Easy peasy lemon squeezy
            </a>
            .
          </span>
        }
        objectives={
          <span>
            Почитати/послухати про платформу .NET в загальному{' '}
            <em>(довго не буде)</em>.
          </span>
        }
        labels={{
          level: 'Розділ',
          backToTop: 'нагору',
          difficulty: 'Складність:',
          objectives: 'Мета:',
        }}
      />

      <p>
        Зараз компанія Microsoft вкладає досить багато ресурсів у розвиток .NET
        та їхньої хмарної платформи — Azure <em>(Ажур, Ежур, Ейжа)</em> та
        найбільше контрибьютить в open source. Інфраструктура .NET стрімко росте
        та розвивається, постійно створюютсья нові інструменти для роботи з нею,
        додаються інтеграції з іншими сервісами.
      </p>

      <DetailsCard>
        <>
          <h5>
            Платформа <strong>.NET</strong> зараз
          </h5>
        </>
        <>
          <img src={dotnetPlatform} alt="dotnet-platform" />

          <p>Шляхи створення .NET-додатків:</p>
          <ol className="counted">
            <li>
              <strong>.NET Framework</strong> — розробка під Windows настільних
              додатків на <strong>Windows Forms</strong>, <strong>WPF</strong>,
              веб-серверів на <strong>ASP.NET</strong> та <strong>WCF</strong>
            </li>
            <li>
              <strong>.NET Core</strong> — розробка кросплатформних веб-додатків
              за допомогою <strong>ASP.NET Core</strong>, створення гібридних
              додатків з допомогою <strong>Universal Windows Platform</strong>,
              яка дозволяє запускати програму написану на цій технології на
              Windows-машині, Xbox, Hololens
            </li>
            <li>
              <strong>Xamarin</strong> — платформа для створення мобільних
              додатків для <strong>iOS</strong> i <strong>Android</strong>,
              використовуючи C#, XML та XAML
            </li>
          </ol>
          <p>
            Код, який написаний під спеціальний фреймворк, як WPF, ASP.NET Core
            чи Android, не можна перевикористати на іншій платформі, тому що він
            заточений для роботи з так званими <em>platform-specific API</em>,
            який відрізняється у них всіх. Щоб можна було повторно
            використовувати код бізнес-логіки, хелпер-методів, моделей, класів і
            так далі було створено <strong>.NET Standart</strong>, який надає
            набір доступних АPI, які однаково працюють у всіх десктопних
            програмах, веб-серверах, мобільних додатках, іграх та хмарних
            службах незалежно від операційної системи і платформи.
          </p>
        </>
      </DetailsCard>
      <DetailsCard>
        <h5>
          Платформа <strong>.NET 6</strong>
        </h5>
        <>
          <img
            src={dotnet6Platform}
            alt="dotnet5-platform"
            className={styles.topImage}
          />
          <p>
            З листопада 2021 року випущено <strong>.NET 6</strong>. Що стало
            серйозним вдосконаленням системи розробки в цілому. Головним
            нововведенням стала підтримка <strong>Linux</strong>,{' '}
            <strong>macOS</strong>, <strong>iOS</strong>,{' '}
            <strong>Android</strong>, <strong>tvOS</strong>,{' '}
            <strong>watchOS</strong> і <strong>WebAssembly</strong>. В
            результаті стало можливим створювати додатки для різних платформ на
            загальній базі коду з однаковим процесом збирання, незалежно від
            типу додатка. Тож тепер ви можете розробляти за допомогою{' '}
            <strong>Visual Studio</strong>,{' '}
            <strong>Visual Studio для Mac</strong>,{' '}
            <strong>Visual Studio Code</strong> або будь-якої іншої IDE за
            допомогою <strong>dotnet CLI</strong>
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>NuGet</strong>
        </h5>
        <>
          <img src={nugetLogo} alt="nuget-logo" className="top-image" />

          <p>
            Кожному програмісту рано чи пізно гарантовано потрібно
            імплементовувати функціонал, який частково або повністю хтось раніше
            вже створив і навіть опублікував (як правило у вигляді{' '}
            <i>DLL бібліотеки</i>). Розробники називають такі модулі "пакетами",
            в які складено скомпільований код, додаткові файли-ассети та
            маніфест, що пояснює мету та спосіб використання пакету. У більшості
            мов програмування є власні платформи для обміну такими корисними
            модулями, у .NET це <strong>NuGet</strong>, пітримуваний
            Microsoft-ом. Розробники, які створили крутий інструмент чи,
            наприклад, бібліотеку для роботи з файловою системою, мають
            можливість опублікувати свою роботу як <strong>NuGet-пакет</strong>{' '}
            в вигляді <em>zip-файлу</em> з розширенням <strong>.nupkg</strong>.
            Ви можете шукати та скачувати модулі, які пришвидшать розробку
            вашого додатку, з центрального репозиторію{' '}
            <strong>NuGet Gallery</strong> ― він налічує вже близько 100000
            унікальних пакетів і там може знайтись щось корисне.
          </p>
        </>
      </DetailsCard>

      <Level
        id="dotnet-under-the-hood"
        number="2"
        name=".NET під капотом"
        difficulty={<span className={styles.orangeText}>Hard as hell 🔥</span>}
        objectives="Зрозуміти SDK."
        labels={{
          level: 'Розділ',
          backToTop: 'нагору',
          difficulty: 'Складність:',
          objectives: 'Мета:',
        }}
      />

      <DetailsCard>
        <>
          <h5 className={styles.flex}>
            <span>
              <strong>CLR</strong>
            </span>
            <small className={styles.tooltip}>Common Language Runtime</small>
          </h5>
        </>
        <>
          Сьогодні у .NET-світі найпоширеніші мови програмування — це{' '}
          <strong>C#</strong>, <strong>F#</strong> та{' '}
          <strong>Visual Basic</strong>. У кожної є свій компілятор, який
          перетворює код написаний на цій мові у{' '}
          <strong>Intermediate Language Code (IL)</strong>, який представляє з
          себе набір інструкцій для віртуальної машини .NET —{' '}
          <strong>CLR (Common Language Runtime)</strong>.
          <br />
          Основні етапи виконання програми .NET:
          <ul>
            <li>
              <DetailsCard isReversed>
                <>
                  Спочатку написаний нами код компілятор перетворить з C# у IL:
                </>
                <>
                  <p>Звичайний C# код</p>

                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`public void SumTwoNumbers() {
  int firstNumber = 10;
  var secondNumber = 200;

  Console.WriteLine(firstNumber + secondNumber);
}`}</Code>
                  <p>C# код, скомпільований в IL</p>
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`.method public hidebysig
instance void SumTwoNumbers() cil managed {
  // Method begins at RVA 0x2070
  // Code size 18 (0x12)
  .maxstack 2.locals init([0] int32 firstNumber, [1] int32 secondNumber)

  IL_0000: ldc.i4.s 10
  IL_0002: stloc.0
  IL_0003: ldc.i4 200
  IL_0008: stloc.1
  IL_0009: ldloc.0
  IL_000a: ldloc.1
  IL_000b: add
  IL_000c: call void[mscorlib] System.Console::WriteLine(int32)
  IL_0011: ret
}`}</Code>
                </>
              </DetailsCard>
            </li>
            <li>
              Тоді, коли прийде час для виконання частини нашого коду в
              програмі, CLR за допомогою <strong>JIT (Just in Time)</strong>{' '}
              компілятора перетворить код IL на машинний код.
            </li>
          </ul>
          <p>
            Результатом білду .NET-програми є файл з розширенням{' '}
            <strong>.exe</strong> (Executable) або <strong>.dll</strong>{' '}
            (Dynamic Link Library).
          </p>
          <Bubble size="small">
            <p>
              Важливо зазначити, що при перетворенні IL в машинний код буде
              перетворена тільки та частина коду, яка має виконатись в
              теперішній момент часу.
            </p>
          </Bubble>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Value</strong> and <strong>Reference</strong> types
        </h5>
        <>
          <p>
            На найвищому рівні у С# є 2 типи даних —{' '}
            <strong>це значимі типи (value types)</strong> і{' '}
            <strong>ссилочні типи (reference types)</strong>. Важливо розуміти
            відмінності між ними:
          </p>
          <div className={styles.gridTwo}>
            <div>
              <b>Значимі типи:</b>
              <ul>
                <li>Цiлочисленні типи</li>
                <li>Типи з плаваючою крапкою</li>
                <li>decimal</li>
                <li>bool</li>
                <li>enum-и</li>
                <li>структури</li>
              </ul>
            </div>
            <div>
              <b>Ссилочні типи:</b>
              <ul>
                <li>тип object</li>
                <li>string</li>
                <li>класи</li>
                <li>інтерфейси</li>
                <li>делегати</li>
              </ul>
            </div>
          </div>
          <p>
            Значимі типи зберігаються у стеку, ссилочні на кучі.{' '}
            <strong>Value types</strong> передаються по значенню, тобто
            копіюються, <strong>reference types</strong> передаються за
            посиланням.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Stack</strong> and <strong>Heap</strong>
        </h5>
        <>
          <img
            src={stackAndHeap}
            alt="stack-and-heap"
            className={styles.topImage}
          />
          <p>
            У <strong>.NET</strong> пам'ять ділиться на два типи:{' '}
            <strong>стек</strong> і <strong>кучу</strong>.<strong> Стек</strong>{' '}
            являє собою структуру даних, яка росте знизу вгору: кожен новий
            елемент розміщується поверх попереднього. У стеку зберігаються{' '}
            <em>значимі типи</em> та <em>посилання на ссилочні типи</em>, які, у
            свою чергу розміщуються на кучі.
          </p>
          <p>
            <strong>Кучу</strong> можна уявити як невпорядкований набір
            різнорідних об'єктів. При створенні об'єкту <em>ссилочного типу</em>{' '}
            в стек додається посилання на адресу цього об'єкту у{' '}
            <strong>кучі</strong>. Коли об'єкт <em>cсилочного типу</em> перестає
            використовуватися, то посилання з стеку видаляється, і пам'ять
            звільняється.
          </p>
          <p>
            У .NET-і очищення пам'яті відбувається автоматично. За це відповідає{' '}
            <strong>Garbage Collector</strong> (по нашому — сміттєзборщик). Коли
            він бачить, що на об'єкт в кучі більше немає посилань, він видаляє
            цей об'єкт та очищує пам'ять.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>
            <code>ref</code>
          </strong>{' '}
          and{' '}
          <strong>
            <code>out</code>
          </strong>{' '}
          parameters
        </h5>
        <>
          <p>
            Важливий момент у тому, як змінні <em>значимих</em> та{' '}
            <em>ссилочних типів</em> передаються у метод.
          </p>

          <h3>Value Type</h3>
          <Code
            language={CodeLanguage.CSHARP}
          >{`static void Main(string[] args) {
  int c = 20;

  MethodValue(c);

  Console.WriteLine(c); // 20
}

// pass copy of the value
static void MethodValue(int variableCopy) {
  variableCopy = 1;
}`}</Code>
          <h3>Reference Type</h3>
          <Code language={CodeLanguage.CSHARP}>{`class City {
  public int code;
  public City(int code) {
    this.code = code;
  }
}

static void Main(string[] args) {
  City city = new City(12);

  MethodReference(city);

  Console.WriteLine(city.code); // 0
}

// pass the reference to the object on heap
static void MethodReference(City city) {
  city.code = 0;
}`}</Code>
          <h3>Ref</h3>
          <Code
            language={CodeLanguage.CSHARP}
          >{`static void Main(string[] args) {
  int d = 30;

  MethodValueRef(ref d);

  Console.WriteLine(d); // 2
}

// pass value by reference
static void MethodValueRef(ref int variable) {
  variable = 2;
}`}</Code>
          <h3>Out</h3>
          <Code
            language={CodeLanguage.CSHARP}
          >{`static void Main(string[] args) {
  int e;

  MethodValueOut(out e);

  Console.WriteLine(e); // 3
}

// pass value by reference
static void MethodValueOut(out int variable) {
  variable = 3;
}`}</Code>
        </>
      </DetailsCard>
      <DetailsCard>
        <h5>
          <strong>Boxing</strong> / <strong>Unboxing</strong>
        </h5>
        <>
          <p>
            Операція упаковки — <strong>boxing</strong> — це виділення пам'яті
            на кучі під об'єкт значимого типу — value type, і присвоєння ссилки
            на цю ділянку пам'яті змінній в стеці. Розпакування —{' '}
            <strong>unboxing</strong>, навпаки, виділяє пам'ять в стеку під
            об'єкт, отриманий з кучі по ссилці.
          </p>

          <div className={styles.gridTwo}>
            <Code
              language={CodeLanguage.CSHARP}
            >{`int i = 123;      // a value type
object o = i;     // boxing
int j = (int)o;   // unboxing`}</Code>
            <img src={boxingUnboxing} alt="boxing-unboxing" />
          </div>
        </>
      </DetailsCard>

      <Level
        id="csharp-essential-topics"
        number="3"
        name="Найважливіші теми C#"
        difficulty="Ну таке собі."
        objectives="Зрозуміти SDK."
        labels={{
          level: 'Розділ',
          backToTop: 'нагору',
          difficulty: 'Складність:',
          objectives: 'Мета:',
        }}
      />

      <DetailsCard>
        <h5>
          <strong>Class vs Struct</strong>
        </h5>
        <>
          <p>
            <strong>Структури</strong> по вигляду дуже схожі на{' '}
            <strong>Класи</strong>, але існує принципова відмінність, яка
            згадувалась раніше. <u>Клас</u> — це <strong>reference type</strong>{' '}
            і передається по ссилці, а <u>структура</u> —{' '}
            <strong>value type</strong> і передається за значенням — тобто
            копіюється.
          </p>
          <p>
            <em>Структури</em> краще використовувати для невеликих класів,
            маленьких структур даних та неважких об'єктів. <em>Класи</em> ж
            можна використовувати у всіх випадках, де вам незручно
            використовувати структуру. Вони чудово підходять для того щоб бути
            частиною ієрархії сутностей, мати внутрішній стан та містити в собі
            велику кількість бізнес логіки.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Static members</strong>
        </h5>
        <>
          <p>
            Класи та структури можуть мати <em>статичні поля</em>,{' '}
            <em>методи</em> та <em>властивості</em>. Якщо член статичний, то він
            відноситься до усього класу чи структури і для звернення до нього не
            потрібно створювати екземпляр.
          </p>

          <Code language={CodeLanguage.CSHARP}>{`class Wallet
{
    public static int Bonus = 100;
    public int balance;
    public Wallet(int bal)
    {
        balance = bal;
    }

    public int GetBalance()
    {
        return balance + Bonus;
    }

    public static int GetPureBalance()
    {
        // Error: Cannot access non-static field in static context
        return balance;
    }
}

static void Main(string[] args)
{
    Console.WriteLine(Wallet.Bonus);      // 100
    Wallet.Bonus += 200;

    var wallet1 = new Wallet(150);
    Console.WriteLine(wallet1.GetBalance());   // 450
}`}</Code>

          <p>
            На прикладі показано, що <em>статичне поле</em> є спільним для усіх
            об'єктів класу і може використовуватись у{' '}
            <em>нестатичних методах</em>. В той же час у{' '}
            <em>статичних методах</em> у нас немає доступу до{' '}
            <em>нестатичних членів</em> класу.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Params</strong>
        </h5>
        <>
          <p>
            Використовуючи ключове слово <code>params</code> ми можемо "сказати"
            що наш метод приймає невизначену кількість параметрів — це може бути
            нуль або більше, будь-яка кількість.
          </p>

          <Code language={CodeLanguage.CSHARP}>{`public class Program
{
    public static void UseParams(string str, params int[] list)
    {
        Console.Write(str);
        for (int i = 0; i < list.Length; i++)
        {
            Console.Write(list[i] + " ");
        }
    }

    static void Main()
    {
        // You can send a comma-separated list of arguments
        // of the specified type.
        UseParams("params: ", 1, 2, 3, 4);
        // params:
        // 1 2 3 4
    }
}`}</Code>

          <p>
            Коли метод має змінну кількість параметрів, ми передаємо аргументи
            йому просто перераховуючи їх через кому, як показано на прикладі.
            Варто зазначити, що аргумент <code>params</code> повинен бути
            вказаним останнім, після переліку усіх строго визначених аргументів
            методу.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Interface vs Abstract Class</strong>
        </h5>
        <>
          <p>
            У C# <em>абстракція</em> використовується для приховання деталей
            реалізації. Це означає, що ми зосереджуємось на тому, що об'єкт може
            робити, а не на тому, як він це робить. Це часто використовується у
            написанні великих і складних програм. Основні інструменти для цього
            — <em>абстрактні класи</em> та <em>інтерфейси</em>.
          </p>
          <p>
            У <em>абстрактном класі</em> ми можемо{' '}
            <strong>
              створити функціонал, який реалізується у похідному від нього класі
            </strong>
            . Зi свого боку <em>інтерфейс</em> дозволяє{' '}
            <strong>
              визначити функціональні можливості або функції, але не може їх
              реалізувати
            </strong>
            .
          </p>
          <p>
            Клас імплементує інтерфейс та обов'язково реалізує ці методи.
            Розглянемо кілька ключових відмінностей між ними:
          </p>

          <ol className="counted">
            <li>
              <em>Інтерфейс</em> не може мати модифікаторів доступу до членів —
              все що є в <em>інтерфейсі</em> по дефолту є публічним. У
              абстрактного класу все залишається як і у звичайного класу.
              <div className={styles.gridTwo}>
                <Code language={CodeLanguage.CSHARP}>{`interface TestInterface
{
    // Causes syntax error
    protected void GetMethod();

    public string PublicProp { get; set; }
}`}</Code>
                <Code
                  language={CodeLanguage.CSHARP}
                >{`abstract class TestAbstractClass
{
    public abstract string GetStuff();

    public abstract void DoSmth();
}

`}</Code>
              </div>
            </li>
            <li>
              В <em>Інтерфейсі</em> ми можемо лише описати сигнатуру методу без
              його імплементації. А у <em>абстрактному класі</em> можуть
              знаходитися як абстрактні методи та властивості, так і не
              абстрактні — з повною або частковою реалізацією.
              <div className={styles.gridTwo}>
                <Code language={CodeLanguage.CSHARP}>{`interface TestInterface
{
    // Only signature
    void GetMethod();
}




`}</Code>

                <Code
                  language={CodeLanguage.CSHARP}
                >{`abstract class TestAbstractClass
{
    // Complete method implementation
    public string GetStuff()
    {
        Console.WriteLine("Stuff");
        return "Stuff";
    }
}`}</Code>
              </div>
            </li>
            <li>
              Ми не можемо оголосити конструктор у тілі <em>інтерфейсу</em> ні з
              модифікатором доступу, ні без нього. У <em>абстрактному класі</em>{' '}
              ми можемо оголошувати конструктори з тими самими правилами, що і у
              звичайних класах. Він здебільшого використовується для виклику у
              конструкторі <em>похідного класу</em>, щоб не дублювати код
              ініціалізації полів чи властивостей <em>абстрактного класу</em>.
              <div className={styles.gridTwo}>
                <Code language={CodeLanguage.CSHARP}>{`interface TestInterface
{
  // Interfaces cannot contain instance constructors
    TestInterface()
    {
    }

    public TestInterface(int s)
    {
    }
}

`}</Code>
                <Code
                  language={CodeLanguage.CSHARP}
                >{`abstract class TestAbstractClass
{
    public int a;
    public string b;

    // Everything is OK - we can do that
    public TestAbstractClass(int a, string b)
    {
        this.a = a;
        this.b = b;
    }
}`}</Code>
              </div>
            </li>
            <li>
              Ми не можемо явно створити інстанс <em>інтерфейсу</em> чи{' '}
              <em>абстрактного класу</em> викликавши конструкор. Хоча нагадаю,
              що у <em>абстрактного класу</em> він може бути.
              <Code
                language={CodeLanguage.CSHARP}
              >{`static void Main(string[] args)
{
    // Causes syntax error
    TestInterface testInterface = TestInterface();

    // Causes syntax error as well
    TestAbstractClass abstractClass = TestAbstractClass();
}`}</Code>
            </li>
            <li>
              <em>Абстрактний клас</em> може містити поля і властивості,{' '}
              <em>інтерфейс</em> — лише властивості.
              <div className={styles.gridTwo}>
                <Code language={CodeLanguage.CSHARP}>{`interface TestInterface
{
    // Causes syntax error
    int field;

    const string name;
}`}</Code>

                <Code
                  language={CodeLanguage.CSHARP}
                >{`abstract class TestAbstractClass
{
    //
    public static int n = 1;
    protected const int m = 3;
    private int k = 3;
}`}</Code>
              </div>
            </li>
          </ol>
          <h6>What, why and where?</h6>
          <p>
            <strong>Інтерфейс</strong> ми використовуємо щоб описати{' '}
            <strong>API</strong> для кількох класів, які, швидше за все, будуть
            імплементувати більше одного інтерфейсу. Треба пам'ятати, що члени
            інтерфейсу не можуть бути статичними. <em>С#</em>, на відміну від{' '}
            <em>С++</em>, не підтримує множинне наслідування, тому щоб його
            реалізувати, ми використовуємо інтерфейси.
          </p>
          <p>
            <strong>Абстрактний клас</strong> використовується, якщо ми хочемо
            його включити в ієрархію успадкувань і створити функціонал з повною
            або частковою реалізацією, яку клас-наслідник може імплементувати
            або перевизначити. <em>Абстрактний клас</em> надає можливість
            зберігати стан класу в цілому, а не окремого його об'єкту.
          </p>
          <p>
            <em>Інтерфейс</em> в основному використовується тоді, коли ми хочемо
            просто описати <strong>API</strong> використання класів, які будуть
            імплементувати цей інтерфейс ― задати поведінку.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Інтерфейс IDisposable</strong>
        </h5>
        <>
          <p>
            <code>IDisposable</code> оголошує єдиний метод <code>Dispose</code>,
            в якому при імплементації інтерфейсу в класі має відбуватися
            звільнення некерованих ресурсів, таких як з'єднання з базою данних,
            файлові дескриптори, мережеві підключення тощо. Некеровані ресурси
            потрібно звільняти чим пошвидше, ще до видалення об'єкта з пам'яті
            коли до нього добереться <em>Garbage Collector</em>. Наприклад, наш
            клас взаэмодіє з файловою системою ― відкриває файл, читає щось з
            нього, записує. І краще, чим раніше закінчити роботу із цим файлом,
            щоб інші програми чи потоки могли його використовувати. І ще така
            річ, нам самим потрібно явно викликати цей метод{' '}
            <code>Dispose</code>, тому що <em>Garbage Collector</em> нічо про
            нього не знає. Це найкраще робити у блоці <code>try...finally</code>
            , щоб навіть якщо виникне помилка ми змогли звільнити ресурси та
            правильно очистити пам'ять.
          </p>

          <DetailsCard isReversed>
            <p>Приклад імплементації IDisposable</p>

            <Code language={CodeLanguage.CSHARP}>{`class MyFile : IDisposable
{
    private FileStream MyFileStream { get; set; }
    private StreamWriter MyStream { get; set; }

    public MyFile(string filePath)
    {
        MyFileStream = File.Create(filePath);
        // Open stream for working
        MyStream = new StreamWriter(MyFileStream);
    }

    public void AddTextToFile(string text) => MyStream?.Write(text);

    // Free unmanaged resources
    public void Dispose()
    {
        MyStream?.Dispose();
        MyFileStream?.Dispose();
    }
}

static void Main(string[] args)
{
    MyFile file = null;
    try
    {
        file = new MyFile("D://file.txt")
    }
    finally
    {
        file.Dispose();
    }

    // The same - but shorter way
    using (MyFile file = new MyFile("D://file2.txt"))
    {
        file.AddTextToFile("Hello");
    }
}`}</Code>
          </DetailsCard>
        </>
      </DetailsCard>

      <DetailsCard>
        <>
          <h5>
            <strong>Extension methods</strong>
          </h5>
        </>
        <>
          <p>
            <em>Extension методи</em> дозволяють "додавати" методи до існуючих
            типів без створення нового похідного типу, перекомпіляції або
            модифікації оригінального типу.
            <em>Extension метод</em> це особливий <em>статичний метод</em>, який
            має обов'язково бути членом статичного класу.
          </p>

          <Code
            language={CodeLanguage.CSHARP}
          >{`public static class StringExtensions
{
    public static int WordCount(this string str)
    {
        return str.Split(new char[] { ' ', '.', '?' },
                        StringSplitOptions.RemoveEmptyEntries).Length;
    }
}

string text = "Something like that!";
int amountOfWords = text.WordCount(); // 3`}</Code>

          <p>
            На прикладі показано <em>Extension метод</em> для типу{' '}
            <code>String</code>. <em>Статичний клас</em> може мати довільну
            назву, в той час як назва методу має відрізнятись від уже існуючих
            методів у класі, який ми розширюємо, або мати іншу сигнатуру. Надалі
            ми можемо використовувати оголошений нами метод так само як і
            звичайні методи класу, який ми розширюємо.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Generics</strong>
        </h5>
        <>
          <p>
            <strong>Дженеріки</strong> з'явилися з <strong>C# 2.0</strong>. Вони
            принесли в <strong>.NET</strong> концепт{' '}
            <em>типізованих параметрів</em> ― це дозволяє проектувати класи та
            методи, які визначають тип членів класу чи методу тільки тоді, коли
            вони ініціалізовані тим, хто їх використовує.
          </p>
          <p>
            Наприклад, використовуючи загальний параметр типу <code>Т</code>, ми
            можемо написати єдиний клас, який може використовуватись клієнтським
            кодом без ризику здійснення <em>boxing-операцій</em> (які самі по
            собі є важкими операціями і зловживати ними не є добре).
          </p>

          <DetailsCard>
            <>
              Приклад оголошення <code>Generic</code> класу
            </>
            <>
              <Code language={CodeLanguage.CSHARP}>{`class MyGenericClass<T>
{
    private T genericMemberVariable;
    public MyGenericClass(T value)
    {
        genericMemberVariable = value;
    }

    public T genericProperty { get; set; }

    public T GenericMethod(T genericParameter)
    {
        Console.WriteLine("Parameter type: {0}, value: {1}",
                          typeof(T).ToString(),genericParameter);
        Console.WriteLine("Return type: {0}, value: {1}",
                          typeof(T).ToString(), genericMemberVariable);

        return genericMemberVariable;
    }
}`}</Code>

              <p>
                Як видно з наведеного вище коду, <code>MyGenericClass</code>{' '}
                визначений з <code>&lt;T&gt;</code>. <code>&lt;T&gt;</code>{' '}
                вказує, що <code>MyGenericClass</code> є дженеріком, і тип{' '}
                <code>Т</code> буде визначено пізніше. Можете використовувати
                будь-які букви або слово замість <code>T</code>, це не має
                значення.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              Приклад створення екземпляру <code>Generic</code> класу
            </>
            <>
              <Code language={CodeLanguage.CSHARP}>{`class TestGenericClass
{
    static void Main()
    {
        // Declare an object of type int.
        var intGenericClass = new MyGenericClass<int>(10);

        int val = intGenericClass.GenericMethod(100);
        /* Output:
            Parameter type: int, value: 100
            Return type: int, value: 10
        */
    }
}`}</Code>

              <p>
                Тепер компілятор призначає тип членів класу на основі типу,
                переданого програмістом при створенні класу. Наприклад,
                наступний код використовує тип даних <code>int</code>.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              Обмеження у <code>Generic</code>
            </>
            <>
              <p>
                У C# є <em>Constraint</em>-и для того щоб обмежити типи, які
                можна використовувати у дженерік класі. Наприклад, якщо через{' '}
                <em>Constraint</em> ми вказуємо що типом <code>Т</code> може
                бути тільки <em>reference type</em>, тобто класи, то ми не
                зможемо використати <em>value type</em> для створення екземпляру
                дженерік класу. Відповідно після цього ми не можемо
                використовувати структурні типи, такі як <code>int</code> — це
                викличе помилку компіляції.
              </p>
              <Code
                language={CodeLanguage.CSHARP}
              >{`class MyGenericClass<T> where T: class
{
}

class City
{
}

class Program
{
    static void Main()
    {
        // Compile Time Error
        MyGenericClass<int> intGenericClass = new MyGenericClass<int>(10);

        MyGenericClass<City> cityGenericClass = new MyGenericClass<City>(new City());
    }
}`}</Code>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              Всі <code>Generic</code> обмеження
            </>
            <>
              <p>
                Тут зібрані усі можливі <em>Constraint</em>-и, якими можна
                обмежувати типи для використання в дженерік класах:
              </p>

              <img src={constraintsTypes} alt="constraints-types" />
            </>
          </DetailsCard>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Nullable</strong>
        </h5>
        <>
          <p>
            Явно <em>структурному типу даних</em> ми не можемо присвоїти
            значення<code>null</code>. Щоб це зробити, нам потрібно оголосити
            змінну з модифікатором <code>?</code>. Цей модифікатор являється{' '}
            <em>аліасом</em> до структури <code>Nullable&lt;T&gt;</code>
          </p>
          <Code language={CodeLanguage.CSHARP}>{`int? f = null;
Nullable<int> g = null;`}</Code>

          <p>
            Сигнатура <code>Nullable&lt;T&gt;</code>:
          </p>
          <Code language={CodeLanguage.CSHARP}>
            {'public struct Nullable<T> where T : struct'}
          </Code>

          <p>
            Коли ми обгортаємо змінну в <code>Nullable</code> тип, у нас
            з'являється новий <strong>АРІ</strong> для взаємодії з цією змінною:
          </p>
          <ul>
            <li>
              Властивіть <code>HasValue</code>, повертає <code>true</code>, якщо
              змінна містить значення, або <code>false</code>, якщо вона{' '}
              <code>null</code>
            </li>
            <Code language={CodeLanguage.CSHARP}>{`int? f = 8;
if (f.HasValue)
{
    Console.WriteLine($"f is {f.Value}");
}
else
{
    Console.WriteLine("f does not have a value");
}`}</Code>

            <li>
              <p>
                <code>Value</code> повертає реальне значення, яке зберігається у
                змінній, якщо <code>HasValue</code> дорівнює <code>true</code>.
                В іншому випаку <code>Value</code> викидає{' '}
                <code>InvalidOperationException</code>, якщо змінна{' '}
                <code>null</code>.
              </p>
            </li>
          </ul>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Events & Delegates + Lambdas</strong>
        </h5>
        <>
          <p>
            <strong>Делегати</strong> — це об'єкти, які вказують на методи; за
            допомогою них ми можемо викликати методи, які ми присвоїли делегату.
            Делегати дозволяють представляти методи у вигляді об'єктів і
            передавати їх до функцій, використовувати як <em>колбеки</em>.
          </p>
          <p>
            <strong>Події</strong> — це об'єкти типу делегат, які повідомляють
            про це що сталась якась подія (відбувся <em>action</em>).
          </p>
          <p>
            <strong>Лямбда-вирази</strong> — представляють з себе спрощений
            запис <em>анонімних методів</em>. Це дозволяє створити лаконічні
            методи, які можуть повертати якесь значення.
          </p>

          <DetailsCard>
            <p>Синтаксис лямбда-виразів</p>

            <img
              src={lambdaExpressionStructure}
              alt="lambdaExpressionStructure"
            />
          </DetailsCard>

          <DetailsCard>
            <p>Приклад використання делегату</p>
            <Code language={CodeLanguage.CSHARP}>{`namespace DotNetLecture
{
    // Declate delegate signature
    delegate void LogMessage(string messageToLog);

    public class Program
    {
        static void LogRedMessage(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(message);
        }

        static void LogGreenMessage(string message)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(message);
        }

        static void Main(string[] args)
        {
            // Create delegate variable and assign method's address to it
            LogMessage logMessage = LogRedMessage;

            // Invoke method assigned to this delegate(Invoke syntax)
            logMessage.Invoke("Hello world!\n");

            // Add another method to delegate's invocation list
            logMessage += LogGreenMessage;

            // Invoke all methods assigned to this delegate
            logMessage("Second message");

            // Remove the method from the delegate
            logMessage -= LogGreenMessage;
        }
    }
}`}</Code>
          </DetailsCard>

          <DetailsCard>
            <>
              <code>Action</code>, <code>Func</code> і<code>Predicate</code>
            </>
            <>
              <p>
                Замість визначення нового типу делегата, можна використовувати
                уже визначені делегати <em>Action</em>, <em>Func</em> і{' '}
                <em>Predicate</em>.
              </p>

              <ul>
                <li>
                  <p>
                    Дженерік делегат <em>Action &lt;T&gt;</em> призначений для
                    посилання на метод, що повертає <code>void</code>. Класу
                    цього делегата можна передавати до 16 параметрів довільного
                    типу.
                  </p>
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`static void Main(string[] args)
{
    Action<string, int> printString = (str, num) => Console.WriteLine(str + num);

    printString("Printed by Action: ", 19);
    // Printed by Action: 19
}`}</Code>
                </li>
                <li>
                  <p>
                    Делегати <em>Func</em> можуть використовуватися аналогічним
                    чином. Func дозволяє викликати методи, які щось повертають.
                    Йому так само можна передавати до 16 типів параметрів і 1
                    тип, який він повертає.
                  </p>
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`// Accepts 2 \`double\` parameters, returns \`int\`
Func<double,double, int> add = (a, b) => Convert.ToInt32(a + b);

int result = add(4.5, 10.0);

Console.WriteLine(result); // 15`}</Code>
                </li>
                <li>
                  Делегат <em>Predicate</em> використовується для порівняння
                  відповідності деякого об'єкта <em>T</em> певній умові. Він
                  повертає <code>true</code>, якщо об'єкт задовільняє умову, і{' '}
                  <code>false</code>, якщо ні.
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`Predicate<int> isPositive = x => x > 0;

Console.WriteLine(isPositive(10)); // True
Console.WriteLine(isPositive(-10)); // False`}</Code>
                </li>
              </ul>
            </>
          </DetailsCard>

          <DetailsCard>
            <>Events & Delegates Flow</>
            <>
              <img src={delegateEventFlow} alt="delegateEventFlow" />
              <p>
                <strong>Події</strong> дозволяють сигналізують системі про те,
                що відбулося певна дія.
              </p>
              <p>
                Існує така модель: <strong>Publisher-Subscriber</strong>
                <em>(Видавець-Підписник)</em>. <em>Підписник</em> підписується
                на подію, визначає обробник і чекає допоки <em>Видавець</em>{' '}
                виконає цю подію, щоб його викликати.
              </p>
              <p>
                Приклад використання подій та делегатів ви зможете знайти
                завантажив{' '}
                <a
                  href="/assets/zip/dotnet-ecosystem-and-csharp-best-practices.zip"
                  download
                >
                  <strong>цей файл</strong>
                </a>
                .
              </p>
            </>
          </DetailsCard>
        </>
      </DetailsCard>
      <DetailsCard>
        <h5>
          <strong>Collections</strong>
        </h5>
        <>
          <p>
            В C# є <em>масиви</em>, які зберігають в собі{' '}
            <em>набори однотипних об'єктів</em>, але працювати з ними не завжди
            зручно. Так як масив зберігає <em>фіксовану кількість об'єктів</em>,
            в випадках коли ми заздалегідь не знаємо, скільки у нас їх буде,
            набагато зручніше буде застосовувати <em>колекції</em>.
          </p>
          <p>
            При виборі колекцій визначальну роль може зіграти те, що деякі з них
            реалізовують стандартні структури даних, такі як
          </p>

          <ul>
            <li>стек</li>
            <li>чергa</li>
            <li>словник</li>
            <li>хеш-таблиця</li>
          </ul>

          <p>
            ...які можуть стати в нагоді для вирішення різних спеціальних
            завдань. Основою для створення всіх колекцій є реалізація
            інтерфейсів <code>IEnumerator</code> і <code>IEnumerable</code>.
          </p>
          <p>
            Інтерфейс <code>IEnumerator</code> представляє{' '}
            <em>Перераховувач (Перечислитель)</em>, який уможливлює послідовний
            перебір колекції, наприклад в циклі <code>foreach</code>, або
            засобами{' '}
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/">
              LINQ
            </a>
            . А інтерфейс <code>IEnumerable</code> через свій метод{' '}
            <code>GetEnumerator</code> надає Перераховувач всім класам, які
            реалізують даний інтерфейс. Тому інтерфейс <code>IEnumerable</code>{' '}
            є базовим для усіх колекцій.
          </p>
          <p>
            Конкретні методи і способи використання можуть відрізнятися від
            одного класу колекції до іншого, але загальні принципи будуть одні і
            ті ж для всіх класів колекцій.
          </p>

          <DetailsCard>
            <p>Collections Hierarchy</p>

            <img src={collectionsHierarchy} alt="collectionsHierarchy" />
          </DetailsCard>

          <DetailsCard>
            <>ArrayList & List</>
            <>
              <p>
                У наведеному прикладі використовуються дві колекції:{' '}
                <strong>non-generic</strong> — <code>ArrayList</code>, та{' '}
                <strong>generic</strong> — <code>List</code>. Зараз хорошою
                практикою вважається використовувати дженерік версії колекцій
                всюди, де це тільки можливо — через строгу типізацію та
                зручність у використанні. Більшість колекцій підтримують
                додавання елементів.
              </p>
              <Code language={CodeLanguage.CSHARP}>{`class Program
{
    static void Main(string[] args)
    {
        // non-generic collection ArrayList
        ArrayList objectList = new ArrayList() { 0, "someString", 'c', 19.0d };

        // generic collection - List
        List<string> countries = new List<string>() { "Lviv", "Kyiv", "Odessa", "Dnipro" };

        object obj = 12.3;
        objectList.Add(obj);

        // Error - because object is not a string type
        countries.Add(obj);

        objectList.RemoveAt(0); // delete element with index 0 - first element of collection
        foreach (object o in objectList)
        {
          Console.WriteLine(o);
        }
        Console.WriteLine($"Total amount of Collection's elements: {objectList.Count}");
    }
}`}</Code>
              <p>
                Наприклад, в даному випадку додавання проводиться методом{' '}
                <code>Add</code>, але для інших колекцій назва методу може
                відрізнятися. Також більшість колекцій реалізують видалення (в
                даному прикладі проводиться за допомогою методу{' '}
                <code>RemoveAt</code>, що видаляє елемент з колекції за індексом
                елементу). За допомогою властивості <code>Count</code> можна
                подивитися кількість елементів у колекції.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>Stack</>
            <>
              <p>
                <code>Stack&lt;T&gt;</code> представляє колекцію, яка
                використовує алгоритм <strong>LIFO</strong> — last in — first
                out — ("останній прийшов — першим вийшов"). При такій
                організації даних кожен наступний доданий елемент поміщається
                поверх попереднього. Діставання елементів з колекції
                відбувається в зворотному порядку — витягується той елемент,
                який знаходиться вище всіх у стеці.
              </p>
              <img src={stack} alt="stack" />
              <p>
                У класі <code>Stack</code> можна виділити два основні методи,
                які дозволяють керувати елементами — це:
              </p>

              <ul>
                <li>
                  <code>Push</code>: додає елемент в стек на перше місце
                </li>
                <li>
                  <code>Pop</code>: дістає перший елемент з стеку
                </li>
                <li>
                  <code>Peek</code>:* просто повертає перший елемент з стеку без
                  його видалення
                </li>
              </ul>

              <Code
                language={CodeLanguage.CSHARP}
              >{`static void Main(string[] args)
{
    var stackCities = new Stack<string>();
    stackCities.Push("Lviv");
    stackCities.Push("Kyiv");
    stackCities.Push("Odessa");

    var odessa = stackCities.Pop();

    Console.WriteLine("Deleted city: " + odessa)

    foreach(string city in stackCities) {
        Console.WriteLine(city);
    }
    /* Output:
        Deleted city: Odessa
        Lviv
        Kyiv
    */
}`}</Code>

              <Bubble size="small">
                На прикладі можна побачити як ми створюємо екземпляр коленції
                стеку стрічок. Добавляємо 3 міста — "Lviv", "Kyiv", "Odessa" за
                допомогою методу <code>Push</code>. Витягуємо елемент який ми
                додали останнім за допомогою методу
                <code>Pop</code> та виводимо результати на екран.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>Dictionary</>
            <>
              <p>
                <code>Dictionary</code> <em>(словник)</em> зберігає об'єкти, які
                представляють пару ключ-значення. Його дуже зручно
                використовувати для того щоб огранізувати відповідність чогось
                чомусь.
              </p>
              <p>
                Кожен такий об'єкт є екземпляр структури{' '}
                <code>KeyValuePair&lt;TKey, TValue&gt;</code>. Завдяки
                властивостям <code>Key</code> і <code>Value</code>, які є у цієї
                структури, ми можемо отримати ключ і значення елемента в
                словнику.
              </p>

              <Code
                language={CodeLanguage.CSHARP}
              >{`Dictionary<char, City> cities = new Dictionary<char, City>();
cities.Add('l', new City() { Name = "Lviv" });
cities.Add('k', new City() { Name = "Kyiv" });
cities.Add('o', new City() { Name = "Odessa" });

foreach (KeyValuePair<char, City> keyValue in cities)
{
    // keyValue.Value is instance of class City
    Console.WriteLine(keyValue.Key + " - " + keyValue.Value.Name);
}
/*
    l - Lviv
    k - Kyiv
    o - Odessa
*/

foreach (char c in cities.Keys)
{
    Console.WriteLine(c);
}

foreach (City c in cities.Values)
{
    Console.WriteLine(c.Name);
}

// get element by key
City city = cities['o'];

// object modification
cities['k'] = new City() { Name = "Kharkiv" };

// remove by key
cities.Remove('l');`}</Code>
            </>
          </DetailsCard>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Tuples</strong>
        </h5>
        <>
          <p>
            Якщо вам потрібно склеїти два значення, щоб повернути їх з функції
            або помістити два значення в <em>хеш-набір</em>, ви можете
            використовувати типи <code>System.ValueTuple</code>
          </p>

          <DetailsCard>
            Приклад використання кортежу
            <Code language={CodeLanguage.CSHARP}>{`class City
{
    public int code;
    public string name;

    public City(int code, string name)
    {
        this.code = code;
        this.name = name;
    }

    public (int codeNumber, string name) MethodTuple(string namePrefix)
    {
        return (codeNumber: code, name: namePrefix + name);
    }
}

static void Main(string[] args)
{
    City yorkCity = new City(12, "York");

    var tupleObject = yorkCity.MethodTuple("New ");

    Console.WriteLine($"City: {tupleObject.name}, code: {tupleObject.codeNumber}");
    /* Output:
        City: New York, code: 12
    */
}`}</Code>
          </DetailsCard>

          <DetailsCard>
            <>Різні use-cases використання кортежів</>
            <>
              <Code
                language={CodeLanguage.CSHARP}
              >{`// Constructing the tuple instance
var tpl = (1, 2);

// Using tuples with a dictionary
var d = new Dictionary<(int x, int y), (byte a, short b)>();

// Tuples with different names are compatible
d.Add(tpl, (a: 3, b: 4));

// Tuples have value semantic
if (d.TryGetValue((1, 2), out var r))
{
    // Deconstructing the tuple ignoring the first element
    var (_, b) = r;

    // Using named syntax as well as predefined name
    Console.WriteLine($"a: {r.a}, b: {r.Item2}"); // \`a: 3, b: 4\`
}`}</Code>

              <ol className="counted">
                <li>Створення кортежу</li>
                <li>
                  Використання кортежу для типізування
                  <code>Dictionary</code>
                </li>
                <li>
                  Додавання елементів кортежу у <code>Dictionary</code>
                </li>
                <li>Повернення значення словника по ключу</li>
                <li>Деструктуризація елементу кортежу</li>
                <li>Доступ до членів кортежу по імені</li>
              </ol>
            </>
          </DetailsCard>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Exceptions</strong>
        </h5>
        <>
          <p>
            Іноді при виконанні програми виникають помилки, які важко або
            неможливо передбачити (наприклад, при передачі файлу по мережі може
            обірватися підключення і інтернет пропаде). Такі ситуації
            називаються <strong>Exception</strong>-ами. Мова C# надає
            розробникам можливості для обробки таких ситуацій засобами
            конструкції <code>try...catch...finally</code>
          </p>
          <DetailsCard>
            <>
              Приклад використання <code>try...catch...finally</code>
            </>
            <>
              <Code
                language={CodeLanguage.CSHARP}
              >{`static void Main(string[] args)
{
    StreamReader file = new StreamReader(@"D:\test.txt");
    char[] buffer = new char[10];
    try
    {
        file.ReadBlock(buffer, 123, buffer.Length);
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }
    finally
    {
        file?.Close();
    }
}`}</Code>

              <ol className="counted">
                <li>
                  При використанні блоку <code>try...catch...finally</code>
                  спочатку виконуються всі інструкції в блоці
                  <code>try</code>.
                </li>
                <li>
                  Якщо в цьому блоці не виникло <em>Exception</em>-ів, то після
                  нього виконається блок <code>finally</code> і конструкція{' '}
                  <code>try..catch..finally</code> завершить свою роботу.
                </li>
                <li>
                  Якщо ж в блоці <code>try</code> виникає <em>Exception</em>, то
                  звичайний потік виконання зупиняється і CLR починає шукати
                  блок <code>catch</code>, який може обробити цей
                  <em>Exception</em>.
                </li>
                <li>
                  Якщо блок <code>catch</code> знайдений, то він виконується, а
                  після його завершення виконається блок
                  <code>finally</code>.
                </li>
                <li>
                  Якщо потрібний блок <code>catch</code> не знайдений, то
                  програма аварійно завершує своє виконання.
                </li>
              </ol>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>Exceptions</code> Hierarchy
            </>
            <>
              <p>
                У C# всі типи <em>Exception</em>-ів наслідуються від
                батьківського класу <code>Exception</code>, який додатково
                поділяється на дві гілки <code>SystemException</code> і{' '}
                <code>ApplicationException</code>.
              </p>
              <p>
                <code>SystemException</code> — це базовий клас для всіх помилок{' '}
                <em>CLR</em> або програмного коду, таких як{' '}
                <code>DivideByZeroException</code> або{' '}
                <code>NullReferenceException</code> і так далі.
              </p>
              <img
                src={exceptionClassHierarchy}
                alt="exceptionClassHierarchy"
                className={styles.bottomImage}
              />
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>Application Exception</code>
            </>
            <>
              <p>
                <code>ApplicationException</code> використовується для виключень
                пов'язаних із додатком. Такий тип викключень дуже зручно
                використовувати для створення своїх кастомних <em>Exception</em>
                -ів. Для цього треба просто унаслідуватись від класу{' '}
                <code>Exception</code> і додати туда те що ви хочете. Далі в
                цьому класі можна визначати додаткої поля, властивості, методи і
                тд.
              </p>

              <Code
                language={CodeLanguage.CSHARP}
              >{`public class HttpStatusCodeException : Exception
{
    public HttpStatusCode StatusCode { get; set; }
    public string ContentType { get; set; } = @"application/json"; // @"text/plain"

    public HttpStatusCodeException(HttpStatusCode statusCode)
    {
        StatusCode = statusCode;
    }

    public HttpStatusCodeException(HttpStatusCode statusCode, string message) : base(message)
    {
        StatusCode = statusCode;
    }
}`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>Exception</code> properties
            </>
            <>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.data#System_Exception_Data">
                        Data
                      </a>
                    </td>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary">
                        IDictionary
                      </a>
                      , що містить дані в парах ключ-значення.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.helplink#System_Exception_HelpLink">
                        HelpLink
                      </a>
                    </td>
                    <td>
                      Може містити URL (або URN) до файлу справки, яка надає
                      вичерпуючу інформацію про причину викиникення помилки.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.innerexception#System_Exception_InnerException">
                        InnerException
                      </a>
                    </td>
                    <td>
                      Ця властивість може використовуватися для створення та
                      збереження ланцюга помилок під час обробки{' '}
                      <em>Exception</em>-a. Ви можете використовувати його для
                      створення нового виключення, яке містить попередні{' '}
                      <em>Exception</em>-и.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.message#System_Exception_Message">
                        Message
                      </a>
                    </td>
                    <td>Надає детальну інформацію про причину винятку.</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.source#System_Exception_Source">
                        Source
                      </a>
                    </td>
                    <td>
                      Містить назву програми або об'єкту, у якому виникла
                      помилка.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.stacktrace#System_Exception_StackTrace">
                        StackTrace
                      </a>
                    </td>
                    <td>
                      Містить <em>stack trace</em> який можна використати, щоб
                      визначити де виникла помилка. <em>Stack trace</em> включає
                      назву вихідного файлу та номер рядка програми, якщо
                      доступна <em>debug інформація</em>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>throw</code> it away!
            </>
            <>
              <p>
                Після оператора <code>throw</code> вказується об'єкт{' '}
                <code>Exception</code>-a, в конструктор якого ми можемо передати
                повідомлення про помилку. Замість загального типу{' '}
                <em>Exception</em> ми можемо вказати об'єкт будь-якого іншого
                типу <code>Exception</code>.
              </p>
              <Code
                language={CodeLanguage.CSHARP}
              >{`catch (DivideByZeroException e)
{
    // thow new exception
    throw new HttpStatusCodeException(400, "Can't divide by 0");
}`}</Code>
              <p>
                Подібним чином ми можемо генерувати <code>Exception</code>-и в
                будь-якому місці програми. Але існує також і інша форма
                використання оператора <code>throw</code>, коли після цього
                оператора нічого не вказується.
              </p>
              <Code
                language={CodeLanguage.CSHARP}
              >{`catch (DivideByZeroException e)
{
    //TODO: log error
    Console.WriteLine("Can't divide by 0");
    throw;
}`}</Code>
              <p>
                У подібному вигляді оператор throw може використовуватися тільки
                в блоці <code>catch</code>. Різниця між ними у тому, що{' '}
                <code>throw</code> без нічого зберігає початковий{' '}
                <code>stack trace</code>, у той час як <code>throw ех</code>{' '}
                скидує <code>stack trace</code> до методу, у якому зараз
                відбувається обробка <code>Exception</code>-у.
              </p>
            </>
          </DetailsCard>
          <Bubble size="small">
            Приклад обробки виняткових ситуацій ви зможете знайти завантажив{' '}
            <a
              href="/assets/zip/dotnet-ecosystem-and-csharp-best-practices.zip"
              download
            >
              <strong>цей файл</strong>
            </a>
            .
          </Bubble>
        </>
      </DetailsCard>
      <Level
        id="clean-code-principles"
        number="4"
        name="Принципи чистого коду"
        difficulty="Сім разів відмір, один раз відріж."
        objectives="Зрозуміти, як писати такий код, який хочеться читати."
        labels={{
          level: 'Розділ',
          backToTop: 'нагору',
          difficulty: 'Складність:',
          objectives: 'Мета:',
        }}
      />

      <DetailsCard>
        <h5>
          <strong>
            Coding Standards and <code>Naming Conventions</code>
          </strong>
        </h5>
        <>
          <p>
            В перекладі на людську мову — загальноприйняті стандарти написання
            коду та узгоджені правила, як називати змінні, функції і інше. Це —
            граматика і орфографія C#, прийнята більшістю .NET-розробників для
            того, щоб інші девелопери <em>(ви через Х часу)</em> могли легко та
            швидко зрозуміти, що відбувається у вашому коді та використовувати
            його, не плутаючись у всіх можливих способах назвати, скажімо,
            аргумент{' '}
            <em>
              (і такі правила написання є абсолютно у всіх мовах програмування,
              не тільки в С#)
            </em>
            . Довго розповідати про кожне з правил нема сенсу, головне для вас —
            самостійно ознайомитися з{' '}
            <a href="https://www.dofactory.com/reference/csharp-coding-standards">
              списком більшості поширених стандартів C#
            </a>
            .
          </p>

          <Bubble size="small">
            Хочете бути цивілізованим розробником і мати повагу від колег —
            прочитайте кілька абзаців з прикладами правильно оформленого коду і
            дотримуйтеся такого формату, виконуючи таски малі чи великі.
          </Bubble>
        </>
      </DetailsCard>

      <DetailsCard>
        <>
          <h5 className={styles.flex}>
            <span>DRY</span>
            <small className={styles.tooltip}>
              {Array.from(Array(4).keys()).map((_, index) => (
                <span key={index} className={styles.tooltipCrossed}>
                  Don't Repeat
                </span>
              ))}
              Don't Repeat Yourself
            </small>
          </h5>
        </>
        <>
          <p>
            <strong>Не повторюйся</strong> при написанні коду = не прописуй
            кілька разів те, що можна закодити один раз, і викликати,
            звертаючись до конкретного модуля. Приклад — веб-додаток, що містить
            кілька однакових за оформленням блоків, і кожен з них має власний{' '}
            <em>(ідентичний іншим!)</em> опис стилів. Яка ймовірність, що коли
            потрібно буде внести однакову зміну в усіх цих блоках{' '}
            <em>
              (вручну, адже ми кілька разів повторюємо той самий набір стилів)
            </em>
            , розробник пропустить один чи кілька з них? Коли цей принцип
            порушено і імплементація методу чи навіть класу дублюється без
            справжньої потреби, а написано кілька сотень тисяч рядків коду (як
            на будь-якому реальному проекті), то щоб відрефакторити, змінити
            бізнес логіку чи внести прості зміни до інтерфейсу, доводиться
            довгенько шукати по імені методу нещасний кусок коду, часто для
            того, щоб поміняти у цьому лише 1 цифру.
          </p>
          <Bubble size="small">
            Кароч, так не робиться 😐. Щоб досягнути <strong>DRY</strong> у
            вашому коді — діліть ваш код на маленькі кусочки, бачите що частина
            логіки повторюється — одразу виносьте, компонуйте функції. Чому
            потрібен DRY? Чим менше коду, тим краще. Його легше підтримувати,
            менше часу йде на те, щоб у ньому розібратися і також зменшується
            кількість багів.
          </Bubble>
        </>
      </DetailsCard>

      <DetailsCard>
        <>
          <h5 className={styles.flex}>
            <span>
              <strong>
                KISS<sup>💋</sup>
              </strong>
            </span>
            <small className={styles.tooltip}>Keep It Simple Stupid</small>
          </h5>
        </>
        <>
          <p>
            Цей принцип говорить сам за себе ― простий і лаконічний код легше
            зрозуміти іншим розробникам і тобі, коли ти повернешся до нього за
            якийсь час. Він формулюється так — "кожен метод повинен вирішувати
            лише одну маленьку проблему, а не мати багато різних засобів
            вжитку". Якщо у методі багато умов, то розбийте їх на менші методи.
            Це буде легше читати, підтримувати і це також допоможе знайти
            помилки набагато швидше. Щоб продемонструвати <strong>KISS</strong>,
            найчастіше приводять приклад із визначенням дня тижня:
          </p>

          <div className={styles.gridTwo}>
            <div>
              <h6>
                <strong>Simple</strong>
              </h6>

              <Code language={CodeLanguage.CSHARP}>{`string weekday(int day) {
  switch (day) {
  case 1:
    return "Monday";
  case 2:
    return "Tuesday";
  case 3:
    return "Wednesday";
  case 4:
    return "Thursday";
  case 5:
    return "Friday";
  case 6:
    return "Saturday";
  case 7:
    return "Sunday";
  default:
    throw new Exception("Day must be in range 1 to 7");
  }
}`}</Code>
            </div>
            <div>
              <h6>
                <strong>Stupid</strong>
              </h6>

              <Code language={CodeLanguage.CSHARP}>{`string weekday(int day) {
  if ((day < 1) || (day > 7)) {
    throw new Exception("Day must be in range 1 to 7");
  }

  string[] days = {
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  };

  return days[day - 1];
}



`}</Code>
            </div>
          </div>
          <Bubble size="small">
            На слайді показано два методи для вирішення цієї задачі:
            <ol className="counted">
              <li>
                Перше рішення просте як двері ― простий <code>switch</code> з
                дефолтним <em>case</em>-ом у випадку якщо день не знайдено.
              </li>
              <li>
                Другий метод теж робочий, але для того щоб його зрозуміти,
                потрібно довший час вчитуватися.
              </li>
            </ol>
            Такий код існує повсюди, але він дійсно незручний і виглядає
            непрофесійно, 99% програмістів вибрали б працювати з чимось схожим
            на перший варіант.
          </Bubble>
          <br />
          <br />
          <Bubble size="small">
            Щоб досягнути <strong>KISS</strong> ― старайтесь писати максимально
            простий код. Якщо бачите важку (нечитабельну) ділянку коду,
            пошукайте більш лаконічне вирішення тої ж самої задачі, і,
            відрефакторивши написане, ви здивуєтеся, що кусок на 200 рядків
            насправді не такий вже й необхідний!
          </Bubble>
        </>
      </DetailsCard>

      <DetailsCard>
        <>
          <h5 className={styles.flex}>
            <span>SOLID</span>
            <small className={styles.tooltip}>
              Single responsibility, Open–closed, Liskov substitution, Interface
              segregation, Dependency inversion
            </small>
          </h5>
        </>
        <>
          <p>
            SOLID — це{' '}
            <strong>5 принципів об'єктно-орієнтованого програмування</strong>,
            які описують архітектуру програмного забезпечення:
          </p>
          <p>
            А якщо простіше, то це правила, дотримуючись яких ви будете писати
            легкий для розумііння, радегування чи повторного використання код.
          </p>
          <DetailsCard>
            <>
              <strong>Single responsibility</strong>
            </>
            <>
              <p>
                Принцип єдиної відповідальності. Він означає, що{' '}
                <strong>
                  кожен клас чи структура повинні мати лише одне завдання або
                  вирішувати лише одну таску
                </strong>
                . Всі члени класу пишуться для виконання даної для нього задачі,
                і в ньому не знаходиться жодна строчка коду, яка не відноситься
                до вказаної для цього блоку задачі. Якщо ми дотримуємося цього
                принципу, то ми визначаємо класи за їх задачами ще на етапі
                проектування програми.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Не SOLID">
                      😢
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`class Task {
  public string Title { get; set; }

  public string Description { get; set; }

  // Adds task in Database
  public bool Add(Task tast) {
    // Internal realization (Insert into DB)
  }

  // Estimate Task's duration
  public void EstimateTaskDuration(Task tast) {
    // Calculation Task's difficulty, estimating
  }
}


`}</Code>
                </div>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="SOLID">
                      😎
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`class Task {
  public string Title { get; set; }

  public string Description { get; set; }

  // Adds task in Database
  public bool Add(Task tast) {
    // Internal realization (Insert into DB)
  }
}

class TaskEstimator {
  // Estimate Task's duration
  public void EstimateTaskDuration(Task tast) {
    // Calculation Task's difficulty, estimating
  }
}`}</Code>
                </div>
              </div>
              <Bubble size="small">
                Я навів в приклад клас <code>Task</code> — він зберігає задачу в
                нашу базу даних і обчислює час, необхідний для вирішення задачі.
                <br />
                Робимо висновок, що він не відповідає принципу{' '}
                <strong>Single Responsibility Principle</strong>. Чому ми не
                хочемо, щоб він виконував і інші корисні функції, наприклад,
                визначав необхідний для виконання завдання час? Тому що якщо
                через деякий час у замовника поміняються параметри виконання
                задач{' '}
                <em>
                  (наприклад, через реліз або зміни в чисельності команди
                  програмістів)
                </em>
                , нам доведеться переписувати клас <code>Task</code> відповідно
                до змін у вхідних даних, і тестити чи не зламався при тому інший
                функціонал, який <code>Task</code> виконує. Згідно з{' '}
                <strong>Single Responsibility Principle</strong> ми маємо
                створити окремий клас для розрахунку часу на виконання завдань,
                який вже буде керуватися бізнес-логікою та іншими вхідними
                даними.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Open–closed</strong>
            </>
            <>
              <p>
                Принцип відкритості/закритості. Наш клас повинен бути{' '}
                <strong>
                  відкритим для масштабування, але закритим для модифікацій
                </strong>
                . Наш модуль повинен бути розроблений так, щоб дописувався він
                тільки при створенні нових вимог ― але тих, що стосуються
                початкової задачі. «Закритий для модифікацій» означає, що клас
                вже повністю готовий і життєздатний, його задачі і призначення
                не міняються, отже ми не переписуємо його істотно, окрім як в
                випадку виправлення багів. У C# це досягаться через{' '}
                <strong>принцип успадкування</strong>.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Не SOLID">
                      👎
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`class Mockup {
  public string ImageType { get; set; }

  public Image ConvertImage(Image img) {
    if (ImageType == "tiff") {
      // Convert Image to the tiff format
    }

    if (TypeReport == "cdr") {
      // Convert Image to the cdr format
    }
  }
}




`}</Code>
                </div>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="SOLID">
                      👍
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`abstract class Mockup {
  public virtual void ConvertImage(Image img) {
    // Base realization that common for each format
  }
}

class MockupTiff: Mockup {
  public override Image ConvertImage(Image img) {
    // Convert Image to the tiff format
  }
}

class MockupCdr: Mockup {
  public override Image ConvertImage(Image img) {
    // Convert Image to the cdr format
  }
}`}</Code>
                </div>
              </div>
              <Bubble size="small">
                <p>
                  Розглянемо приклад з мокапом ― прототипом сторінки. Проблема
                  даного класу в тому, що коли замовник захоче подивитись на
                  створений дизайнерами мокап, але не зможе відкрити зображення
                  формату <em>tiff</em> чи <em>cdr</em>, розробнику потрібно
                  буде вносити новий формат картинки, наприклад <em>png</em>.
                  Через це ми будем змушені додати нову умову <code>if</code>,
                  що суперечить <strong>Open Closed Principle</strong>.
                </p>
                <p>
                  На другому прикладі показано як це можна вирішити ― є базовий
                  абстрактний клас <code>Mockup</code>, який частково реалізовує
                  конвертацію картинки, а дочірні класи реалізують конвертацію
                  картинки в необхідний формат. І якщо ми захочемо добавити ще
                  один формат, нам просто треба буде створити ще один клас, який
                  буде наслідувати від <code>Mockup</code> і реалізовувати
                  потрібний нам метод конвертації.
                </p>
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Liskov substitution</strong>
            </>
            <>
              <p>
                За принципом пiдстановки Лiсков ми повинні мати{' '}
                <strong>
                  можливість використовувати будь-який дочірній клас замість
                  батьківського
                </strong>{' '}
                таким же чином, не вносячи зміни. Дочірній клас не може
                порушувати визначення типу приведені у батькіському класі та
                суперечити його поведінці власним функціоналом.
              </p>
              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Не SOLID">
                      🤦‍♂️
                    </span>
                  </h4>
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`abstract class Developer {
  public virtual string CodeWebApp() {
    return "Coding Front-End Web App";
  }
  public virtual string CodeServer() {
    return "Coding Back-End Server";
  }
}
class JavaScriptDeveloper: Developer {
  public override string CodeWebApp() {
    return "Coding Front-End with Angular";
  }
  public override string CodeServer() {
    return "Coding Back-End with Node.js";
  }
}
class CSharpDeveloper: Developer {
  // C# Developer can't  create Front-End App
  public override string CodeWebApp() {
    throw new NotImplementedException();
  }
  public override string CodeServer() {
    return "Coding Back-End with ASP.Net";
  }
}`}</Code>
                </div>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="SOLID">
                      💁‍♂️
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`interface IFrontend {
  string CodeWebApp();
}

interface IBackend {
  string CodeServer();
}

class JavaScriptDeveloper: IFrontend,
IBackend {
  public string CodeWebApp() {
    return "Coding Front-End with Angular";
  }
  public string CodeServer() {
    return "Coding Back-End with Node.js";
  }
}

class CSharpDeveloper: IBackend {
  public string CodeServer() {
    return "Coding Back-End with ASP.Net";
  }
}


`}</Code>
                </div>
              </div>
              <Bubble size="small">
                От як це можна проілюструвати: <code>Developer</code> є
                батьківським класом для <code>JavaScriptDeveloper</code> i{' '}
                <code>CSharpDeveloper</code>. Наш клас <code>Developer</code>{' '}
                може створювати бекенд і фронтенд додатки. Здавалося б усе
                добре. <code>JavaScriptDeveloper</code> успішно реалізовує 2
                методи. А от з <code>CSharpDeveloper</code> не все так просто,
                він може написати сервер на <em>ASP.NET</em>-і, але зовсім не
                може в фронтенд. І якщо ми спробуємо все ж таки отримати від
                нього фронтенд, то зловимо помилку ― exception. По-хорошому нам
                потрібно розділити функціонал <code>Developer</code> на 2
                частини: <code>IFrontend</code> та <code>IBackend</code>, і
                реалізувати їх відповідно до призначення похідних класів:{' '}
                <code>JavaScriptDeveloper</code> у нас реалізовує і{' '}
                <code>IFrontend</code> і <code>IBackend</code>, а{' '}
                <code>CSharpDeveloper</code> тільки <code>IBackend</code>.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Interface segregation</strong>
            </>
            <>
              <p>
                Принцип розділення інтерфейсів говорить, що не треба пакувати
                разом всі інтерфейси підряд, треба їх{' '}
                <strong>розділяти за призначеннями</strong>, щоб користувачі
                могли вибірково імплементувати лише ті, які використовують,{' '}
                <em>а не всі підряд наявні в програмі</em>.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Не SOLID">
                      💩
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`interface IDeveloper {
  string CodeDesktop();
  string CodeServer();
}



`}</Code>
                </div>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="SOLID">
                      🎉
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`interface IDesktop {
  string CodeDesktop();
}

interface IBackend {
  string CodeServer();
}`}</Code>
                </div>
              </div>
              <Bubble size="small">
                <p>
                  Давайте припустимо, що у нас є Інтерфейс{' '}
                  <code>IDeveloper</code>, який тепер вміє створювати сервер і
                  десктопний додаток. Як і до того, у нас є{' '}
                  <code>JavaScriptDeveloper</code> та{' '}
                  <code>CSharpDeveloper</code>, які можуть використати цей
                  функціонал за призначенням. Для <em>JavaScript</em> додаток
                  писався би під Electron, а на C# це був би WPF додаток. Все
                  класно, всі задоволені, але ні, бо наш босс несподівано каже,
                  що додатки на Electron в нього лагають і взагалі дорого
                  платити цим JavaScript-розробникам. Ми урізаєм десктоп-проекти
                  на JavaScript, пишем тепер тільки на WPF. І таким чином ми
                  ломаємо принцип <strong>Interface Segregation</strong>, бо наш
                  клас не може не виконувати свій функціонал, і виходить що
                  JavaScript розробники все ще пишуть десктоп-проекти.
                </p>
                <p>
                  Рішенням цієї проблеми буде знову ж таки розділення інтерфейсу
                  на кілька: <code>IDesktop</code> та <code>IBackend</code>. Це
                  нагадує попередній приклад, але тут ми вирішуєм іншу проблему
                  ― не даємо класу робити більше ніж потрібно.
                </p>
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Dependency inversion</strong>
            </>
            <>
              <p>
                І тепер останній і, мабуть, найважчий для розуміння принцип ―
                інверсія залежностей.
              </p>

              <ol className="inverted">
                <li>
                  Класи високого рівня не повинні залежати від класів низького
                  рівня, при цьому обидва мають залежати від абстракцій.
                </li>
                <li>
                  Абстракції не повинні залежати від деталей, але деталі мають
                  залежати від абстракцій.
                </li>
              </ol>
              <p>
                Що це значить? А це значить, що класи високого рівня реалізують
                бізнес-правила або логіку в системі. Низькорівневі класи
                займаються більш детальними операціями, як от роботою з базою
                даних, передачею повідомлень в операційну систему ― і так далі.
                Щоб досягти інверсії залежностей ми повинні тримати ці
                високорівневі і низькорівневі класи настільки слабозв'язаними
                наскільки можливо. І якраз для цього ми пишемо їх залежними від
                абстракцій, а не один від одного.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Не SOLID">
                      😭
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`class Email {
  public void Send() {
    // Code to send email-letter
  }
}

class Notification {
  private Email email;
  public Notification() {
    email = new Email();
  }

  public void EmailDistribution() {
    email.Send();
  }
}



















`}</Code>
                </div>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="SOLID">
                      🤩
                    </span>
                  </h4>
                  <Code language={CodeLanguage.CSHARP}>{`interface IMessenger {
  void Send();
}

class Email: IMessenger {
  public void Send() {
    /* Code to send email-letter */
  }
}

class SMS: IMessenger {
  public void Send() {
    /* Code to send SMS */
  }
}

class Notification {
  public IMessenger Messenger { get; set; }

  public Notification(IMessenger mess) {
    Messenger = mess;
  }

  public void Notify() {
    Messenger.Send();
  }
}

static void Main(string[] args) {
  var notification = new Notification(new Email());
  notification.Notify(); // Sent email
  notification.Messenger = new SMS(); // Change the provider
  notification.Notify(); // Sent SMS
}`}</Code>
                </div>
              </div>
              <Bubble size="small">
                <p>
                  Давайте розглянемо цей принцип на прикладі розсилки
                  повідомлень. На першому зразку коду клас{' '}
                  <code>Notification</code> повністю залежить від класу{' '}
                  <code>Email</code>, тому що він відправляє тільки один тип
                  повідомлень. Що якщо ми захочемо відправляти повідомлення
                  якимсь іншим способом? Тоді нам треба буде копатися у всій
                  системі повідомлень. Це є ознакою того що система є занадто
                  тісно зв'язаною.
                </p>
                <p>
                  Щоб зробити її слабо зв'язаною в цьому випадку нам потрібно
                  абстрагуватися від провайдера відправки повідомлень{' '}
                  <code>Email</code>. Для цього ми створюємо інтерфейс{' '}
                  <code>IMessenger</code> з методом <code>Send</code> і
                  реалізуємо його у двох класах ― <code>Email</code> і{' '}
                  <code>SMS</code>. Клас <code>Notification</code> ми складаємо
                  так, щоб відв'язатись від конкретної реалізації розсилки
                  повідомлень. В цьому випадку ми можемо використати принцип{' '}
                  <strong>Dependency Injection</strong>, прокинувши об'єкт{' '}
                  <code>Messenger</code> через конструктор. І в результаті ми
                  відправлятимемо повідомлення того класу, з яким зараз
                  працюємо. Якщо ми створюємо <code>Notification</code> з{' '}
                  <code>Email</code> Messenger-ом, відправляєтья електронний
                  лист. Далі ми захотіли змінити провайдера і присвоїли
                  властивості <code>Messenger</code> класу <code>SMS</code>,
                  тому наступний виклик методу <code>Notify</code> уже надішле{' '}
                  <em>SMS</em>-ку.
                </p>
              </Bubble>
            </>
          </DetailsCard>
          <p>
            Кожен принцип <strong>SOLID</strong> пропонує нам шлях до написання
            логічного, надійного та зрозумілого коду, а мова С#, при дотриманні
            цих принципипів, дає змогу писати великі програми та легко
            розширювати їх.
          </p>
        </>
      </DetailsCard>

      <ThatsAllFolks />

      <Bubble>
        Я можу довго говорити про C# та .NET, але в цій лекції поділився
        основним, на мою думку, для вас на даний момент. На тому все, дякую за
        увагу, ставте оцінку лекції в ваших особистих кабінетах, залишайте
        відгук, задавайте питання, робіть домашку і до зустрічі на код-рев'ю! 👋
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };
