import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layout/layout';
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
  SEO,
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
import { CodeLanguage } from '~/common/enums/enums';
import * as styles from '../assets/styles/dotnet-ecosystem-and-csharp-best-practices.module.scss';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>.NET ecosystem and C# best practices</h1>
      <Language currentLanguage="en" languages={slugPayload} />
      <VideoWrapper duration="35 min">
        <iframe
          src="https://www.youtube.com/embed/qESDPe_Gj5Y"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <IntroBlueBubble {...introPayload.en} />

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
        name="Overview of the .NET Platform"
        difficulty={
          <span>
            <a href="https://www.urbandictionary.com/define.php?term =easy%20peasy%20lemon%20squeezy">
              Easy peasy lemon squeezy
            </a>
            .
          </span>
        }
        objectives={
          <span>
            Read/hear about the .NET platform in general{' '}
            <em>(Won't take long)</em>.
          </span>
        }
        labels={{
          level: 'Section',
          backToTop: 'Top',
          difficulty: 'Difficulty:',
          objectives: 'Objective:',
        }}
      />

      <p>
        Microsoft is on top right now, have you heard about OpenAI company and
        their products like ChatGPT or DALL-E-2? Well it's 49% Microsoft 😎.
        .Net ecosystem is also supported by that company, just imagine what
        would be the best ecosystem in the future.
      </p>

      <DetailsCard>
        <>
          <h5>
            <strong>.NET</strong> Platform right now
          </h5>
        </>
        <>
          <img src={dotnetPlatform} alt="dotnet-platform" />

          <p>Ways to create .NET applications:</p>
          <ol className="counted">
            <li>
              <strong>.NET Framework</strong> - development of Windows desktop
              applications on <strong>Windows Forms</strong>,{' '}
              <strong>WPF</strong>, web servers on <strong>ASP.NET</strong> and{' '}
              <strong>WCF</strong>
            </li>
            <li>
              <strong>.NET Core</strong> - Develop cross-platform web apps with{' '}
              <strong>ASP.NET Core</strong>, build hybrid apps with{' '}
              <strong>Universal Windows Platform</strong> which allows you to
              run a program written on this technology on a Windows machine,
              Xbox, Hololens
            </li>
            <li>
              <strong>Xamarin</strong> is a platform for building mobile apps
              for <strong>iOS</strong> and <strong>Android</strong> using C#,
              XML and XAML
            </li>
          </ol>
          <p>
            Code written for a specific framework such as WPF, ASP.NET Core, or
            Android cannot be reused on another platform because it is tailored
            to work with the so-called <em>platform-specific API</em>, which is
            different everyone has. So that you can reuse the code of business
            logic, helper methods, models, classes, etc.{' '}
            <strong>.NET Standard</strong> was created. It provides a set of
            available APIs that work in the same way in all desktop programs,
            web servers, mobile applications, games and cloud services,
            regardless of the operating system and platform.
          </p>
        </>
      </DetailsCard>
      <DetailsCard>
        <h5>
          <strong>.NET 6</strong> platform
        </h5>
        <>
          <img
            src={dotnet6Platform}
            alt="dotnet5-platform"
            className={styles.topImage}
          />
          <p>
            Since November 2021, <strong>.NET 6</strong> was released. Which
            became a serious improvement of the development system as a whole.
            The main innovation was the provision of support for{' '}
            <strong>Linux</strong>, <strong>macOS</strong>, <strong>iOS</strong>
            , <strong>Android</strong>, <strong>tvOS</strong>,{' '}
            <strong>watchOS</strong> and <strong>WebAssembly</strong>. As a
            result, it became possible to create applications for different
            platforms on a common code base with the same build process,
            regardless of the type of application. So now you can develop with
            the help of <strong>Visual Studio</strong>,{' '}
            <strong>Visual Studio for Mac</strong>,{' '}
            <strong>Visual Studio Code</strong> - or on any other IDE with help
            of <strong>dotnet CLI</strong>
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
            Each programmer sooner or later has to implement functionality that
            someone has already created or even published in part or in full
            (usually in the form of an <i>DLL library</i>). Developers refer to
            such modules as "packages", which contain compiled code, additional
            asset files, and a manifest that explains the purpose and use of the
            package. Most programming languages have their own platforms for
            sharing such useful modules. In .NET, this is the{' '}
            <strong>NuGet</strong> supported by Microsoft. Developers who have
            created a cool tool or, for example, a library for working with the
            file system, can publish their work as a{' '}
            <strong>NuGet package</strong> in the form of an <em>zip file</em>{' '}
            with a <strong> extension. nupkg</strong>. You can search and
            download modules that will speed up the development of your
            application from the central <strong>NuGet Gallery</strong>{' '}
            repository - it already has about 250,000 unique packages and you
            might find something useful there.
          </p>
        </>
      </DetailsCard>

      <Level
        id="dotnet-under-the-hood"
        number="2"
        name=".NET under the hood"
        difficulty={<span className={styles.orangeText}>Hard as hell 🔥</span>}
        objectives="Understand the SDK."
        labels={{
          level: 'Section',
          backToTop: 'Top',
          difficulty: 'Difficulty:',
          objectives: 'Objective:',
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
          <p>
            The most common programming languages in the .NET world today are{' '}
            <strong>C#</strong>, <strong>F#</strong>, and{' '}
            <strong>Visual Basic</strong>. Each has its own compiler that
            converts code written in that language into{' '}
            <strong>Intermediate Language Code (IL)</strong>. The latter is a
            set of instructions for the .NET virtual machine -{' '}
            <strong>CLR (Common Language Runtime)</strong>.
          </p>
          <p>Basic steps in running a .NET program:</p>
          <ul>
            <li>
              <DetailsCard isReversed>
                <>
                  First, the compiler will turn the written code from C# into
                  IL:
                </>
                <>
                  <p>Plain C# code</p>

                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`public void SumTwoNumbers() {
  int firstNumber = 10;
  var secondNumber = 200;

  Console.WriteLine(firstNumber + secondNumber);
}`}</Code>
                  <p>C# code compiled to IL</p>
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
              And when it comes time to execute a piece of code in a program,
              the CLR will use the <strong>JIT (Just in Time)</strong> compiler
              to turn the IL code into machine code.
            </li>
          </ul>
          <p>
            The result of building a .NET program is a file with the extension{' '}
            <strong>.exe</strong> (Executable) or <strong>.dll</strong> (Dynamic
            Link Library).
          </p>
          <Bubble size="small">
            <p>
              It is important to note that when converting IL to native code,
              only the part of the code that should be executed at the current
              time will be converted.
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
            At the highest level, there are 2 data types in C# -{' '}
            <strong>value types</strong> and <strong>reference types</strong>.
            It is important to understand the differences between them:
          </p>
          <div className={styles.gridTwo}>
            <div>
              <b>Significant types:</b>
              <ul>
                <li>Integer types</li>
                <li>Floating point types</li>
                <li>decimal</li>
                <li>bool</li>
                <li>enums</li>
                <li>structs</li>
              </ul>
            </div>
            <div>
              <b>Reference types:</b>
              <ul>
                <li>type object</li>
                <li>string</li>
                <li>classes</li>
                <li>interfaces</li>
                <li>delegates</li>
              </ul>
            </div>
          </div>
          <p>
            Value types are stored on the stack, reference types are stored on
            the heap. <strong>Value types</strong> are passed by value, i.e.
            copied, <strong>reference types</strong> are passed by reference.
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
            In <strong>.NET</strong>, memory is divided into two types:{' '}
            <strong>stack</strong> and <strong>heap</strong>.
            <strong> Stack</strong> is a data structure that grows from bottom
            to top: each new element is placed on top of the previous one. The
            stack stores <em>value types</em> and{' '}
            <em>refs to reference types</em>, which in turn are stored on the
            heap.
          </p>
          <p>
            <strong>A heap</strong> can be thought of as an unordered collection
            of heterogeneous objects. When an object of <em>reference type</em>{' '}
            is created, a reference to the address of this object in the{' '}
            <strong>heap</strong> is added to the stack. When an{' '}
            <em>reference type object</em> is no longer used, the reference is
            removed from the stack and the memory is freed.
          </p>
          <p>
            In .NET, memory cleanup happens automatically. The{' '}
            <strong>Garbage Collector</strong> is responsible for this (in our
            opinion, the garbage collector). When it sees that an object on the
            heap is no longer referenced, it removes that object and cleans up
            memory.
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
            An important point is how the <em>value</em> and{' '}
            <em>reference type</em> variables are passed to the method.
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
            The boxing operation - <strong>boxing</strong> - is allocating
            memory on the heap for an object of a value type - value type, and
            assigning a reference to this memory area to a variable on the
            stack. Unboxing - <strong>unboxing</strong>, on the contrary,
            allocates memory on the stack for an object obtained from the heap
            by reference.
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
        name="Most Important C# Topics"
        difficulty="Not bad."
        objectives="Understand the SDK."
        labels={{
          level: 'Section',
          backToTop: 'Top',
          difficulty: 'Difficulty:',
          objectives: 'Objective:',
        }}
      />

      <DetailsCard>
        <h5>
          <strong>Class vs Struct</strong>
        </h5>
        <>
          <p>
            <strong>Structures</strong> are very similar in appearance to{' '}
            <strong>Classes</strong>, but there is a fundamental difference that
            was mentioned earlier. <u>Class</u> is{' '}
            <strong>reference type</strong> and is passed by reference, while{' '}
            <u>structure</u> is <strong>value type</strong> and is passed by
            value — that is, copied.
          </p>
          <p>
            <em>Structures</em> are best used for small classes, small data
            structures, and lightweight objects. <em>Classes</em> can be used in
            all cases where it is inconvenient for you to use a structure. They
            are great for being part of an entity hierarchy, having internal
            state, and containing a lot of business logic.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Static members</strong>
        </h5>
        <>
          <p>
            Classes and structures can have <em>static fields</em>,{' '}
            <em>methods</em> and <em>properties</em>. If a member is static,
            then it refers to the entire class or structure and does not need to
            be instantiated to refer to.
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
            The example shows that <em>static field</em> is common to all
            objects of the class and can be used in <em>non-static methods</em>.
            At the same time, in <em>static methods</em> we do not have access
            to <em>non-static members</em> of the class.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Params</strong>
        </h5>
        <>
          <p>
            Using the keyword <code>params</code> we can "say" that our method
            takes an indefinite number of parameters - it can be zero or more,
            any number.
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
            When a method has a variable number of parameters, we pass arguments
            to it simply by listing them separated by commas, as shown in the
            example. It is worth noting that the <code>params</code> argument
            must be specified last, after the list of all strictly defined
            method arguments.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Interface vs Abstract Class</strong>
        </h5>
        <>
          <p>
            In C#, <em>abstraction</em> is used to hide implementation details.
            This means that we are focusing on what an object can do rather than
            how it does it. This is often used when writing large and complex
            programs. The main tools for this are <em>abstract classes</em> and{' '}
            <em>interfaces</em>.
          </p>
          <p>
            In an <em>abstract class</em>, we can{' '}
            <strong>
              create functionality that is implemented in a class inherited from
              it.
            </strong>
            . For its part, an <em>interface</em> allows{' '}
            <strong>
              to define functionality or functions, but cannot implement them.
            </strong>
            .
          </p>
          <p>
            A class implements an interface and must implement these methods.
            Let's look at a few key differences between them:
          </p>

          <ol className="counted">
            <li>
              An <em>interface</em> cannot have member access modifiers -
              everything in an <em>interface</em> is public by default. For an
              abstract class, everything remains the same as for a regular
              class.
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
              In an <em>interface</em>, we can only describe the signature of a
              method without implementing it. And in the <em>abstract class</em>{' '}
              there can be both abstract methods and properties, and
              non-abstract ones - with full or partial implementation.
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
              <p>
                We cannot declare a constructor in the body of an{' '}
                <em>interface</em> with or without an access modifier. In an{' '}
                <em>abstract class</em>, we can declare constructors in the same
                way as in regular classes. It is mainly used to call in the{' '}
                <em>derived class</em> constructor so as not to duplicate the
                field or property initialization code of the{' '}
                <em>abstract class</em>.
              </p>

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
              <p>
                We cannot explicitly instantiate an <em>interface</em> or{' '}
                <em>abstract class</em> by calling the constructor. Although let
                me remind you that <em>abstract class</em> can have it.
              </p>
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
              <p>
                An <em>abstract class</em> can have fields and properties, an{' '}
                <em>interface</em> can only have properties.
              </p>
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
            The <strong>Interface</strong> we use to describe the{' '}
            <strong>API</strong> for multiple classes that are likely to
            implement more than one interface. Remember that interface members
            cannot be static. <em>C#</em>, unlike <em>C++</em>, does not support
            multiple inheritance, so we use interfaces to implement it.
          </p>
          <p>
            <strong>Abstract class</strong> is used if we want to include it in
            the inheritance hierarchy and create functionality with a full or
            partial implementation that the derived class can implement or
            override. <em>Abstract class</em> allows you to save the state of
            the class as a whole, and not just its individual object.
          </p>
          <p>
            <em>Interface</em> is mainly used when we just want to describe the{' '}
            <strong>API</strong> usage of the classes that will implement this
            interface - set the behavior.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Інтерфейс IDisposable</strong>
        </h5>
        <>
          <p>
            <code>IDisposable</code> declares a single <code>Dispose</code>{' '}
            method, in which the implementation of the interface in the class
            should release unmanaged resources such as database connections,
            file descriptors, network connections, and volumes. similar.
            Unmanaged resources should be freed as soon as possible, before the
            object is removed from memory when the <em>Garbage Collector</em>{' '}
            gets to it. For example, our class interacts with the file system -
            opens a file, reads something from it, writes. And it's better to
            finish working with this file as soon as possible so that other
            programs or threads can use it. And another thing, we ourselves need
            to explicitly call the <code>Dispose</code> method, because the{' '}
            <em>Garbage Collector</em> knows nothing about it. This is best done
            in a <code>try...finally</code> block so that even if an error
            occurs, we can free the resources and clean up the memory properly.
          </p>

          <DetailsCard isReversed>
            <p>IDisposable implementation example</p>

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
            <em>Extension methods</em> allow you to "add" methods to existing
            types without creating a new derived type, recompiling, or modifying
            the original type. The <em>Extension method</em> is a special{' '}
            <em>static method</em> that must be a member of a static class.
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
            The example shows the <em>Extension method</em> for the{' '}
            <code>String</code> type. The <em>Static class</em> can have an
            arbitrary name, while the name of the method must be different from
            the existing methods in the class we are extending, or have a
            different signature. In the future, we can use the method we
            declared in the same way as ordinary methods of the class we are
            extending.
          </p>
        </>
      </DetailsCard>

      <DetailsCard>
        <h5>
          <strong>Generics</strong>
        </h5>
        <>
          <p>
            <strong>Generics</strong> appeared in <strong>C# 2.0</strong>. They
            brought the concept of <em>typed parameters</em> to{' '}
            <strong>.NET</strong> - this allows you to design classes and
            methods that determine the type of class or method members only at
            initialization.
          </p>
          <p>
            For example, using a generic type parameter <code>T</code>, we can
            write a single class that will be used by client code without the
            risk of performing <em>boxing</em> operations (which are heavy
            operations in their own right). , and abuse them is not good).
          </p>

          <DetailsCard>
            <>
              An example of declaring a <code>Generic</code> class
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
                As you can see from the code above, <code>MyGenericClass</code>{' '}
                is defined with <code>&lt;T&gt;</code>. <code>&lt;T&gt;</code>{' '}
                indicates that <code>MyGenericClass</code> is a generic, and the{' '}
                <code>T</code> type will be defined later. You can use any
                letter or word instead of <code>T</code>, it doesn't matter.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              An example of creating an instance of the <code>Generic</code>{' '}
              class
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
                The compiler now infers the type of class members based on the
                type passed in by the programmer when the class was created. For
                example, the following code uses the data type <code>int</code>.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              Restrictions in <code>Generic</code>
            </>
            <>
              <p>
                C# has <em>Constraint</em>s to restrict the types that can be
                used in a generic class. For example, if through{' '}
                <em>Constraint</em> we indicate that the type <code>T</code> can
                only be <em>reference type</em>, that is, classes, then we will
                not be able to use <em>value type</em> to instantiate the
                generic class. Accordingly, after that we cannot use structural
                types such as <code>int</code> - this will cause a compilation
                error.
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
              All <code>Generic</code> restrictions
            </>
            <>
              <p>
                Here are all possible <em>Constraint</em>-s that can be used to
                constrain types for use in generic classes:
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
            Obviously <em>structural data type</em> we cannot assign{' '}
            <code>null</code> values. To do this, we need to declare a variable
            with the <code>?</code> modifier. This modifier is an <em>alias</em>{' '}
            of the <code>Nullable&lt;T&gt;</code> structure
          </p>
          <Code language={CodeLanguage.CSHARP}>{`int? f = null;
Nullable<int> g = null;`}</Code>

          <p>
            Signature <code>Nullable&lt;T&gt;</code>:
          </p>
          <Code language={CodeLanguage.CSHARP}>
            {'public struct Nullable<T> where T : struct'}
          </Code>

          <p>
            When we wrap a variable in a <code>Nullable</code> type, we have a
            new <strong>API</strong> to interact with this variable:
          </p>
          <ul>
            <li>
              Property <code>HasValue</code>, returns <code>true</code> if the
              variable has a value and <code>false</code> if it is{' '}
              <code>null</code>{' '}
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
              <code>Value</code> returns the actual value stored in the variable
              if <code>HasValue</code> is equal to <code>true</code>. Otherwise,{' '}
              <code>Value</code> throws <code>InvalidOperationException</code>{' '}
              if the variable is <code>null</code>.
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
            <strong>Delegates</strong> are objects that point to methods; with
            them we can call the methods assigned to the delegate. Delegates
            allow you to represent methods as objects and pass them to
            functions, use them as <em>callbacks</em>.
          </p>
          <p>
            <strong>Events</strong> are delegate objects that report that some
            event (<em>action</em>) has occurred.
          </p>
          <p>
            <strong>Lambda expressions</strong> are shorthand for{' '}
            <em>anonymous methods</em>. This allows you to create concise
            methods that can return some value.
          </p>

          <DetailsCard>
            <p>Syntax of lambda expressions</p>

            <img
              src={lambdaExpressionStructure}
              alt="lambdaExpressionStructure"
            />
          </DetailsCard>

          <DetailsCard>
            <p>Delegate example</p>
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
              <code>Action</code>, <code>Func</code> and
              <code>Predicate</code>
            </>
            <>
              <p>
                Instead of defining a new delegate type, you can use the already
                defined <em>Action</em>, <em>Func</em>, and <em>Predicate</em>{' '}
                delegates.
              </p>

              <ul>
                <li>
                  <p>
                    The generic delegate <em>Action &lt;T&gt;</em> is intended
                    to refer to a method that returns <code>void</code>. You can
                    pass up to 16 parameters of any type to this delegate class.
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
                    The <em>Func</em> delegates can be used in a similar way.
                    Func allows you to call methods that return something. It
                    can also be passed up to 16 types of parameters and 1 type
                    that it returns.
                  </p>
                  <Code
                    language={CodeLanguage.CSHARP}
                  >{`// Accepts 2 \`double\` parameters, returns \`int\`
Func<double,double, int> add = (a, b) => Convert.ToInt32(a + b);

int result = add(4.5, 10.0);

Console.WriteLine(result); // 15`}</Code>
                </li>
                <li>
                  The <em>Predicate</em> delegate is used to compare whether
                  some <em>T</em> object meets a certain condition. It returns{' '}
                  <code>true</code> if the object satisfies the condition, and{' '}
                  <code>false</code> if it doesn't.
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
                <strong>Events</strong> allow you to tell the system that a
                specific action has taken place.
              </p>
              <p>
                There is this model: <strong>Publisher-Subscriber</strong>
                <em>(Publisher-Subscriber)</em>. The <em>Subscriber</em>{' '}
                subscribes to the event, defines a handler, and waits for the{' '}
                <em>Publisher</em> to execute the event before triggering it.
              </p>
              <p>
                Example of Events & Delegates Flow usage can be found
                <a
                  href="/assets/zip/dotnet-ecosystem-and-csharp-best-practices.zip"
                  download
                >
                  <strong>here</strong>
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
            In C#, there are <em>arrays</em> that store{' '}
            <em>sets of similar objects</em>, but working with them is not
            always convenient. Since an array stores{' '}
            <em>a fixed number of objects</em>, in cases where we do not know in
            advance how many we will have, it will be much more convenient to
            use <em>collections</em>.
          </p>
          <p>
            When choosing collections, it can be decisive that some of them
            implement standard data structures, such as:
          </p>

          <ul>
            <li>stack</li>
            <li>queue</li>
            <li>dictionary</li>
            <li>hash table</li>
          </ul>

          <p>
            ...which can be useful for various special tasks. The basis for
            creating all collections is the implementation of the interfaces{' '}
            <code>IEnumerator</code> and <code>IEnumerable</code>.
          </p>
          <p>
            The <code>IEnumerator</code> interface represents an{' '}
            <em>enumerator</em> that makes it possible to iterate through a
            collection, for example in a <code>foreach</code> loop, or by means
            of{' '}
            <a href="https: //docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/">
              LINQ
            </a>
            . And the <code>IEnumerable</code> interface, through its{' '}
            <code>GetEnumerator</code> method, provides an enumerator to all
            classes that implement this interface. Therefore, the{' '}
            <code>IEnumerable</code> interface is the base interface for all
            collections.
          </p>
          <p>
            Specific methods and uses may differ from one collection class to
            another, but the general principles will be the same for all
            collection classes.
          </p>

          <DetailsCard>
            <p>Collections Hierarchy</p>

            <img src={collectionsHierarchy} alt="collectionsHierarchy" />
          </DetailsCard>

          <DetailsCard>
            <>ArrayList & List</>
            <>
              <p>
                This example uses two collections: <strong>non-generic</strong>{' '}
                is <code>ArrayList</code> and <strong>generic</strong> is{' '}
                <code>List</code>. It is now considered good practice to use the
                generic version of collections wherever possible due to strong
                typing and ease of use. Most collections support adding items.
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
                For example, in this case, adding is done using the{' '}
                <code>Add</code> method, but for other collections, the name of
                the method may differ. Also, most collections implement removal
                (in this example, it is done using the <code>RemoveAt</code>{' '}
                method, which removes an element from the collection by index).
                Using the <code>Count</code> property, you can see the number of
                elements in the collection.
              </p>
            </>
          </DetailsCard>

          <DetailsCard>
            <>Stack</>
            <>
              <p>
                <code>Stack&lt;T&gt;</code> represents a collection that uses
                the <strong>LIFO</strong> - last in - first out - algorithm.
                With this data organization, each next element is placed on top
                of the previous one. Elements are retrieved from the collection
                in the reverse order - the element that is highest on the stack
                is retrieved.
              </p>
              <img src={stack} alt="stack" />
              <p>
                In the <code>Stack</code> class, there are two main methods that
                allow you to manage elements - these are:
              </p>

              <ul>
                <li>
                  <code>Push</code>: Pushes an element onto the stack in first
                  place
                </li>
                <li>
                  <code>Pop</code>: Gets the first element from the stack
                </li>
                <li>
                  <code>Peek</code>:* simply returns the first element from the
                  stack without removing it
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
                The example shows how we instantiate the ribbon stack
                collection. Add 3 cities — "Lviv", "Kyiv", "Odessa" using the{' '}
                <code>Push</code> method. We pull out the element that we added
                last using the <code>Pop</code> method and display the results
                on the screen.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>Dictionary</>
            <>
              <p>
                <code>Dictionary</code> <em>(dictionary)</em> stores objects
                that represent a key-value pair. It is very handy to use to
                organize the correspondence of something to something.
              </p>
              <p>
                Each such object is an instance of the{' '}
                <code>KeyValuePair&lt;TKey, TValue&gt;</code> structure. Thanks
                to the <code>Key</code> and <code>Value</code> properties that
                this structure has, we can get the key and value of the element
                in the dictionary.
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
            If you need to glue two values together to return them to a
            function, or put two values into a <em>hashset</em>, you can use the{' '}
            <code>System.ValueTuple</code> types
          </p>

          <DetailsCard>
            <p>An example of using a tuple</p>
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
            <>Different scenarios for using tuples</>
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
                <li>Creating a tuple</li>
                <li>
                  Using a tuple to type <code>Dictionary</code>
                </li>
                <li>
                  Adding tuple elements to <code>Dictionary</code>
                </li>
                <li>Returning a dictionary value by key</li>
                <li>Destructuring a tuple element</li>
                <li>Access tuple members by name</li>
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
            Sometimes when running a program, errors occur that are difficult or
            impossible to predict (for example, when transferring a file over a
            network, the Internet connection may be interrupted). Such
            situations are called <strong>Exception</strong>s. The C# language
            provides developers with the ability to handle such situations using
            the <code>try...catch...finally</code> construct
          </p>
          <DetailsCard>
            <>
              <code>try...catch...finally</code> example
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
                  When using a <code>try...catch...finally</code> block, all
                  statements in the <code>try</code> block are executed first.
                </li>
                <li>
                  If no <em>Exception</em>s occurred in this block, then the{' '}
                  <code>finally</code> block will be executed after it and the{' '}
                  <code>try..catch..finally</code> construction will complete
                  your work.
                </li>
                <li>
                  If an <em>Exception</em> occurs in a <code>try</code> block,
                  then the normal flow of execution stops and the CLR starts
                  looking for a <code>catch</code> block that can handle this{' '}
                  <em>Exception</em>.
                </li>
                <li>
                  If the <code>catch</code> block is found, then it is executed,
                  and after its completion, the <code>finally</code> block is
                  executed.
                </li>
                <li>
                  If the required <code>catch</code> block is not found, the
                  program crashes.
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
                In C#, all <em>Exception</em> types are inherited from the{' '}
                <code>Exception</code> parent class, which is further divided
                into two branches <code>SystemException</code> and{' '}
                <code>ApplicationException </code>.
              </p>
              <p>
                <code>SystemException</code> is the base class for all{' '}
                <em>CLR</em> or code errors such as{' '}
                <code>DivideByZeroException</code> or{' '}
                <code>NullReferenceException</code> and so on.
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
                <code>ApplicationException</code> is used for application
                related exceptions. This type of exception is very convenient to
                use to create your own custom <em>Exception</em>-s. To do this,
                you just need to inherit from the <code>Exception</code> class
                and add what you want there. Further in this class, you can
                define additional fields, properties, methods, etc.
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
                      </a>{' '}
                      containing data in key-value pairs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.helplink#System_Exception_HelpLink">
                        HelpLink
                      </a>
                    </td>
                    <td>
                      May contain a URL (or URN) to a help file that provides
                      comprehensive information about the cause of the error.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.innerexception#System_Exception_InnerException">
                        InnerException
                      </a>
                    </td>
                    <td>
                      This property can be used to create and store an error
                      chain when processing <em>Exception</em>-a. You can use it
                      to create a new exception that contains pre-
                      <em>Exception</em>-s.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.message#System_Exception_Message">
                        Message
                      </a>
                    </td>
                    <td>
                      Provides detailed information about the reason for the
                      exception.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.source#System_Exception_Source">
                        Source
                      </a>
                    </td>
                    <td>
                      Contains the name of the program or object in which the
                      error occurred.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="https://docs.microsoft.com/en-us/dotnet/api/system.exception.stacktrace#System_Exception_StackTrace">
                        StackTrace
                      </a>
                    </td>
                    <td>
                      Contains <em>stack trace</em> which can be used to
                      determine where the error occurred. The{' '}
                      <em>Stack trace</em> includes the name of the source file
                      and the line number of the program, if available{' '}
                      <em>debug information</em>.
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
                After the <code>throw</code> statement, there is a{' '}
                <code>Exception</code>-a object, in whose constructor we can
                pass an error message. Instead of the generic <em>Exception</em>{' '}
                type, we can specify an object of any other type{' '}
                <code>Exception</code>.
              </p>
              <Code
                language={CodeLanguage.CSHARP}
              >{`catch (DivideByZeroException e)
{
    // thow new exception
    throw new HttpStatusCodeException(400, "Can't divide by 0");
}`}</Code>
              <p>
                Similarly, we can throw <code>Exception</code>s anywhere in the
                program. But there is also another form of using the{' '}
                <code>throw</code> operator, when nothing is specified after
                this operator.
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
                In this form, the throw statement can only be used in a{' '}
                <code>catch</code> block. The difference between them is that{' '}
                <code>throw</code> without anything keeps the original{' '}
                <code>stack trace</code>, while <code>throw ex</code> resets the{' '}
                <code>stack trace</code> to the method currently processing{' '}
                <code>Exception</code>.
              </p>
            </>
          </DetailsCard>
          <Bubble size="small">
            Example of handling exceptions can be found{' '}
            <a
              href="/assets/zip/dotnet-ecosystem-and-csharp-best-practices.zip"
              download
            >
              <strong>here</strong>
            </a>
            .
          </Bubble>
        </>
      </DetailsCard>

      <Level
        id="clean-code-principles"
        number="4"
        name="Clean Code Principles"
        difficulty="Measure twice, cut once."
        objectives="Understand how to write code that people want to read."
        labels={{
          level: 'Section',
          backToTop: 'Top',
          difficulty: 'Difficulty:',
          objectives: 'Objective:',
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
            Translated into human language, generally accepted coding standards
            and agreed upon rules for how to name variables, functions, etc.
            This is the C# grammar and spelling adopted by most .NET developers
            so that other <em> developers (you through X time)</em> could easily
            and quickly understand what is happening in your code and use it
            without getting confused in all possible ways to name, say, the{' '}
            <em>
              {' '}
              argument (and such spelling rules exist in absolutely all
              programming languages, not only in C#)
            </em>
            . It makes no sense to talk about each of the rules for a long time,
            the main thing for you is to familiarize yourself with the{' '}
            <a href="https://www.dofactory.com/reference/csharp-coding-standards">
              list of most common C# standards
            </a>
            .
          </p>

          <Bubble size="small">
            If you want to be a civilized developer and earn respect among your
            colleagues, read a few paragraphs with examples of well-formed code
            and stick to this format when performing tasks small or large.
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
            <strong>Don't repeat yourself</strong> when writing code = don't
            write multiple times something that can be coded once and called
            referring to a specific module. An example is a web application
            containing several blocks of the same design, where each has its own{' '}
            <em>(identical to others!)</em> style descriptions. What is the
            probability that when all these{' '}
            <em>
              {' '}
              blocks need to be edited in the same way (manually, because we
              repeat the same set of styles several times)
            </em>
            , the developer will miss one or more of them? When this principle
            is violated and the implementation of a method or even a class is
            duplicated without a real need, and several hundred thousand lines
            of code are written (as in any real project), then for refactoring,
            changing business logic, or even simple changes in the interface,
            you have to search for a long time by name method is an unfortunate
            piece of code, often in order to change only 1 digit in it.
          </p>
          <Bubble size="small">
            In short, it doesn't work that way. To achieve <strong>DRY</strong>{' '}
            in your code - divide it into small pieces; you see that part of the
            logic is repeated - take it out right away, combine functions. Why
            is DRY needed? The less code the better. It's easier to maintain, it
            takes less time to figure it out, and it also reduces bugs.
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
            This principle speaks for itself - simple and concise code is easier
            to understand for other developers and for you when you return to it
            after a while. It is formulated as follows - "each method should
            solve only one small problem, and not have many different means of
            consumption." If there are many conditions in the method, then break
            them into smaller methods. Such code is easier to read, maintain,
            and it also helps to find bugs much faster. To demonstrate{' '}
            <strong>KISS</strong>, the most common example is to define the day
            of the week:
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
            The slide shows two methods for solving this problem:
            <ol className="counted">
              <li>
                The first solution is as simple as doors — a simple{' '}
                <code>switch</code> with a default <em>case</em> if the day is
                not found.
              </li>
              <li>
                The second method is also working, but in order to understand
                it, you need to read it longer
              </li>
            </ol>
            <p>
              This kind of code exists everywhere, but it's really awkward and
              looks unprofessional, 99% of programmers would choose to work with
              something similar to the first option.
            </p>
          </Bubble>
          <br />
          <br />
          <Bubble size="small">
            To achieve <strong>KISS</strong> - try to write as simple code as
            possible. If you see a complex (unreadable) piece of code, look for
            a more concise solution to the same problem, and by refactoring what
            you have written, you will be surprised that a piece of 200 lines is
            actually not so necessary!
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
            SOLID are{' '}
            <strong>5 principles of object-oriented programming</strong> that
            describe software architecture:
          </p>
          <p>
            In simple terms, these are the rules by which you will write
            easy-to-understand, edit, or reuse code.
          </p>
          <DetailsCard>
            <>
              <strong>Single responsibility</strong>
            </>
            <>
              <p>
                Single Responsibility Principle. It means that{' '}
                <strong>each class or struct should have only one task.</strong>
                . All members of the class are written to perform the task given
                to it, and there is not a single line of code in it that does
                not apply to the task specified for this block. If we adhere to
                this principle, then we define classes by their tasks at the
                design stage of the program.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Not SOLID">
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
                I gave the <code>Task</code> class as an example - it saves the
                task to our database and calculates the time required to solve
                the task.
                <br />
                We conclude that it does not comply with the{' '}
                <strong>Single Responsibility Principle</strong>. Why don't we
                want it to perform other useful functions, such as determining
                the time needed to complete a task? Because if after some time
                the customer's{' '}
                <em>
                  {' '}
                  task execution parameters change (for example, due to a
                  release or a change in the composition of the programming
                  team)
                </em>
                , we will have to rewrite the <code>Task</code> class in
                accordance with the changes in the original data, and test
                whether other functionality that <code>Task</code> performs is
                broken. According to the{' '}
                <strong>Single Responsibility Principle</strong>, we should
                create a separate class for calculating the time to complete
                tasks, which will already be guided by business logic and other
                incoming data.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Open–closed</strong>
            </>
            <>
              <p>
                Principle of openness / closeness. Our class should be{' '}
                <strong>open for scaling, but closed for modifications</strong>.
                Our module should be designed in such a way that it is added
                only when new requirements are created - but related to the
                initial task. “Closed for modifications” means that the class is
                already completely ready and viable, its tasks and purposes do
                not change, therefore we do not rewrite it significantly, except
                in case of fixing bugs. In C#, this is achieved by the{' '}
                <strong>principle of inheritance</strong>.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Not SOLID">
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
                  Let's consider an example with a mockup - a page prototype.
                  The problem with this class is that when a customer wants to
                  look at a mockup created by designers, but cannot open an
                  image in <em>tiff</em> or <em>cdr</em> format, the developer
                  will need to introduce a new image format, for example{' '}
                  <em>png</em>. Therefore, we will be forced to add a new{' '}
                  <code>if</code> condition, which contradicts the{' '}
                  <strong>Open Closed Principle</strong>.
                </p>
                <p>
                  The second example shows how this can be solved - there is a
                  base abstract class <code>Mockup</code> that partially
                  implements image conversion, and child classes implement image
                  conversion to the required format. And if we want to add
                  another format, we just need to create another class that
                  inherits from <code>Mockup</code> and implements the
                  conversion method we need.
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
                According to the principle of Liskov substitution, we must{' '}
                <strong>use any child class instead of the parent</strong> in
                the same way, without making any changes. A child class cannot
                violate the type definition given in the parent class and
                contradict its behavior with its own functionality.
              </p>
              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Not SOLID">
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
                Here's how it can be illustrated: <code>Developer</code> is the
                parent class of <code>JavaScriptDeveloper</code> and{' '}
                <code>CSharpDeveloper</code>. Our <code>Developer</code> class
                can create backend and frontend applications. It would seem that
                everything is fine. <code>JavaScriptDeveloper</code>{' '}
                successfully implements 2 methods. But with{' '}
                <code>CSharpDeveloper</code> it's not so simple, he can write a
                server in <em>ASP.NET</em>, but he can't do it in frontend at
                all. And if we still try to get a frontend from it, we will
                catch an error - an exception. In a good way, we need to divide
                the functionality of <code>Developer</code> into 2 parts:{' '}
                <code>IFrontend</code> and <code>IBackend</code>, and implement
                them in accordance with the purpose of derived classes:{' '}
                <code> JavaScriptDeveloper</code> implements both{' '}
                <code>IFrontend</code> and <code>IBackend</code>, while{' '}
                <code>CSharpDeveloper</code> only implements{' '}
                <code>IBackend</code>.
              </Bubble>
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Interface segregation</strong>
            </>
            <>
              <p>
                The principle of separation of interfaces says that you should
                not pack all the interfaces together in a row, you should{' '}
                <strong>separate them by purpose</strong> so that users can
                selectively implement only those that use{' '}
                <em>and not all in a row that are available in program</em>.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Not SOLID">
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
                  Let's assume we have an <code>IDeveloper</code> interface that
                  now knows how to create a server and desktop application. As
                  before, we have <code>JavaScriptDeveloper</code> and{' '}
                  <code>CSharpDeveloper</code> that can use this functionality
                  as intended. For <em>JavaScript</em>, the application would be
                  written under Electron, and in C# it would be a WPF
                  application. Everything is great, everyone is happy, but no,
                  because our boss suddenly says that his applications on
                  Electron are lagging and it’s generally expensive to pay these
                  JavaScript developers. We are cutting back on JavaScript
                  desktop projects, writing only in WPF now. And in this way we
                  break the <strong>Interface Segregation</strong> principle,
                  because our class cannot but perform its functionality, and it
                  turns out that JavaScript developers are still writing desktop
                  projects.
                </p>
                <p>
                  The solution to this problem will again be to split the
                  interface into several: <code>IDesktop</code> and{' '}
                  <code>IBackend</code>. This is similar to the previous
                  example, but here we are solving a different problem -
                  preventing the class from doing more than it needs to.
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
                And now the last and perhaps the most difficult principle to
                understand is dependency inversion.
              </p>

              <ol className="inverted">
                <li>
                  High-level classes must not depend on lower-level classes, but
                  both must depend on abstractions.
                </li>
                <li>
                  Abstractions should not depend on details, but details should
                  depend on abstractions.
                </li>
              </ol>
              <p>
                What does this mean? And this means that high-level classes
                implement business rules or logic in the system. The lower-level
                classes deal with more detailed operations, such as working with
                a database, passing messages to the operating system, and so on.
                To achieve dependency inversion, we need to keep these
                high-level and low-level classes as loosely coupled as possible.
                And just for this, we write them dependent on abstractions, and
                not on each other.
              </p>

              <div className={styles.gridTwo}>
                <div>
                  <h4 className={styles.centered}>
                    <span className="tooltip" data-tooltip="Not SOLID">
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
                  Let's look at this principle using the example of sending
                  messages. In the first code example, the{' '}
                  <code>Notification</code> class is completely dependent on the{' '}
                  <code>Email</code> class because it only sends one type of
                  message. What if we want to send in some other way? Then we'll
                  have to dig into the entire messaging system. This is a sign
                  that the system is too tightly coupled.
                </p>
                <p>
                  To make it loosely coupled in this case, we need to abstract
                  away the <code>Email</code> message send provider. To do this,
                  we create an interface <code>IMessenger</code> with a method{' '}
                  <code>Send</code> and implement it in two classes -{' '}
                  <code>Email</code> and <code>SMS</code>. We write the{' '}
                  <code>Notification</code> class in such a way as to get rid of
                  the specific implementation of the message distribution. In
                  this case, we can use the{' '}
                  <strong>Dependency Injection</strong> principle by passing the{' '}
                  <code>Messenger</code> object through the constructor. And as
                  a result, we will send messages of the class with which we are
                  currently working. If we create <code>Notification</code> with{' '}
                  <code>Email</code> Messenger, an email is sent. Next, we
                  wanted to change the provider and assigned the{' '}
                  <code>Messenger</code> properties to the <code>SMS</code>{' '}
                  class, so the next call to the <code>Notify</code> method will
                  already send <em>SMS</em>-ku.
                </p>
              </Bubble>
            </>
          </DetailsCard>
          <p>
            Each <strong>SOLID</strong> principle offers us a way to write
            logical, reliable, and understandable code, and C#, when followed by
            these principles, allows you to write large programs and easily
            extend them.
          </p>
        </>
      </DetailsCard>

      <ThatsAllFolks />

      <Bubble>
        I can talk about C# and .NET for a long time, but in this lecture I
        shared the main, in my opinion, for you at the moment. That's all,
        thanks for your attention, rate the lecture in your personal accounts,
        leave feedback, ask questions, do your homework and see you at the code
        review! 👋
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.en} />;

export { Page, Head };
