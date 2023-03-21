import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layouts';
import { SEO } from '~/partials';
import {
  DetailsCard,
  IntroBlueBubble,
  Language,
  Level,
  SlackMessage,
  TimelineOfContents,
  VideoWrapper,
  Bubble,
  Code,
  Panels,
  ThatsAllFolks,
} from '~/components/common';
import {
  introPayload,
  panelsPayload,
  seoPayload,
  slugPayload,
} from '../data/data';

import {
  ryuAvatar,
  youAvatar,
  vitaliyOleynikovAvatar,
  alexandrTovmachAvatar,
} from '~/assets/images/avatars/slack-squared';
import networkImage from '../assets/images/network.png';
import clientServerModelImage from '../assets/images/client-server-model.png';
import serverRoomImage from '../assets/images/server-room.jpg';
import nodeNpmVersionsImg from '../assets/images/node-npm-versions.jpg';
import server_startedImg from '../assets/images/server-started-en.png';
import get_serverImg from '../assets/images/get-server-en.png';
import get_server_logImg from '../assets/images/get-server-log-en.png';
import postmanImg from '../assets/images/postman-en.png';
import server_logsImg from '../assets/images/server-logs-en.png';
import eventloopImg from '../assets/images/eventloop.jpg';
import express_getImg from '../assets/images/express-get.jpg';
import express_postImg from '../assets/images/express-post-en.png';
import express_bodyImg from '../assets/images/express-body-en.png';
import express_body_logImg from '../assets/images/express-body-log-en.png';
import express_generator_versionImg from '../assets/images/express-generator-version.jpg';
import express_generator_helpImg from '../assets/images/express-generator-help.jpg';
import express_generatorImg from '../assets/images/express-generator.jpg';
import express_generator_starterImg from '../assets/images/express-generator-starter.jpg';
import service_testImg from '../assets/images/service-test.jpg';
import repository_testImg from '../assets/images/repository-test-en.png';
import middleware_test1Img from '../assets/images/middleware-test1-en.png';
import middleware_test2Img from '../assets/images/middleware-test2-en.png';
import audio from '~/assets/audio/in-the-end.mp3';
import { CodeLanguage } from '~/enums/code-language/code-language';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Express yourself with Node.js</h1>
      <Language currentLanguage="en" languages={slugPayload} />
      <IntroBlueBubble {...introPayload.en} />
      <p>
        Ryu, being very happy with the online fighting game, started showing off
        to his friends. At first, the game caused incredible excitement, but
        before Ryu had a chance to begin negotiations with Capcom, the hype had
        subsided. Everyone noted that there are too few characters in the game
        and their characteristics do not correspond to reality, which is why it
        became boring to play.
        <br />
        Frustrated, Ryu again asks the developers to fix the situation:
      </p>
      <SlackMessage
        senderId="ryu"
        senderName="Ryu"
        senderAvatarUrl={ryuAvatar}
        reactions={[{ emoji: '👍', count: 42 }]}
        replies={[{ name: 'N/A', avatarUrl: alexandrTovmachAvatar }]}
      >
        <p>
          Hi, I need to increase the number of characters in the fighting game.
          I also want to be able to change the properties of the players, their
          appearance, damage, vulnerability and names (because among us there
          are French who are offended when their name is spelled incorrectly)
        </p>
      </SlackMessage>
      <p>
        The student realized that a simple page begins to grow into a serious
        application with business logic and user management and at the same time
        they're not able to store large amounts of data on the client. So the
        student decides that it's time to develop the server!
      </p>
      <SlackMessage
        senderId="you"
        senderName="You"
        senderAvatarUrl={youAvatar}
        reactions={[
          { emoji: '👍', count: 13 },
          { emoji: '🏁', count: 8 },
          { emoji: '🚀', count: 10 },
          { emoji: '👏', count: 6 },
        ]}
        replies={[{ name: 'N/A', avatarUrl: vitaliyOleynikovAvatar }]}
      >
        Yes, I think we can implement all this using a server.
      </SlackMessage>
      <p>
        And since the student writes in JS, the choice for the technology
        becomes obvious - Node.js. There is only one little thing left ―{' '}
        <span className="tooltip" data-tooltip='well, yeah, "little thing"...'>
          <u>to learn this technology</u>
        </span>
        .
      </p>
      <hr />
      <TimelineOfContents
        headerTitle="Working with Node.js"
        timeline={[
          {
            linkTo: '#about-backend',
            title: 'Theory',
          },
          {
            linkTo: '#preparation',
            title: 'Preparation',
          },
          {
            linkTo: '#package-manager',
            title: 'Package manager',
          },
          {
            linkTo: '#basic-node-js',
            title: 'Introduction to Node.js',
          },
          {
            linkTo: '#basic-express-js',
            title: 'Introduction to Express.js',
          },
          {
            linkTo: '#first-project',
            title: 'First project',
          },
          {
            linkTo: '#finish',
            title: 'Conclusion',
          },
        ]}
      />

      <Level
        id="about-backend"
        number="1"
        name="Theory"
        difficulty="Like YouTube ads, you can skip it."
        objectives="To understand what a server is and its role in the web."
      />

      <VideoWrapper duration="4:30 min">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=31&end=301"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <DetailsCard>
        <strong>Definitions</strong>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Client_(computing)">
              <strong>Client</strong>
            </a>{' '}
            ― can be a browser or any other software that makes requests through
            the web.
          </li>
          <li>
            <div>
              <a href="https://en.wikipedia.org/wiki/Web_server">
                <strong>Server</strong>
              </a>{' '}
              ― a program or a part of it that accepts client requests via HTTP
              and responds with the content of requested resource or an error
              message.
            </div>
            <Bubble size="small">
              When a web developer says "server", they mean "web server". The
              same applies to "client", "application", etc.
            </Bubble>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">
              <strong>HTTP</strong>
            </a>{' '}
            ― a set of rules for data communication on the Internet.
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods">
              <strong>HTTP-method</strong>
            </a>{' '}
            ― indicates the desired action to be performed on the identified
            resource. The main ones include <strong>GET</strong>,{' '}
            <strong>POST</strong>, <strong>PUT</strong>, <strong>DELETE</strong>{' '}
            ― there are some more, but this is the basis that will be enough for
            a while
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">
              <strong>HTTP-status</strong>
            </a>{' '}
            ― issued by a server in response to a client's request and tells you
            the status of the requested operation. The most commonly used:{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#200">
              <strong>200</strong>
            </a>
            ,{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#301">
              <strong>301</strong>
            </a>
            ,{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#401">
              <strong>401</strong>
            </a>
            ,{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#404">
              <strong>404</strong>
            </a>
            ,{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#500">
              <strong>500</strong>
            </a>
            .
          </li>
        </ul>
      </DetailsCard>
      <ol className="inverted">
        <li>
          <h5>
            <strong>Web theory</strong>
          </h5>
          <p>Let's take a look at an example of how the Web works:</p>
          <ol className="counted">
            <li>
              <em>user opened browser</em> / <strong>launched client</strong>
            </li>
            <li>
              <em>
                user opened{' '}
                <a href="https://academy.binary-studio.com/en/">the link</a>
              </em>{' '}
              / <strong>sent a GET request to the server via HTTP</strong>
            </li>
            <li>
              <em>server processed the request</em> /{' '}
              <strong>
                identified that a client requested a file and then found the
                file
              </strong>
            </li>
            <li>
              <DetailsCard isReversed>
                <>
                  <em>server returned the file</em> /{' '}
                  <strong>
                    via HTTP responded with the 200 status and an HTML file
                  </strong>
                </>
                <>
                  <img src={networkImage} alt="" />
                </>
              </DetailsCard>
            </li>
          </ol>
          <Bubble size="small">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works">
              Article "How the Web works"
            </a>
          </Bubble>
          <Bubble size="small">
            If you write JS code and have already implemented your first
            HTML-page - it means that you know the client well enough. Here we
            will concentrate on the server-side{' '}
            <em>
              <s>
                (actually, we deal with the server because it's the topic of the
                lecture, but it does not matter)
              </s>
            </em>
            .
          </Bubble>
        </li>
        <li>
          <h5>
            <strong>Server ― "what?" and "why?"</strong>
          </h5>
          <DetailsCard>
            <>
              <strong>What</strong> is server?
            </>
            <>
              <p>
                Simply put, when a user types a request in the address bar, the
                browser requests data from a remote computer (server) via HTTP.
                In response, it receives a file or data to display in a browser.
              </p>
              <img src={clientServerModelImage} alt="" />
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Why</strong> do we need a server?
            </>
            <>
              <p>
                To save and process all resources used on the web. It doesn't
                matter if it's one static page or a whole Facebook, everything
                is located on remote servers or web hosting services, and is
                displayed to the user only on request.
              </p>
              <img src={serverRoomImage} alt="" />
            </>
          </DetailsCard>

          <p>
            The modern web server performs many actions for processing and
            storing information, works with static files and sensitive data that
            no one should have access to, performs complicated calculations that
            are too heavy for the client side, and much more. Therefore,
            depending on the complexity of the project and the tasks to be
            solved, for convenient work and efficiency, the server would be
            built according to a certain architecture:{' '}
            <a href="https://en.wikipedia.org/wiki/Monolithic_application">
              <strong>monolithic</strong>
            </a>{' '}
            or{' '}
            <a href="https://en.wikipedia.org/wiki/Microservices">
              <strong>microservice</strong>
            </a>
            .
          </p>
        </li>
        <li>
          <h5>
            <strong>Історія Node.js</strong>
          </h5>
          <Bubble size="small">
            <blockquote>
              <a href="https://twitter.com/ryanmdahl">
                <strong>Ryan Dahl</strong>
              </a>
              ,&nbsp;
              <br />
              <a href="https://www.youtube.com/watch?v=ysSxxIqKNN0">
                <strong>2009</strong>
              </a>
              <br />
              <a href="https://nodejs.org/">
                <strong>Node.js</strong>
              </a>
            </blockquote>
          </Bubble>
          <p>
            It was 2009 when the first version of Node.js was published. After
            that there have been{' '}
            <a href="https://blog.risingstack.com/history-of-node-js/">
              some issues with rights
            </a>
            , but we're less interested in politics than in the fact that
            Node.js executes JavaScript code outside a web browser:
          </p>

          <Panels {...panelsPayload.historySection.en} />
          <p>
            And now, thanks to all these factors, we can create complete web
            applications using JavaScript on both the client and server.
          </p>
        </li>
      </ol>
      <Level
        id="preparation"
        number="2"
        name="Preparation"
        difficulty="Like Windows installation, easy but something can go wrong."
        objectives="Install Node.js"
      />

      <VideoWrapper duration="3 min">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=301&end=487"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        To start the installation process, just go to the official website{' '}
        <a href="https://nodejs.org">https://nodejs.org</a> , and download the
        installation file for your operating system, then follow the
        instructions.
      </p>
      <Bubble size="small">
        It would also be a very good idea to use a package called node version
        manager to manage the installation of different node versions on your
        system. There is an{' '}
        <a href="https://github.com/nvm-sh/nvm">
          nvm package for Mac and Linux
        </a>{' '}
        or a separate{' '}
        <a href="https://github.com/coreybutler/nvm-windows">
          package for Windows
        </a>
        . Check one of those links and follow the instructions to install nvm on
        your system and that will give you the ability to install any version of
        Node.js you need.
      </Bubble>
      <p>
        There is no point in writing the full installation process for all
        operating systems, there are a lot of official tutorials for that, but I
        want to pay attention to the common installation problems.
      </p>
      <Panels {...panelsPayload.installSection.en} />
      <DetailsCard>
        <>
          <strong>
            <strong>
              Use a terminal to verify a successful Node.js installation.
            </strong>
          </strong>
        </>
        <>
          <p>Run next commands:</p>
          <Code language={CodeLanguage.SHELL}>
            {`# Print Node.js version
node -v

# Print npm version
npm -v`}
          </Code>
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>
            If the version is displayed - everything is installed and working
            properly.
          </strong>
        </>
        <>
          <p>
            <i>your versions may be newer</i>
          </p>
          <img src={nodeNpmVersionsImg} alt="nodeNpmVersions" />
        </>
      </DetailsCard>
      <p>
        Did you notice <b>npm</b>? But did we install it? It's a package manager
        developed by the Node.js team and installed altogether with Node for
        easy management of modules. We'll talk about it in more detail in the
        next block, but now it's important to make sure it works.
      </p>
      <Level
        id="package-manager"
        number="3"
        name="Package managers"
        difficulty="Like learning to play cards - you need to understand who is responsible for what."
        objectives="Understand the definitions and start working with packages using npm"
      />

      <VideoWrapper duration="5.5 min">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=488&end=816"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <DetailsCard>
        <>
          <strong>Definitions</strong>
        </>
        <>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Modular_programming">
                Modules
              </a>{' '}
              — parts of a program / code, divided in separate blocks for
              further reuse.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Software_suite">
                Packages
              </a>{' '}
              — a collection of modules.
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Package_manager">
                Package managers
              </a>{' '}
              ― a tool for installing, uninstalling, updating, versioning and
              validating packages and modules.
            </li>
          </ul>
        </>
      </DetailsCard>
      <br />
      <ol className="inverted">
        <li>
          <h5>
            <strong>
              What are "packages" and why do they need "managers"?
            </strong>
          </h5>
          <DetailsCard>
            <>
              <strong>
                To explain what a package / module is, let's take a look at an
                example.
              </strong>
            </>
            <>
              <ol className="regular">
                <li>
                  <i>
                    In your project, you wrote a function to sort an array and
                    reuse it in several places.
                  </i>
                  <Bubble size="small">
                    {' '}
                    Congratulations, it's almost a package / module
                  </Bubble>
                </li>
                <li>
                  <i>
                    Later, you decided that the same function could help someone
                    else, so you published it on{' '}
                    <a href="https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly">
                      StackOverflow as a reply
                    </a>
                    .
                  </i>
                  <Bubble size="small">
                    Now your package / module is publicly available and other
                    developers can simply copypaste it.
                  </Bubble>
                </li>
                <li>
                  <i>
                    And what if your solution was longer and took 400 lines of
                    code? 500 lines? 1000?
                  </i>
                  <Bubble size="small">
                    It is not so convenient to copy such amounts of data
                    manually.
                  </Bubble>
                </li>
                <li>
                  <i>
                    Therefore, it is better to format your function correctly
                    and publish it to a remote storage.
                  </i>
                  <Bubble size="small">
                    Now other programmers just need to know the name of your
                    package / module and use <b>npm</b> to add it to their
                    project, delete it if they don't like it, or upgrade to the
                    next version if you implement it.
                  </Bubble>
                </li>
              </ol>

              <p>
                <blockquote>
                  One more time - what is the difference between{' '}
                  <code>packages</code> and <code>modules</code>? Believe me,
                  even experienced developers are often confused, but the
                  difference is simple - <code>module</code> is an atom,{' '}
                  <code>package</code> is a molecule. In other words,{' '}
                  <code>package</code> consists of other
                  <code>modules</code>, which are the smallest unit that solves
                  one problem. Pretty simple, isn't it?
                </blockquote>
              </p>
            </>
          </DetailsCard>
          <p>
            <a href="https://www.javascriptstuff.com/javascript-frontend-package-managers/">
              Several years ago
            </a>
            the block about package managers could have taken the whole lecture
            due to their variety, but today the situation has stabilized, and
            now to work with JS we have 2 leaders:
          </p>

          <Panels {...panelsPayload.packetsSection.en} />

          <p>
            All <b>npm</b> packages are available in <b>yarn</b>, because they
            use the same data source. <b>yarn</b> was created only to improve
            the performance of <b>npm</b>. There is no actual difference between
            them, except for the subjective judgment of fans of a particular
            tool. In the future, you will have to decide on your own what is
            more convenient for you to work with, but today we will talk about
            <b>npm</b>, because of its relation with Node.js.
          </p>

          <Bubble size="small">
            <a href="https://www.sitepoint.com/yarn-vs-npm/" target="_blank">
              {' '}
              Article "Yarn vs npm: Everything You Need to Know"
            </a>
          </Bubble>
        </li>
        <li>
          <h5>
            <strong>Working with npm</strong>
          </h5>
          <p>
            To find out the full list of commands available for <b>npm</b>, you
            can
            <s>and should</s> read{' '}
            <a href="https://docs.npmjs.com/cli-documentation/" target="_blank">
              {' '}
              the documentation{' '}
            </a>
            . In the lecture I'll provide most common ones:
          </p>
          <Code language={CodeLanguage.SHELL}>
            {`# project initialization
npm init

# package installation
npm install package-name

# package installation for development only
npm install package-name --save-dev

# package removal
npm uninstall package-name

# installation of a specific version of the package
npm install package-name@version`}
          </Code>
        </li>
        <li>
          <p>
            In conclusion, I would like to explain why people came up with
            "package managers", after all, we could add the code manually
            directly to the project without any problems:
          </p>
          <Panels {...panelsPayload.reasonsSection.en} />
        </li>
      </ol>
      <Level
        id="basic-node-js"
        number="4"
        name="Introduction to Node.js"
        difficulty="Like baseball rules - understood nothing, but very interesting."
        objectives="Use Node.js packages to start simple HTTP server and deal with eventloop."
      />

      <VideoWrapper duration="3.5 min">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=817&end=1024"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        <b>Node.js</b> - is a <b>JavaScript</b>, runtime, where we can run
        scripts. Everything will work{' '}
        <span
          className="tooltip"
          data-tooltip='"almost" because they only have V8 in common'
        >
          <u>almost like in a browser</u>
        </span>
        , so the transition from frontend to backend should be{' '}
        <span
          className="tooltip"
          data-tooltip="compared to learning a new language"
        >
          <u>as comfortable as possible</u>
        </span>
        .{' '}
      </p>
      <p>
        To go to the environment you need to run the command <code>node</code>{' '}
        in the terminal, then run any JS code. But obviously, this method is not
        the most convenient one and it is better to write code in files, that
        can then be run with the command <code>node file_name.js</code>.
      </p>
      <p>
        Experiment time! We already know how to use all of JS 's power with Node
        and that's awesome, but now we want to start implementing servers. Let's
        open{' '}
        <a href="https://nodejs.org/api/" target="_blank">
          an official documentation
        </a>
        , to take a look at the list of built-in <b>Node.js</b> packages, and
        find out how to work with them. As we can see, there are too many of
        them, but we only need one to get started -{' '}
        <a
          href="https://nodejs.org/api/http.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          http
        </a>
        , that is responsible for working via HTTP. After reading the
        description we understand that it has many methods and it doesn't make
        sense for a beginner to consider all of them, instead let's write a
        practical example of starting an HTTP server:
      </p>
      <Code language={CodeLanguage.JS}>
        {`// import of the http module
const http = require('http');

const port = 3000;

// callback on each HTTP request
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("How you doin'?");
};

// create HTTP-server
const server = http.createServer(requestHandler);

// run the server
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
      </Code>
      <DetailsCard>
        <>
          <strong>Run the file</strong>
        </>
        <>
          <img src={server_startedImg} alt="server_started" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Check the server via browser</strong>
        </>
        <>
          <p>
            The browser always sends a GET request to the specified URL and in
            addition requests <i>favicon.ico</i>, because it perceives any
            address as a page.
          </p>
          <img src={get_serverImg} alt="get_server" />
          <p>
            Server logs that we get from the <code>requestHandler()</code>{' '}
            function
          </p>
          <img src={get_server_logImg} alt="get_server_log" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Check the server via Postman</strong>
        </>
        <>
          <p>
            Meet
            <a href="https://www.getpostman.com/" target="_blank">
              Postman
            </a>{' '}
            ― tool for convenient sending of HTTP-requests to a server. Via
            Postman we can easily change the URL, methods, headers, and body of
            requests.
          </p>
          <img src={postmanImg} alt="postman" />
          <Bubble size="small">
            <a
              href="https://learning.postman.com/docs/getting-started/introduction/"
              target="_blank"
            >
              "Postman Introduction"
            </a>
          </Bubble>
        </>
      </DetailsCard>
      <p>
        We created a working server! Hooray! It is very simple and does not
        understand the difference between GET and POST requests, does not know
        how to work with request body and much more, but it is the first one and
        we ❤️ it just for that, right? Let's teach the server to save all logs
        to a file, and also try another package{' '}
        <a href="https://nodejs.org/api/fs.html" target="_blank">
          fs
        </a>
        , designed to work with the file system:
      </p>
      <Code language={CodeLanguage.JS}>{`// import of the http module
const http = require('http');

// import of fs http module
const fs = require('fs');

const port = 3000;

// create a stream for writing to a file
const logFile = fs.createWriteStream('log.txt', { flags: 'a' });

// callback on each HTTP request
const requestHandler = (request, response) => {
  console.log(request.url);
  logFile.write(\`Request url: \${request.url}\\n\`);
  response.end("How you doin'?");
};

// create HTTP-server
const server = http.createServer(requestHandler);

// run the server
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}</Code>
      <DetailsCard>
        <p>
          <strong>
            After sending a few requests, let's take a look at the file{' '}
            <i>log.txt</i>
          </strong>
        </p>
        <>
          <img src={server_logsImg} alt="server_logs" />
        </>
      </DetailsCard>
      <p>
        And what will happen if the writing to the file is not finished yet, and
        the server receives another request? Looking ahead, I will say that file
        system operations are asynchronous streams, and considering the
        single-threaded JS, they must block the server until completion. But
        this is not the case, and we can see this by bombarding the server with
        requests, and it will not cancel or delay any of them.
      </p>
      <Bubble size="small">
        <a
          href="https://medium.com/edge-coders/node-js-streams-everything-you-need-to-know-c9141306be93"
          target="_blank"
        >
          Article "Node.js Streams: Everything you need to know"
        </a>
      </Bubble>
      <br />
      <br />
      <DetailsCard>
        <p>
          <strong>
            And why is that? Now we should finally understand how the eventloop
            is implemented in Node
          </strong>
        </p>
        <>
          <p>
            The circle in the center is a JS thread and it always performs only
            one operation at a time. On the left we see a queue of requests
            waiting to be fulfilled. When a synchronous request is received, it
            starts to be processed and upon completion starts the next request.
            In cases where the request causes asynchronous operations, it is
            delegated to the library{' '}
            <a target="_blank" href="https://github.com/libuv/libuv">
              libuv
            </a>
            , which processes it in a separate thread, and upon completion, puts
            the callback in the same queue.
          </p>
          <img src={eventloopImg} alt="eventloop" />
          <Bubble size="small">
            I tried to explain as simply as possible, but I'm not sure that's
            enough, so here's a more detailed{' '}
            <a href="https://youtu.be/8aGhZQkoFbQ" target="_blank">
              video
            </a>
          </Bubble>
        </>
      </DetailsCard>
      <p>
        Let's return to our code. It looks too cumbersome for the functionality
        it performs because it works with too{' '}
        <a
          href="https://en.wikipedia.org/wiki/Low-level_programming_language"
          target="_blank"
          rel="noopener noreferrer"
        >
          low-level
        </a>
        operations. We will talk in the next block about how to move to a higher
        level of abstraction with Express.js.
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-2-en.zip" download>
          Zip file with the code from this block
        </a>
      </Bubble>
      <br />

      <Level
        id="basic-express-js"
        number="5"
        name="Introduction to Express.js"
        difficulty="Like SuperMario level 🍄 - you need to lose several times to pass."
        objectives="Install Express.js and start the HTTP server with it."
      />

      <VideoWrapper duration="4 min 45 s">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=1024&end=1308"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <p>
        <b>Express.js</b> is a package that provides many features that simplify
        developing <b>Node.js</b> applications. It increases the level of
        abstraction and we do not need to configure the network connection,
        parse headers, methods and query body, and more. To get started, let's
        install{' '}
        <a href="https://www.npmjs.com/package/express" target="_blank">
          it
        </a>{' '}
        in a project using
        <b>npm</b>.
      </p>
      <Code language={CodeLanguage.SHELL}>{'npm i express'}</Code>
      <p>Create a new file and write the code for a basic HTTP server:</p>
      <Code language={CodeLanguage.JS}>{`/* express.js */

// import of express
const express = require('express');
// express-app initialization
const app = express();

// listener for GET-requests to "/" route
app.get('/', function (req, res) {
  res.send('Hello World');
});

// listener for PUT-requests to "/test" route
app.put('/test', function (req, res) {
  res.send('Hello World PUT');
});

// run the server
app.listen(3000);`}</Code>
      <DetailsCard>
        <p>
          <strong>Let's run the code and check if it works</strong>
        </p>
        <>
          <Code language={CodeLanguage.SHELL}>{'node express.js'}</Code>
          <br />
          <img src={express_getImg} alt="express_get" />
          <br />
          <img src={express_postImg} alt="express_post" />
        </>
      </DetailsCard>
      <p>
        Everything works! If we try to send requests to routes that aren't
        described in the code (for example <b>GET</b>: <i>/users</i>), we will
        receive a 404 response. In order to write something like this on nodes,
        we would need about 200 lines of code. Impressive, right? Let's move on.
      </p>
      <p>
        <b>Express.js</b> extends common Node objects{' '}
        <a
          href="https://nodejs.org/docs/latest-v18.x/api/http.html#class-httpclientrequest"
          target="_blank"
        >
          request
        </a>{' '}
        and{' '}
        <a
          href="https://nodejs.org/docs/latest-v18.x/api/http.html#class-httpserverresponse"
          target="_blank"
        >
          response
        </a>{' '}
        , adding a lot of useful features right out of the box. For example, it
        parses <i>query-parameters</i> into an object and can take parts of a
        URL as parameters. In <i>response</i> there are convenient methods to
        format response data:
      </p>
      <Code
        language={CodeLanguage.JS}
      >{`app.get('/:param', function (req, res) {
  console.log(req.query); // query-params object
  console.log(req.params.value); // value of param, located in the URL at the specified position '/:param'
  res.status(200).json({ message: 'Hello World' }); // method "status()", sets status code for response, and "json()" configures Content-Type header for JSON format
});`}</Code>
      <p>
        5 lines, and how many benefits! This is how Express.js conquered the
        world. Currently, there are a huge number of npm packages for express,
        designed to solve various cases. Let's consider one of these - parsing
        the body of the query. Earlier to do this, we would need to add a
        package (officially recognized Best Practice){' '}
        <a href="https://www.npmjs.com/package/body-parser" target="_blank">
          body-parser
        </a>
        . But since it was widely used, the methods from it has been re-added
        under the express methods to provide request body parsing support
        out-of-the-box.
      </p>
      <DetailsCard>
        <p>
          <strong>
            Embed <b>body-parser</b>
          </strong>
        </p>
        <>
          <Code language={CodeLanguage.SHELL}>{'npm i body-parser'}</Code>
          <Code language={CodeLanguage.JS}>{`/* express.js */

// import of express
const express = require('express');
// express-app initialization
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// listener for GET-requests to "/" route
app.get('/', function (req, res) {
  console.log(req.query);
  res.send('Hello World');
});

// listener for PUT-requests to "/test" route
app.put('/test', function (req, res) {
  console.log(req.body);
  res.send('Hello World PUT');
});

// run the server
app.listen(3000);`}</Code>
          <Code language={CodeLanguage.SHELL}>{'node express.js'}</Code>
          <p>Send PUT-request with body:</p>
          <img src={express_bodyImg} alt="express_body" />
          <p>Take a look at logs:</p>
          <img src={express_body_logImg} alt="express_body_log" />
        </>
      </DetailsCard>
      <p>
        We explored enough basic <b>Express.js</b> functionality to start with,
        so now we can take a look at how all this code would be scaled in real
        life.
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-3-en.zip" download>
          Zip file with the code from this block
        </a>
      </Bubble>
      <br />
      <Level
        id="first-project"
        number="6"
        name="Project"
        difficulty="Like watching a painting artist - cool to observe."
        objectives="To understand the structure of a typical project on Node.js/Express.js"
      />

      <VideoWrapper duration="14 min 20 sec">
        <iframe
          src="https://www.youtube.com/embed/wyxUw25CG1k?start=1308&end=2165"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <p>
        And the best part 🍎. Here we will talk about the structure of the
        project, what, where, and why. For a quick start of a project, we can
        use{' '}
        <a
          href="https://www.npmjs.com/package/express-generator"
          target="_blank"
        >
          express-generator
        </a>
        , which is created by the Express team and generates a default starter
        on
        <b>Express.js</b>. It should be installed globally to be accessible
        anywhere from any project. To do this, add the <code>-g</code> flag to
        the installation command:
      </p>
      <Code language={CodeLanguage.SHELL}>{'npm i express-generator -g'}</Code>
      <DetailsCard>
        <>
          <strong>
            After a successful installation, you can check its functionality by
            the classic method - find out the version or run help 🙃
          </strong>
        </>
        <>
          <p>Version:</p>
          <img
            src={express_generator_versionImg}
            alt="express_generator_version"
          />
          <p>Help:</p>
          <img src={express_generator_helpImg} alt="express_generator_help" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>
            Well and now we will generate the project without view templates and
            with the <i>.gitignore</i> file
          </strong>
        </>
        <>
          <img src={express_generatorImg} alt="express_generator" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Let's see what happened</strong>
        </>
        <>
          <img
            src={express_generator_starterImg}
            alt="express_generator_starter"
          />
        </>
      </DetailsCard>
      <p>
        Pay attention to the <code>scripts</code>, in <i>package.json</i>, which
        contains npm scripts for working with the application. In order to start
        the server, we will need to use the command <code>npm start</code>.
      </p>
      <Bubble size="small">
        Article{' '}
        <a
          href="https://blog.nakulrajput.com/task-automation-with-npm-run/"
          target="_blank"
        >
          "Task automation with npm run"
        </a>{' '}
      </Bubble>
      <DetailsCard>
        <>
          <strong>
            For the simplest API server, we don't need the <i>/public</i> folder
            and template rendering initialization, so we'll just delete them.
          </strong>
        </>
        <ol className="regular">
          <li>
            delete the folder <i>/public</i> with all the contents
          </li>
          <li>
            <p>
              make changes to <i>/routes/index.js</i>
            </p>
            <Code language={CodeLanguage.JS}>{`/* /routes/index.js */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express');
});

module.exports = router;`}</Code>
          </li>
          <li>
            <p>
              make changes to <i>app.js</i>
            </p>
            <Code language={CodeLanguage.JS}>{`/* app.js */

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;`}</Code>
          </li>
        </ol>
      </DetailsCard>
      <p>
        Currently, our project implements only one layer - <b>routes</b>, which
        should be responsible <b>ONLY</b> for working with HTTP-requests.
      </p>
      <Bubble size="small">
        Why so radical?{' '}
        <i>
          ... should be responsible <b>ONLY</b> for working ...
        </i>
        . Proper layering of the application is a guarantee of code that will be
        easy to maintain due to the convenient development and clear structure.
        If the layer only works with HTTP requests, then there should be no
        business logic or data handling, and vice versa.
      </Bubble>
      <p>
        Let's make our server smart and give it{' '}
        <span className="tooltip" data-tooltip="🕵️ 007 🔫">
          <u>logic, business logic</u>
        </span>
        . In the world of Express applications, the layer that is responsible
        for business logic is called <b>services</b>, and because it is not
        generated automatically, we will create it manually.
      </p>
      <DetailsCard>
        <>
          <strong>Creating and testing the services layer</strong>
        </>
        <ol>
          <li>
            Create a folder <i>/services</i>
          </li>

          <li>
            Create a file <i>/services/user.service.js</i>{' '}
          </li>

          <li>
            <p>Add a function to the file and export it:</p>
            <Code language={CodeLanguage.JS}>{`/* services/user.service.js */

const getName = (user) => (user ? user.name : null);

module.exports = { getName };`}</Code>
          </li>

          <li>
            <p>
              Import the function from the service to the router, use it to get
              a user's name.
            </p>
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */

var express = require('express');
const { getName } = require('../services/user.service');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Welcome');
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send(\`Your name is \${result}\`);
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;`}</Code>
          </li>
          <li>
            Run the server <code>npm start</code>{' '}
          </li>
          <li>
            <p>
              Send POST-request to the <i>/users</i> route and take a look at
              the response that contains the sent name
            </p>

            <img src={service_testImg} alt="service_test" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        Now the server is able to do something, time to think about how we want
        to store data! There is a <b>repositories</b> layer for this, and we are
        going to implement it.
      </p>
      <DetailsCard>
        <>
          <strong>Creating and testing the repositories layer</strong>
        </>
        <ol className="regular">
          <li>
            Create folder <i>/repositories</i>
          </li>

          <li>
            Create file <i>/repositories/user.repository.js</i>
          </li>

          <li>
            <p>Add a function to the file and export it:</p>
            <Code
              language={CodeLanguage.JS}
            >{`/* repositories/user.repository.js */

const saveData = (data) => {
  if (data) {
    // code for saving data to the DB
    console.log(\`\${data} is saved\`);
    return true;
  } else {
    return false;
  }
};

module.exports = { saveData };`}</Code>
            <Bubble size="small">
              We won't deal with a database in this lecture, so our code is just
              a simulation of working with it. In reality, this layer should
              contain all the work with data: their retrieval, saving, and
              updating.
            </Bubble>
          </li>

          <li>
            <p>
              Import the function from the repository into the service and add
              the function <code>saveName()</code>:
            </p>
            <Code language={CodeLanguage.JS}>{`/* services/user.service.js */
const { saveData } = require('../repositories/user.repository');

const getName = (user) => (user ? user.name : null);

const saveName = (user) => {
  if (user) {
    const isSaved = saveData(user);
    return isSaved;
  } else {
    return null;
  }
};

module.exports = { getName, saveName };`}</Code>
          </li>
          <li>
            <p>
              Import the function from the service into the router and use it to
              work with the request body:
            </p>
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */
var express = require('express');
const { saveName } = require('../services/user.service');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Hello!');
});

router.post('/', function (req, res, next) {
  const result = saveName(req.body);

  if (result) {
    res.send('Data is saved');
  } else {
    res.status(400).send("User wasn't saved");
  }
});

module.exports = router;`}</Code>
          </li>
          <li>
            Run the server <code>npm start</code>
          </li>
          <li>
            Send POST-request to the <i>/users</i> route and take a look at the
            response "Data is saved"
            <img src={repository_testImg} alt="repository_test" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        And the last layer is <b>middlewares</b>, examples of which we have
        already seen in this project. Let's find out how it is configured and
        what it does.
      </p>
      <DetailsCard>
        <>
          <strong>Creating and testing the middlewares layer</strong>
        </>
        <ol className="regular">
          <li>
            Create folder <i>/middlewares</i>
          </li>

          <li>
            Create file <i>/middlewares/auth.middleware.js</i>
          </li>

          <li>
            <p>Add a function to the file and export it:</p>
            <Code
              language={CodeLanguage.JS}
            >{`/* middlewares/auth.middleware.js */

const isAuthorized = (req, res, next) => {
  if (req.headers.authorization === 'admin') {
    next();
  } else {
    res.status(401).send();
  }
};

module.exports = { isAuthorized };`}</Code>
            <Bubble size="small">
              <b>middlewares</b>- perform some actions on data coming through
              them and then they either pass the data to the next function in a
              stack or they end the request-response cycle. The middleware
              function takes three arguments: (req, res, next). We are already
              familiar with the first two objects, and the third is the callback
              function, which informs that all current operations are complete
              and we can proceed to the next step.
            </Bubble>
          </li>

          <li>
            <p>
              Import the middleware to the router and use it to secure the GET
              route:
            </p>
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */

var express = require('express');
const { getName } = require('../services/user.service');
const { isAuthorized } = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/', isAuthorized, function (req, res, next) {
  res.send('Welcome');
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send(\`Your name is \${result}\`);
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;`}</Code>

            <Bubble size="small">
              To initialize the <b>middleware</b>, you can use the
              <code>app.use</code> syntax, or simply pass it as a second
              argument to router.
            </Bubble>
          </li>
          <li>
            <p>
              Run the server <code>npm start</code>
            </p>
          </li>
          <li>
            Send GET-request to the <i>/users</i> with the header{' '}
            <code>Authorization: user</code> and take a look at response - 401
            status
            <img src={middleware_test1Img} alt="middleware_test1" />
          </li>
          <li>
            Send GET-request to the <i>/users</i> with the header{' '}
            <code>Authorization: admin</code> and take a look at response - we
            passed the check
            <img src={middleware_test2Img} alt="middleware_test2" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        And that's it, we covered the basics of Node.js applications structure.
        Now you're a true full-stack 😎
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-1-en.zip" download>
          Zip file with the code from this block
        </a>
      </Bubble>
      <br />

      <Level
        id="finish"
        number="7"
        name="Conclusion"
        difficulty="Like cool water on a summer day - a long-awaited relief."
        objectives="Read, relax, wait half an hour and start the lecture again"
      />
      <p>
        That's it, congratulations! The lecture is completely scrolled, you
        don't need to read anything else. Quickly go to the tabs you opened
        during the lecture and read more. Then give yourself a break. At least
        half an hour... Yes, deadlines and all that, but it will be a bit more
        effective if you give yourself a break to think everything through, and
        then go back and do your homework.
      </p>
      <Level
        id="special"
        number="8"
        name="Bonus"
        difficulty="As at the kitchen - everything works out if you follow the recipe."
        objectives="Deploy the Node.js application on Heroku."
      />

      <p>
        I was told that you all know how to deploy client applications, so why
        not learn to deploy Node.js servers?
      </p>
      <Bubble>
        Here is a{' '}
        <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true">
          link to the official <strong>Heroku</strong> tutorial
        </a>{' '}
        - take a look and try. You may also want to deploy your homework 😉
      </Bubble>
      <ThatsAllFolks source={audio}>
        <b>The End!</b>
      </ThatsAllFolks>
      <Bubble>
        Leave your questions and feedback in the lecture chat at{' '}
        <a href="https://academy.binary-studio.com/">
          <strong>Binary Studio Academy</strong>
        </a>
        . Good luck and don't forget about deadlines! 😉
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.en} />;

export { Page, Head };
