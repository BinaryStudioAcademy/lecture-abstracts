import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layout/layout';
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
  SEO,
} from '~/components/common/common';
import {
  introPayload,
  panelsPayload,
  seoPayload,
  slugPayload,
} from '../data/data';
import { CodeLanguage } from '~/common/enums/enums';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Getting started with ASP.NET Core</h1>
      <Language currentLanguage="en" languages={slugPayload} />

      <VideoWrapper duration="26 min 36 sec">
        <iframe
          src="https://www.youtube.com/embed/PZO2bBM_MVw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <IntroBlueBubble {...introPayload.en} />

      <TimelineOfContents
        timeline={[
          {
            linkTo: '#intro-to-dotnet',
            title: 'Intro to .NET',
          },
          {
            linkTo: '#creating-an-app',
            title: 'Creating an app',
          },
          {
            linkTo: '#controllers-and-services',
            title: 'Controllers and services',
          },
          {
            linkTo: '#additional-features',
            title: 'Additional Features',
          },
        ]}
      />

      <Level
        id="intro-to-dotnet"
        number="1"
        name={
          <span>
            Intro to <a href="https://dotnet.microsoft.com/download">.NET</a>
          </span>
        }
        difficulty="No worries."
        objectives="Familiarize yourself with .NET fundamentals because you are going to be buddies."
      />

      <h5>How Microsoft came up with what we now call .NET</h5>
      <p>
        There were times when the term ".NET" meant Windows platform only. This
        platforms is called .NET Framework. It imposed some restrictions for
        deploying because most machines have Linux as an operating system. So
        the guys in Microsoft gathered for a meeting and came up with .NET Core.
        The main idea of the framework is cross-platform apps, which means you
        can host your app on a variety of OS. Starting with .NET 5, the platform
        version became known as .NET (without the use of "Core" in the name).
        Furthermore, it’s open-source, hence it has great community support.
      </p>
      <h5>.NET advantages</h5>
      <ol className="counted">
        <li>
          <strong>Cross-platform</strong> Runs on Windows, Linux, macOS
        </li>
        <li>
          <strong>Flexible deployment</strong> The framework can be included in
          your app or installed side-by-side user-or machine-wide
        </li>
        <li>
          <strong>Command-line tools</strong>
          .NET has great CLI, therefore all product scenarios can be executed
          using command-line
        </li>
        <li>
          <strong>Compatibility</strong>
          .NET is compatible with .NET Framework, Xamarin, and Mono, via the
          .NET Standard Library
        </li>
        <li>
          <strong>Open-source</strong>
          The .NET platform is open source, using MIT and Apache 2 licenses. You
          are welcome to contribute
        </li>
        <li>
          <strong>Supported by Microsoft</strong>
          Huge corporation forces .NET to develop and gain new features
        </li>
      </ol>

      <h5>What you can build with .NET</h5>

      <Panels {...panelsPayload.en} />

      <h5>What you need to start</h5>

      <ul>
        <li>
          <p>
            <strong>.NET SDK</strong> includes everything you need to build and
            run .NET applications. Since you are not limited to Windows only,
            you can choose whatever IDE or text editor you want (
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
            , and so on). You are able to write code using your favorite tool
            and execute needed actions using the CLI. Some useful CLI commands
            are:
          </p>
          <ul>
            <li>
              <code>dotnet new</code> — initializes a sample console C# project
            </li>

            <li>
              <code>dotnet restore</code> — restores the dependencies for a
              given application
            </li>

            <li>
              <code>dotnet build</code> — builds a .NET application
            </li>

            <li>
              <code>dotnet publish</code> — publishes a .NET portable or
              self-contained application
            </li>

            <li>
              <code>dotnet run</code> — runs the application from source
            </li>

            <li>
              <code>dotnet test</code> — runs tests using a test runner
              specified in the project.json
            </li>
            <li>
              <code>dotnet pack</code> — creates a NuGet package of your code
            </li>
          </ul>
        </li>
        <li>
          <strong>.NET Runtime</strong> includes just the resources required to
          run existing .NET applications (this runtime is included in the SDK)
        </li>
      </ul>

      <Level
        id="creating-an-app"
        number="2"
        name="Creating an app"
        difficulty="Gets warmer, typing is required."
        objectives={
          <span>
            Learn <code>dotnet new</code>, understand the anatomy of ASP.NET
            Core app.
          </span>
        }
      />

      <h5>
        What is ASP.NET Core{' '}
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
        <strong>ASP.NET</strong> is a popular web-development framework for
        building web apps on the .NET platform.
        <strong>ASP.NET Core</strong> is the open-source version of ASP.NET,
        that runs on macOS, Linux, and Windows. It was first released in 2016
        and is a re-design of earlier Windows-only versions of ASP.NET. In
        comparison to ASP.NET, Core version provides:
      </p>
      <ul>
        <li>Cleaner and modular architecture</li>
        <li>Tighter security</li>
        <li>Reduced servicing</li>
        <li>Improved performance</li>
      </ul>

      <h5>Why use it</h5>

      <ul>
        <li>
          Integration of modern client-side frameworks and development workflows
        </li>
        <li>A cloud-ready environment-based configuration system</li>
        <li>Built-in dependency injection</li>
        <li>New light-weight and modular HTTP request pipeline</li>
        <li>Ability to host on IIS or self-host in your own process</li>
        <li>Built on .NET, which supports true side-by-side app versioning</li>
        <li>Ships entirely as NuGet packages</li>
        <li>New tooling that simplifies modern web development</li>
        <li>
          Build and run cross-platform ASP.NET apps on Windows, Linux, and macOS
        </li>
        <li>Open-source and community focused</li>
      </ul>
      <h5>
        Create a new app by running <code>dotnet new webapi</code> or using
        features of your IDE{' '}
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
          This is how the entry point looks like:
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
          Here we can configure services that are used by your application and
          define how the application will respond to individual HTTP requests
          (you can setup pipelines which will process requests).
        </>
      </DetailsCard>

      <Level
        id="controllers-and-services"
        number="3"
        name="Controllers and services"
        difficulty="No kidding."
        objectives="Learn that services are no joke and business logic shouldn't live in controllers."
      />

      <p>
        I’m going to show you how we can write API using{' '}
        <strong>ASP.NET Core Web API</strong>.
      </p>
      <ol className="counted">
        <li>
          <p>
            First, let’s create the simple application that retrives all binary
            students. Create new files called{' '}
            <strong>BinaryStudentsController.cs</strong>
            in the <strong>Controllers</strong> folder and{' '}
            <strong>BinaryStudent.cs</strong> where you want
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
            You can use <code>dotnet run</code>.command to start the server. To
            make sure that our API is working, we should send a request to the
            <code>BinaryStudentsController</code>. Open
            <a href="https://localhost:7088/binarystudents">
              <b>https://localhost:7088/binarystudents</b>
            </a>
            — you should receive students in JSON format as a response (you can
            find your port number in launchSettings.json file).
          </p>
          <Bubble size="small">
            You can use Postman to test your API or, for example, use an
            extension for VSCode ―{' '}
            <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client">
              <strong>REST Client</strong>
            </a>
          </Bubble>
        </li>
        <li>
          <p>
            Let’s practice a bit more and complicate our application, add more
            endpoints and dependencies. The modified controller will be a
            complete CRUD (C - create, R - read, U - update, D - delete)
            controller. Writing business logic in controllers isn’t the best
            idea, so it would be better if we created a separate service for
            this purpose.
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
            Run the application and test three endpoints to make sure everything
            works.
          </p>
          <ul>
            <li>
              <a href="https://localhost:7088/binarystudents?filter=yan">
                <strong>
                  https://localhost:7088/binarystudents?filter=yan
                </strong>
              </a>{' '}
              - GET request, retrieving those students whose last names contain
              the filter string;
            </li>
            <li>
              <a href="https://localhost:7088/binarystudents/1">
                <strong>https://localhost:7088/binarystudents/1</strong>
              </a>{' '}
              - GET request, retrieving the student by their id;
            </li>
            <li>
              <a href="https://localhost:7088/binarystudents">
                <strong>https://localhost:7088/binarystudents</strong>
              </a>{' '}
              - POST request, adding the new student that you define in the body
              of request in JSON format.
            </li>
          </ul>
        </li>
      </ol>

      <Level
        id="additional-features"
        number="4"
        name="Additional features"
        difficulty="Like the first one times five?"
        objectives="Troubleshoot, debug, extend, and wire up your app better."
      />

      <h5 id="dependency-injection">
        A short review of Dependency Injection (Singleton, Scoped, Transient)
      </h5>

      <p>
        How can we pass dependencies? The answer is DI or Dependency injection.
      </p>
      <p>
        <a href="https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection">
          <strong>Dependency injection (DI)</strong>
        </a>{' '}
        — software design pattern, which is a technique for achieving{' '}
        <a href="https://docs.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/architectural-principles#dependency-inversion">
          <strong>Inversion of Control (IoC)</strong>
        </a>{' '}
        between classes and their dependencies. In our case
        <code>BinaryStudentsController</code>
        depends on
        <code>BinaryStudentService</code>. There might be a case when we want to
        use another implementation. In this case, we would need to go through
        our app and change class name manually in all places where it’s used.
        With DI we can do it easily in one place (in <b>Program.cs</b>).
        Moreover, in .NET DI container can create instances of dependencies.
        Otherwise, we would need to do it manually in every service. In addition
        to that, .NET DI container takes on the responsibility of creating an
        instance of the dependency and disposing of it when it's no longer
        needed. There are a few service lifetime options:
      </p>
      <ol className="counted">
        <li>
          <b>Singleton</b> — services are created the first time they're
          requested (or when an instance is specified with the service
          registration during web app configuration). Every subsequent request
          uses the same instance.
        </li>
        <li>
          <b>Scoped</b> — services are created once per client request
          (connection).
        </li>
        <li>
          <b>Transient</b> — services are created each time they're requested
          from the service container. This lifetime works best for lightweight,
          stateless services.
        </li>
      </ol>
      <p>
        Let’s apply <b>Singleton</b> to our <code>BinaryStudentService</code> so
        that we use the same collection of students:
      </p>
      <ol className="counted">
        <li>
          <p>
            It can be done using <code>IServiceCollection</code> in{' '}
            <b>Program.cs</b>:
          </p>
          <Code language={CodeLanguage.CSHARP}>
            {'builder.Services.AddSingleton<BinaryStudentService>();'}
          </Code>
        </li>
        <li>
          <p>
            Going further, we can create an interface for{' '}
            <code>BinaryStudentService</code>
            and bind it to implementation. It will let us switch services in one
            place. Change the previous version of service registration to the
            next one:
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
        Middleware is software that's assembled into an app pipeline to handle
        requests and responses. Long story short: the app applies all
        middlewares one by one for each request.
      </p>

      <img src="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/index/_static/request-delegate-pipeline.png" />
      <p>
        For example, if you want to log all the requests, you can add a pipeline
        (in the example below <code>Console.WriteLine</code> is used for
        simplicity, you can use any logging framework there). So, add the next
        code into the configuration of pipeline in <b>Program.cs</b>:
      </p>
      <Code language={CodeLanguage.CSHARP}>{`app.Use(async(context, next) =>
{
  Console.WriteLine("Started handling request");
  await next.Invoke();
  Console.WriteLine("Finished handling request");
});`}</Code>
      <p>Now start the app, send a request and see the console output.</p>

      <h5>Routing</h5>
      <p>
        Routing is responsible for mapping request URIs to endpoint selectors
        and dispatching incoming requests to endpoints. Routes are defined in
        the app and configured when the app starts. A route can optionally
        extract values from the URL contained in the request, and these values
        can then be used for request processing. Basically, routing is a
        middleware. Using the picture above, imagine how request comes to the
        server, then it’s being processed by a chain of middlewares and then
        routing middleware matches URL to controller and method names. In WebAPI
        we define route using the <code>Route</code> attribute:
      </p>
      <Code language={CodeLanguage.CSHARP}>
        {`[ApiController]
[Route("[controller]")]
public class BinaryStudentsController : ControllerBase`}
      </Code>
      <p>
        You can set a specific string, or you can use <b>[controller]</b>
        placeholder. And if you follow the naming convention and your class name
        has the <b>"Controller"</b> prefix at the end, then instead of the
        placeholder the name without the prefix will be substituted There is
        same attribute for methods in the controller.
      </p>

      <h5>Minimal API</h5>

      <p>
        The Minimal API is a new way to build APIs without a lot of
        controller-based API code. You can define endpoints using these
        extension methods in the configuration of pipeline:
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
        The first parameter is path which the endpoint handles and the second is
        handler of delegate type. This is convenient if creating an entire
        controller is pointless. It's also handy if you need to quickly test an
        endpoint.
      </p>

      <h5>Status codes</h5>
      <p>
        Of course, returning only codes 200 or 500 is cool. But there are a lot
        of informative codes, so why not use them? One of the ways to specify
        status codes for the responses to the client is using the methods of the
        <code>ControllerBase</code> class, from which the API controller
        inherits. For example, the following methods:
      </p>

      <ul>
        <li>Ok - 200;</li>
        <li>Created - 201;</li>
        <li>BadRequest - 400;</li>
        <li>NotFound - 404;</li>
        <li>Forbid - 403;</li>
        <li>StatusCode - any code.</li>
      </ul>
      <p>
        In order to use them, we have to wrap the return value type in the{' '}
        <code>ActionResult</code> class:
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
        That's it in brief about ASP.NET Core. That's all, thank you very much
        for your attention🎩! Ask questions and leave feedback on the lecture on
        the academy's website. Good luck with homework, see you soon, bye!
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.en} />;

export { Page, Head };
