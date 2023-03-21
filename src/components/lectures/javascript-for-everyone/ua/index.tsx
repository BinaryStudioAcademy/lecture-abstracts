import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layouts';
import { SEO } from '~/partials';

import { introPayload, seoPayload, slugPayload } from '../data/data';
import {
  Language,
  VideoWrapper,
  IntroBlueBubble,
  SlackMessage,
  Flute,
  TimelineOfContents,
  Level,
  Code,
  DetailsCard,
  ThatsAllFolks,
  Bubble,
} from '~/components/common';
import {
  ryuAvatar,
  oleksandrKovalovAvatar,
  andriiKarunAvatar,
  olegChulanovskyiAvatar,
  alexandrTovmachAvatar,
  artemManukianAvatar,
  yuriyStetsulaAvatar,
  youAvatar,
  alyonaRapovaAvatar,
  nikitaSemenistyiAvatar,
} from '~/assets/images/avatars/slack-squared';
import { CodeLanguage } from '~/enums/code-language/code-language';
import * as styles from '../assets/stylesheets/javascript-for-everyone.module.scss';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Javascript for everyone</h1>
      <Language currentLanguage="ua" languages={slugPayload} />

      <VideoWrapper duration="22 сек">
        <iframe
          src="https://www.youtube.com/embed/pc0F0FEFij4"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>

      <IntroBlueBubble {...introPayload.ua} />

      <p>
        Студент все ще проходить випробувальний термін у своїй новій компанії і
        все ще використовує Slack для співпраці з іншими розробниками та
        комунікації з клієнтами. Одного теплого весняного вечора в чат пише Ryu
        — колишній клієнт <em>(returning customer, ya-a-a-ay!)</em>, для якого
        раніше було зроблене онлайн-резюме. Він повністю задоволений якістю
        нашої роботи і хоче довірити нам ще один проект &mdash;
      </p>
      <SlackMessage
        senderId="ryu"
        senderName="Ryu"
        senderAvatarUrl={ryuAvatar}
        reactions={[
          { emoji: '💪', count: 13 },
          { emoji: '🥇', count: 9 },
          { emoji: '🎮', count: 7 },
          { emoji: '💀', count: 12 },
          { emoji: '😤', count: 11 },
          { emoji: '🐲', count: 5 },
        ]}
        replies={[
          { name: 'Oleksandr Kovalov', avatarUrl: oleksandrKovalovAvatar },
          { name: 'Andrii Karun', avatarUrl: andriiKarunAvatar },
          { name: 'Oleg Chulanovskyi', avatarUrl: olegChulanovskyiAvatar },
          { name: 'Alexandr Tovmach', avatarUrl: alexandrTovmachAvatar },
          { name: 'Artem Manukian', avatarUrl: artemManukianAvatar },
          { name: 'Yuriy Stetsula', avatarUrl: yuriyStetsulaAvatar },
        ]}
      >
        <div className="message-scene">
          <em>(stares intently at you, his headband fluttering in the wind)</em>
        </div>
        <p>To live is to fight, and to fight is to live.</p>
        <div className="message-scene">
          <em>(clenches his fist)</em>
        </div>
        <p>
          I’ve spent all my life defeating my enemies, perfecting my martial
          skills, and learning the true essence of what it means to be an
          honorable warrior. But now my greatest challenge lies before me.
        </p>
        <div className="message-scene">
          <em>
            (raising his hand into the air, Ryu’s hand is engulfed in flame, and
            he brings it cr-r-r-r-rashing down to the ground, splitting the
            Earth in two as a hot knife would cut through butter)
          </em>
        </div>
        <p>
          <strong>I need my own browser game.</strong>
        </p>
        <Flute />
        <p>
          My master tells me that it’s necessary to promote my “brand image”. I
          have no idea what he means by that, but then again, I am not one to
          question his wisdom. I am sure, in time, the “fanbase” I will acquire
          through this game will bring me great strength in the battles to come.
        </p>
        <div className="message-scene">
          <em>(Ryu once again turns his gaze upon you)</em>
        </div>
        <p>
          Please go forth and complete this task for me. In return, I promise to
          avenge any relatives who may have been killed by your arch nemesis, or
          restore your family honor, or… whatever. We’ll work out contract
          details later.
        </p>
        <div className="message-scene">
          <em>(Ryu turns his back and begins to walk away)</em>
        </div>
        <p>
          For now I will go meditate. Let me know if you have any questions ―
          WiFi is a bit spotty up at the Mountain Temple, but I’ll check my
          email whenever I get the chance.
        </p>
      </SlackMessage>
      <p>
        Отже, жодної специфікації немає, але схоже на те, що цього разу мова йде
        про симулятор "вуличної бійки" — гру, в якій гравець вибирає двох
        бійців, які в свою чергу проводять поєдинок, луплячи один одного руками,
        ногами, своєю головою. У кого скорше "закінчиться життя", той і програв.
        Насправді ж вони не вмирають, бо вони віртуальні.
      </p>
      <SlackMessage
        senderId="ryu"
        senderName="Ryu"
        senderAvatarUrl={ryuAvatar}
        reactions={[
          { emoji: '😤', count: 1 },
          { emoji: '😡', count: 1 },
          { emoji: '🙏', count: 1 },
          { emoji: '😂', count: 10 },
          { emoji: '🤣', count: 8 },
        ]}
        replies={[
          { name: 'You', avatarUrl: youAvatar },
          { name: 'Ryu', avatarUrl: ryuAvatar },
        ]}
      >
        Who isn't real? Me not real?! Your not real, 🤬!
      </SlackMessage>
      <p>
        🤭Ой... 🤔_Або вмирають..._ Замовник не надав жодного конкретного
        технічного завдання, тому складемо його собі самі. Так само і дизайн.
        Нехай на початках це буде просто браузерна гра, в якій один персонаж
        систематично б'є іншого і навпаки, а помірної складності алгоритм
        визначає, якої сили був нанесений удар і скільки життя залишилось в того
        повільного невдахи, що не встиг ухилитись від "з локтя у носа". А там
        далі вже подивимось, який новий функціонал чи дизайн можна встигнути
        закодити до дедлайну. Що ж, запевнити клієнта, що все під контролем і до
        роботи?
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
        replies={[
          { name: 'Ryu', avatarUrl: ryuAvatar },
          { name: 'Andrii Karun', avatarUrl: andriiKarunAvatar },
          { name: 'Oleksandr Kovalov', avatarUrl: oleksandrKovalovAvatar },
          { name: 'Alyona Rapova', avatarUrl: alyonaRapovaAvatar },
          { name: 'Nikita Semenistyi', avatarUrl: nikitaSemenistyiAvatar },
        ]}
      >
        <strong>Yeah, sure, I'm on it, let's go!</strong> I'm gonna target
        modern browsers and will start with the plain JavaScript using new ES6
        features where necessary. Sometime in the future, when the project
        evolves, we'll use libraries like React or Vue.js, but for now, vanilla
        JavaScript will do the job just fine.
      </SlackMessage>
      <br />
      <TimelineOfContents
        timeline={[
          {
            linkTo: '#basic-javascript',
            title: 'Basic JavaScript',
          },
          {
            linkTo: '#building-a-webpage',
            title: 'Building a webpage',
          },
          {
            linkTo: '#modules-transpiling-bundling-etc',
            title: 'Modules, transpiling, bundling, etc.',
          },
        ]}
      />

      <Level
        id="basic-javascript"
        number="1"
        name="Basic JavaScript"
        difficulty="Nothing special 🤷‍♂️."
        objectives="Get a general idea about JavaScript."
      />

      <VideoWrapper duration="22 min 26 sec">
        <iframe
          src="https://www.youtube.com/embed/pLdjZRR9t-s"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <ol className="counted">
        <li>
          <p>
            <strong>
              Ready to try <a href="https://www.javascript.com/">JavaScript</a>?
            </strong>
          </p>
          <p>
            To start with, here are <strong>the main points</strong> you should
            remember about JS:
          </p>
          <p>
            <span className={styles.chip}>Brendan Eich</span>
            <span className={styles.chip}>EcmaScript</span>
            <span className={styles.chip}>script language</span>
            <span className={styles.chip}>dynamic language</span>
            <span className={styles.chip}>weakly typed</span>
            <span className={styles.chip}>first-class functions</span>
            <span className={styles.chip}>object-oriented</span>
            <span className={styles.chip}>prototype-based</span>
            <span className={styles.chip}>single-threaded</span>
            <span className={styles.chip}>asynchronous</span>
          </p>
        </li>{' '}
        <li>
          <p>
            <strong>
              <a href="https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83">
                Putting comments in code
              </a>
            </strong>
          </p>
          <p>
            The syntax of comments is the same as in C++ and in many other
            languages. Comments behave like white space and are discarded during
            script execution.
          </p>
          <Code language={CodeLanguage.JS}>
            {`const style = {
  display: 'flex',
  flexWrap: 'wrap',
  // dominantBaseline: central; not supported by IE 9 :(
};

/*
 * I'm a large and bulky
 * comment
 */
function foo() {
  console.log('bar');
}

/**
 * returns the name of the lecture
 * @param {string} course 'js' | 'net'
 * @returns {string | undefined}
 */
function getLectureName(course) {
  switch (course) {
    case 'js':
      return 'Introduction to JavaScript';
    case 'net':
      return 'C# and .NET framework';
  }
}`}
          </Code>
        </li>{' '}
        <li>
          <p>
            <strong>Declaring block:</strong>
          </p>
          <p>
            A <strong>block statement</strong> (or{' '}
            <strong>compound statement</strong> in other languages) is used to
            group zero or more statements. The <strong>block</strong> is
            delimited by a pair of braces:
          </p>
          <Code language={CodeLanguage.JS}>
            {`{
  // I'm a block and I have my own scope here
}`}
          </Code>
        </li>
        <li>
          <strong>
            Declaring variables: <code>var</code>, <code>let</code> and{' '}
            <code>const</code>
          </strong>
          There are three kinds of declarations in JavaScript:
          <DetailsCard>
            <>
              <code>var</code> declares a variable, optionally initializing it
              to a value
            </>
            <>
              Declaration will be hoisted to the global scope or a function
              block scope. Variable defined inside of the inner scope can
              override another variable from the outer scope.{' '}
              <strong>
                That's why it mustn't be used in the modern JS code!
              </strong>
              <Code language={CodeLanguage.JS}>
                {`var message;
message = 'Hello World';

var name = 'John',
  age = 24;

var count = 10;
if (count > 5) {
  var count = 5; // Not declares a new variable, but using existing hoisted count
}
// count is equal to 5 😰
`}
              </Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>let</code> declares a local block-scoped variable,
              optionally initializing it to a value
            </>
            <>
              Declaration won't be hoisted but will create a new locally scoped
              variable.
              <Code language={CodeLanguage.JS}>
                {`let message;
message = 'Hello World';

let name = 'John',
  age = 24;

let count = 10;
if (count > 5) {
  let count = 5; // Declares a new local variable, which doesn't interfere with the outer scope
  // count is equal to 5 here 👌
}
// count is still equal to 10 👌
`}
              </Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <code>const</code> declares a local block-scoped read-only
              constant variable
            </>
            <>
              Variable cannot be <strong>reassigned</strong>, but objects
              defined with <code>const</code> can be changed
              <Code language={CodeLanguage.JS}>
                {`const PRIMARY_COLOR = '#ccc';
PRIMARY_COLOR = '#fff'; // ❌

const user = {
  name: 'John',
  age: 20,
};
user.name = 'Oleksandr'; // 👌
user.newProp = 'newProp'; // 👌

user = 'newValue'; // ❌`}
              </Code>
            </>
          </DetailsCard>
        </li>
        <li>
          <strong>Data Types</strong>
          According to the <strong>ECMAScript</strong>, there are seven
          primitive types and everything else is an <code>Object</code> type.
          Let’s run over those one by one:
          <DetailsCard>
            <>
              <strong>Boolean</strong>
            </>
            <>
              The boolean type has two values: <code>true</code> and{' '}
              <code>false</code>.
              <Code language={CodeLanguage.JS}>
                {`let isValid = true;
isValid = false;`}
              </Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Number</strong>
            </>
            <>
              An integer or floating point number.
              <Code language={CodeLanguage.JS}>
                {`const age = 23;
const coef = 12.345;

const hex = 0x00111; // hexadecimal, base 16 starts with 0x
const octal = 0o01; // octal, base 8 starts with 0o
const binary = 0b0011; // binary, base 2 starts with 0b`}
              </Code>
              The number type has three symbolic values: <code>+Infinity</code>,
              <code>-Infinity</code>, and <code>NaN</code> (not-a-number).
              <Code language={CodeLanguage.JS}>
                {`const result = 2 / 'text'; // NaN
isNaN(result); // true`}
              </Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>BigInt</strong> <em>(added in ES2020)</em>
            </>
            <>
              Represents who represent whole numbers larger than{' '}
              <code>
                2<sup>53</sup> - 1
              </code>{' '}
              which is larger than maximum value of <code>Number</code> type.
              <Code
                language={CodeLanguage.JS}
              >{`const bigInt = 9007199256474096991n;
const evenLargerInt = BigInt('99007199256474096991');`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>String</strong>
            </>
            <>
              A sequence of characters that represent a text value. JavaScript{' '}
              <strong>strings are immutable</strong>.
              <Code language={CodeLanguage.JS}>{`let str = 'Hello world';
str = 'new string';

let age = 23;
let newStrOld = 'age - ' + age;
let newStr = \`age - \${age}\`;
console.log('first line
second line');

str.length; // 10
str.charAt(2); // w
str.toLowerCase(); // "new string"
str.toUpperCase(); // "NEW STRING"
str.indexOf('str'); // 4
newStr.substring(11, 17); // second
newStr.substr(11, 6); // second`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Symbol</strong>
            </>
            <>
              A Symbol is a unique and immutable primitive value and may be used
              as the key of an object property. So we can “covertly” hide
              something into objects that we need, but others should not see,
              using symbolic properties.
              <Code
                language={CodeLanguage.JS}
              >{`const isAdmin = Symbol('isAdmin');

const user = {
  name: 'John',
  isAdmin: false,
  [isAdmin]: true,
};

console.log(user.isAdmin); // false
console.log(user[isAdmin]); // true`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>undefined</strong>
            </>
            <>
              <code>undefined</code> is a property of the global object. The
              initial value is the primitive value <code>undefined</code>
              <Code language={CodeLanguage.JS}>{`let x; // undefined

const noReturnValue = foo(); // undefined
function foo() {
  return;
}`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>null</strong>
            </>
            <>
              <code>null</code> is a keyword denoting a special empty{' '}
              <em>(null)</em> value.
              <Code language={CodeLanguage.JS}>{'let x = null;'}</Code>
            </>
          </DetailsCard>
        </li>
        <li>
          <strong>
            <a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839">
              Type coercion
            </a>{' '}
          </strong>
          JavaScript variables can be converted to a new variable and another
          data type either by the use of a JavaScript function or automatically
          by JavaScript itself: Converting to <strong>string</strong>:
          <Code language={CodeLanguage.JS}>{`String(null); // "null"
false.toString(); // "false"
12 + 'px'; // "12px"`}</Code>
          Converting to <strong>number</strong>:
          <Code language={CodeLanguage.JS}>{`Number(true) + // 1
  true; // 1
parseInt('3.14', 10); // 3
parseFloat('3.14'); // 3.14
12 - '4'; // 8
12 - 'text'; // NaN
12 + +'4'; // 16`}</Code>
          Converting to <strong>boolean</strong>:
          <Code
            language={CodeLanguage.JS}
          >{`0, '', null, undefined, NaN -> false
Boolean(null); // false
!!null; // false
if (true || 12) { // true
if (true && 0) { // false

if (12) { // will be executed }`}</Code>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"
            title="Standard built-in objects"
          >
            <strong>Standard built-in objects</strong>
          </a>{' '}
          Objects, which are created in the global scope and can be accessed
          wherever in the code. They can be created by the user script or
          provided by the host environment <em>(browser, node)</em>. Let's look
          through the common ones:
          <DetailsCard>
            <>
              <strong>Object</strong>
            </>
            <>
              Represents complex Javascript data type. It is used to store
              various keyed collections and more complex nested entities.
              <Code language={CodeLanguage.JS}>{`const obj = {
  foo: 'bar',
  nested: {
    bar: 'foo',
  },
};

Object.keys(obj); // ['foo', 'nested']
Object.values(obj); // ['bar', { bar: 'foo' }]
Object.entries(obj); // [ ['foo', 'bar'], ['nested', { bar: 'foo' }] ]`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Array</strong>
            </>
            <>
              List-like object, which includes methods to perform traversal and
              mutation operations. Each element can be accessed only by its
              index. Neither the length of a JavaScript array nor the types of
              its elements are fixed.
              <Code language={CodeLanguage.JS}>{`let names;
names = new Array('Anna', 'Alex', 'Alicia');
names = ['Anna', 'Alex', 'Alicia'];

names[0]; // 'Anna'. Indices range [0..n-1]
names.includes('Alex'); // true

arr.push(element); // add to the end
arr.unshift(element); // add to the front
arr.splice(index, 1, element); // insert element on index
arr.splice(index, 1); // remove element on index
arr.pop(); // remove from the end
arr.shift(); // remove from the front`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Map</strong>
            </>
            <>
              Object, which holds key-value pairs and remembers the original
              insertion order of the keys. Any value (both objects and primitive
              values) may be used as either a key or a value.
              <Code language={CodeLanguage.JS}>{`const binarians = new Map();

binarians.set('JsExpert', 'Alicia');
binarians.set('PhpExpert', 'Volodymyr');
binarians.set('JsExpert', 'Alex');

binarians.get('JsExpert'); // 'Alex'
binarians.delete('PhpExpert');`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Set</strong>
            </>
            <>
              Object allows storing unique values of any type, whether primitive
              values or object references. Plays a role as an array of unique
              values.
              <Code language={CodeLanguage.JS}>{`const uniqueNames = new Set();

uniqueNames.add('Alex');
uniqueNames.add('Alicia');
uniqueNames.add('Alex'); // ['Alex', 'Alicia']

uniqueNames.has('Alex'); // true
uniqueNames.delete('Alex');`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>RegExp</strong>
            </>
            <>
              Object which holds pattern used to match character combinations in
              strings.
              <Code
                language={CodeLanguage.JS}
              >{`const regexp = /ab+c/; // compiling literal, preferred
const regexp = new RegExp('ab+c' + variable);
regexp.test('abc'); // true`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Date</strong>
            </>
            <>
              Object represents a single moment in time in a
              platform-independent format. Internally contains a Number that
              represents milliseconds since 1 January 1970 UTC.
              <Code language={CodeLanguage.JS}>{`const dateCurrent = new Date();
const dateMarch = new Date('March 13, 2000, 08:04:20');
dateMarch.getFullYear(); // 2000
dateMarch.getHours(); // 4`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Math</strong>
            </>
            <>
              Object that has properties and methods for mathematical constants
              and functions. Works with Number type, but doesn't support BigInt
              type
              <Code language={CodeLanguage.JS}>{`Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045
...

Math.sin(1); // 0.8414709848078965
Math.cos(1); // 0.5403023058681398
Math.abs(-3); // 3
...

Math.max(1, 2, 3, 10); // 10
Math.min(1, 2, 3, 10); // 1
Math.random(); // [0..1)
...`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>JSON</strong>
            </>
            <>
              Object contains methods for parsing JSON and converting
              stringified values to JSON.
              <Code language={CodeLanguage.JS}>{`const json = {
  value: '123',
};
const stringifiedJson = JSON.stringify(json); // "{"value":"123"}"
const parsedJson = JSON.parse(stringifiedJson); // { value: "123" }`}</Code>
            </>
          </DetailsCard>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
            title="Functions"
          >
            <strong>Functions</strong>
          </a>{' '}
          Function is a "subprogram" that can be called by code external (or
          internal in the case of the recursion) to the function. <br />A
          function is composed of a sequence of statements called the{' '}
          <strong>function body</strong>. Values can be passed to a function,
          and the function will return a value. In JavaScript, functions are{' '}
          <strong>first-class objects</strong>, because they{' '}
          <strong>can have properties and methods</strong> just like any other
          object. <br /> There are three ways to declare function in Javascript:
          <DetailsCard>
            <>
              <strong>Function declaration</strong> - hoisted, has a context
            </>
            <>
              <Code language={CodeLanguage.JS}>{`function foo() {}

foo(); // Can be accessed before declaration

function foo() {
  console.log(\`I'm a hoisted function \${bar()}\`); // "I'm a hoisted function with a nested function"

  function bar() {
    return 'with a nested function';
  }
}

const obj = {
  prop: 1,
  func: contextLog,
};
obj.func();

function contextLog() {
  console.log(this); // { prop: 1, func: f }
}
`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Function expression</strong> - not hoisted, has a context
            </>
            <>
              <Code language={CodeLanguage.JS}>{`const foo = function () {};

const foo = function () {
  const bar = function () {
    return 'with a nested function';
  };
  console.log(\`I'm not a hoisted function \${bar()}\`); // "I'm not a hoisted function with a nested function"
};

foo(); // Must be accessed only after declaration

const obj = {
  prop: 1,
  func: function () {
    console.log(this); // { prop: 1, func: f }
  },
};
obj.func();
`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <>
              <strong>Arrow function</strong> - not hoisted, doesn't have a
              context
            </>
            <>
              <Code language={CodeLanguage.JS}>{`const foo = () => {};

const foo = () => {
  const bar = () => {
    return 'with a nested arrow function';
  };
  console.log(\`I'm not a hoisted arrow function \${bar()}\`); // "I'm not a hoisted arrow function with a nested arrow function"
};

foo(); // Must be accessed only after declaration

const obj = {
  prop: 1,
  func: () => {
    console.log(this); // { Window }
  },

  functionNestedExpressions: function () {
    const nestedExpression = function () {
      console.log(this); // { Window }
    };
    console.log(this); // { prop: 1, func: f, functionNestedExpressions: f, functionNestedArrow: f }
    nestedExpression();
  },

  functionNestedArrow: function () {
    const nestedArrow = () => {
      console.log(this); // { prop: 1, func: f, functionNestedExpressions: f, functionNestedArrow: f }
    };
    console.log(this); // { prop: 1, func: f, functionNestedExpressions: f, functionNestedArrow: f }
    nestedArrow();
  },
};
obj.func();
obj.functionNestedExpressions();
obj.functionNestedArrow();

setTimeout(() => console.log('I have waited a second to run'), 1000);
`}</Code>
            </>
          </DetailsCard>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
            title="Loops and iteration"
          >
            <strong>Loops and iteration</strong>
          </a>{' '}
          Loops offer a quick and easy way to do something repeatedly. The
          statements for loops provided in JavaScript are:
          <DetailsCard>
            <p>
              <code>for</code> statement, <code>break</code> statement,{' '}
              <code>continue</code> statement
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`for (let step = 0; step < stepCount; step++) {
  const value = step * intervalComputed;

  if (value === 0) {
    labelsFromRange.push('0');
    continue;
  }

  const labelText = formatNumber(value, decimalSeparator);
  const labelWidth = getTextWidth(labelText);
  const isLastStep = step === stepCountWithMargin;

  if (isLastStep && remainingAxisLength < labelWidth) {
    break;
  }

  labelsFromRange.push(labelText);
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>while</code> statement
            </p>
            <Code language={CodeLanguage.JS}>{`let level = currentLevel;

while (level >= 0) {
  // do something
  level--;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>do...while</code> statement
            </p>
            <Code language={CodeLanguage.JS}>{`do {
  // do something
  level--;
} while (lavel >= 0);`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>forEach</code> statement
            </p>
            <Code language={CodeLanguage.JS}>{`const users = ['Mike', 'Alex'];
users.forEach((value, index, array) => console.log(value)); // 'Mike', 'Alex'

users.forEach((value, index) => {
  if (index > 0) return; // Skips the iteration
  console.log(value); // 'Mike'
});

// LIFEHACK
// Traverse not all the elements of the huge arrays
users.some((value, index) => {
  if (value === 'Skip me!') return false; // Skips the iteration
  if (index === 1) return true;
  console.log(value); // 'Mike'
});`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>for...of</code> statement
            </p>
            <Code language={CodeLanguage.JS}>{`const users = ['Mike', 'Alex'];
for (let value of users) {
  console.log(value); // Mike, Alex
}

const user = { firstName: 'Mike', lastName: 'Din' };
for (let value of user) {
  console.log(value); // Mike, Din
}
Object.values(user).forEach((value) => console.log(value)); // Mike, Din`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>for...in</code> statement
            </p>
            <Code language={CodeLanguage.JS}>{`const obj = {
  prop1: "I'm a property 1",
  prop2: 'Property indeed!',
};

for (const prop in obj) {
  // OWN + INHERITED
  console.log(prop); // prop1, prop2
}
Object.keys(obj) // ONLY OWN PROPERTIES
  .forEach((value) => console.log(value)); // prop1, prop2`}</Code>
          </DetailsCard>
        </li>
      </ol>

      <Level
        id="building-a-webpage"
        number="2"
        name="Building a webpage"
        difficulty="Let's spice it up 🔥."
        objectives="Gain practical knowledge."
      />

      <VideoWrapper duration="34 min 06 sec">
        <iframe
          src="https://www.youtube.com/embed/UxthnjwGk24"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <ol className="counted">
        <li>
          <DetailsCard isReversed>
            <>
              Get data from remote{' '}
              <strong>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">
                  API
                </a>
              </strong>{' '}
              using <code>fetch</code>
            </>
            <>
              <Code language={CodeLanguage.JS}>{`const API_URL =
  'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: 'token %your_token%',
  },
};

fetch(API_URL, SECURITY_HEADERS);`}</Code>
              <DetailsCard>
                <>
                  What is a <code>Promise</code>?
                </>
                <>
                  <Code
                    language={CodeLanguage.JS}
                  >{`const responsePromise = fetch(API_URL, SECURITY_HEADERS);
console.log(responsePromise);`}</Code>

                  <img src="https://i.imgur.com/iB1wjrw.png" />
                </>
              </DetailsCard>

              <DetailsCard>
                <p>
                  Add <code>then</code> method
                </p>

                <Code
                  language={CodeLanguage.JS}
                >{`responsePromise.then((response) => {
  console.log(response);
});`}</Code>
              </DetailsCard>

              <DetailsCard>
                Get response body
                <Code language={CodeLanguage.JS}>
                  {'responsePromise.then((response) => response.json());'}
                </Code>
              </DetailsCard>

              <DetailsCard>
                <p>
                  Get file content and parse it (<code>Promise</code> chain)
                </p>

                <Code
                  language={CodeLanguage.JS}
                >{`fetch(API_URL, SECURITY_HEADERS)
  .then((response) => response.json())
  .then((file) => {
    const fighters = JSON.parse(atob(file.content));
    console.log(fighters);
  });`}</Code>
              </DetailsCard>
            </>
          </DetailsCard>
        </li>
        <li>
          <DetailsCard isReversed>
            <p>
              Process data from the received (<code>Array</code> or{' '}
              <code>Object</code>)
            </p>

            <Code
              language={CodeLanguage.JS}
            >{`const names = fighters.map((it) => it.name);
const namesStr = names.join('\n');`}</Code>
          </DetailsCard>
        </li>
        <li>
          <DetailsCard isReversed>
            <p>
              Display data using{' '}
              <strong>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">
                  DOM
                </a>{' '}
                API
              </strong>{' '}
              (<code>getElementById</code>, <code>getElementsByClassName</code>,{' '}
              <code>querySelector</code>, etc.)
            </p>

            <Code
              language={CodeLanguage.JS}
            >{`const rootElement = document.getElementById('root');

rootElement.innerText = 'Loading...';

fetch(API_URL, SECURITY_HEADERS)
  .then((response) => response.json())
  .then((file) => {
    const fighters = JSON.parse(atob(file.content));
    const names = fighters.map((it) => it.name);
    const namesStr = names.join('\n');
    rootElement.innerText = namesStr;
  });`}</Code>
          </DetailsCard>
        </li>
        <li>
          Learn more about <strong>Promises</strong>:
          <DetailsCard>
            onRejected handler
            <Code
              language={CodeLanguage.JS}
            >{`fetch(API_URL, SECURITY_HEADERS).then(
  (response) => response.json(),
  (error) => console.warn(error),
);`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>catch</code> method
            </p>

            <Code language={CodeLanguage.JS}>{`fetch(API_URL, SECURITY_HEADERS)
  .then()
  .then()
  .catch((error) => {
    console.warn(error);
    rootElement.innerText = 'Failed to load data';
  });`}</Code>
          </DetailsCard>
          <DetailsCard>
            <code>throw new Error</code>
            <Code
              language={CodeLanguage.JS}
            >{`fetch(API_URL, SECURITY_HEADERS).then((response) => {
  if (!response.ok) {
    throw new Error('Failed load data');
  }
  return response.json();
});`}</Code>
          </DetailsCard>
          <DetailsCard>
            <code>Promise.reject</code>
            <Code language={CodeLanguage.JS}>{`if (!response.ok) {
  return Promise.reject(Error('Failed load data'));
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            Add loading overlay
            <>
              <Code language={CodeLanguage.JSX}>{`<div id="loading-overlay">
  <img src="resources/logo.png" />
</div>

const loadingElement = document.getElementById('loading-overlay');

loadingElement.remove();`}</Code>
            </>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>finally</code>
            </p>
            <Code language={CodeLanguage.JS}>{`fetch(API_URL, SECURITY_HEADERS)
  .then()
  .then()
  .catch()
  .finally(() => {
    loadingElement.remove();
  });`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>Promise.resolve</code>
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`const greetingPromise = Promise.resolve({ value: 'Hello World' });
greetingPromise.then((res) => {
  console.log(res.value + '!');
});`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              How to create a <code>new Promise</code>
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`const promise = new Promise((resolve, reject) => {
  // some asynchronous code
  let isValid = true;

  if (isValid) {
    resolve('Success');
  } else {
    reject(Error('Error'));
  }
});`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>Promise.race</code> and <code>Promise.all</code>
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`const createTimeoutPromise = (message, ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(message), ms);
  });

const one = createTimeoutPromise('first resolved', 2000);
const two = createTimeoutPromise('second resolved', 3000);

const promiseRace = Promise.race([one, two]);
const promiseAll = Promise.all([one, two]);

promiseRace.then((res) => console.log(res)); // first resolved
promiseAll.then((res) => console.log(res)); // ['first resolved', 'second resolved']`}</Code>
          </DetailsCard>
        </li>
        <li>
          <DetailsCard isReversed>
            <>
              Add more <strong>Functions</strong>
            </>
            <>
              <Code
                language={CodeLanguage.JS}
              >{`const BASE_API_URL = 'https://api.github.com/';
const SECURITY_HEADERS = {
  headers: {
    authorization: 'token %your_token%',
  },
};

const rootElement = document.getElementById('root');
const loadingElement = document.getElementById('loading-overlay');

function startApp() {
  const endpoint =
    'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
  const fightersPromise = callApi(endpoint, 'GET');
  fightersPromise.then(
    (fighters) => (rootElement.innerText = getFightersNames(fighters)),
  );
}

function callApi(endpoint, method) {
  const url = BASE_API_URL + endpoint;
  const options = { method, ...SECURITY_HEADERS };

  return fetch(url, options)
    .then((response) =>
      response.ok ? response.json() : Promise.reject(Error('Failed to load')),
    )
    .then((file) => JSON.parse(atob(file.content)))
    .catch((error) => {
      console.warn(error);
      rootElement.innerText = 'Failed to load data';
    })
    .finally(() => {
      loadingElement.remove();
    });
}

function getFightersNames(fighters) {
  return fighters.map((it) => it.name).join('\n');
}

startApp();`}</Code>

              <DetailsCard>
                <p>Default arguments</p>
                <Code language={CodeLanguage.JS}>
                  {"function callApi(endpoind, method = 'GET') {}"}
                </Code>
              </DetailsCard>

              <DetailsCard>
                Async functions
                <>
                  <Code language={CodeLanguage.JS}>{`async function startApp() {
  const endpoint =
    'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
  const fighters = await callApi(endpoint);
  rootElement.innerText = getFightersNames(fighters);

const fighters = await callApi(endpoint);
const fightersArr = await callApi(endpoint);

const [fighters, fightersArr] = await Promise.all([
  callApi(endpoint),
  callApi(endpoint),
]);
}`}</Code>
                </>
              </DetailsCard>

              <DetailsCard>
                Generators
                <Code
                  language={CodeLanguage.JS}
                >{`function* generateSequence() {
  const result = yield 1;
  console.log(result); // 'args'
  yield 2;
  yield 3;
}

let generator = generateSequence();
let one = generator.next(); // {value: 1, done: false}
let two = generator.next('args'); // {value: 2, done: false}
let three = generator.next(); // {value: 3, done: true}`}</Code>
              </DetailsCard>
            </>
          </DetailsCard>
        </li>{' '}
        <li>
          <DetailsCard isReversed>
            <p>
              <strong>Handle errors</strong> using <code>try...catch</code>{' '}
              statement
            </p>
            <Code language={CodeLanguage.JS}>{`async function startApp() {
  try {
    loadingElement.style.visibility = 'visible';

    const endpoint =
      'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
    const fighters = await callApi(endpoint);

    rootElement.innerText = getFightersNames(fighters);
  } catch (error) {
    console.warn(error);
    rootElement.innerText = 'Failed to load data';
  } finally {
    loadingElement.style.visibility = 'hidden';
  }
}

function callApi(endpoint, method = 'GET') {
  const url = BASE_API_URL + endpoint;
  const options = { method, ...SECURITY_HEADERS };

  return fetch(url, options)
    .then((response) =>
      response.ok ? response.json() : Promise.reject(Error('Failed to load')),
    )
    .then((file) => JSON.parse(atob(file.content)))
    .catch((error) => {
      throw error;
    });
}`}</Code>
          </DetailsCard>
        </li>
        <li>
          <p>
            Create more <strong>DOM elements</strong> and add{' '}
            <strong>event listeners</strong>
          </p>

          <DetailsCard>
            Add helper function for creating a DOM element
            <Code
              language={CodeLanguage.JS}
            >{`function createElement({ tagName, className = '', attributes = {} }) {
  const element = document.createElement(tagName);
  element.classList.add(className);

  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key]),
  );

  return element;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>Create name and image elements</p>
            <Code language={CodeLanguage.JS}>{`function createName(name) {
  const nameElement = createElement({ tagName: 'span', className: 'name' });
  nameElement.innerText = name;

  return nameElement;
}

function createImage(source) {
  const attributes = { src: source };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-image',
    attributes,
  });

  return imgElement;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            Create fighter
            <>
              <Code
                language={CodeLanguage.JS}
              >{`function createFighter(fighter) {
  const { name, source } = fighter;
  const nameElement = createName(name);
  const imageElement = createImage(source);
  const element = createElement({ tagName: 'div', className: 'fighter' });

  element.append(imageElement, nameElement);

  return element;
}`}</Code>

              <ul>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
                    <strong>Destructuring assignment</strong>
                  </a>{' '}
                  &mdash; expression that unpacks values from arrays, or
                  properties from objects, into distinct variables.
                  <Code language={CodeLanguage.JS}>{`const obj = {
  a: true,
  b: true,
  c: true,
};

// ❌
const a = obj.a;
const secondProperty = obj.b;

// 👌
const { a, b: secondProperty } = obj;

const words = ['a', 'b'];
const [firstElement] = words; // ['a']`}</Code>
                </li>
              </ul>
            </>
          </DetailsCard>

          <DetailsCard>
            Create fighters
            <>
              <Code
                language={CodeLanguage.JS}
              >{`function createFighters(fighters) {
  const fighterElements = fighters.map((fighter) => createFighter(fighter));
  const element = createElement({ tagName: 'div', className: 'fighters' });

  element.append(...fighterElements);

  return element;
}`}</Code>

              <ul>
                <li>
                  Using the{' '}
                  <a href="https://medium.freecodecamp.org/spread-operator-and-rest-parameter-in-javascript-es6-4416a9f47e5e">
                    <strong>spread operator and rest parameter</strong>
                  </a>
                  :
                  <DetailsCard>
                    <p>
                      How to <strong>spread</strong>?
                    </p>
                    <Code language={CodeLanguage.JS}>{`const words = ['a', 'b'];
const extendedWords = [...words, 'c']; // ['a', 'b', 'c']

const obj = {
  a: true,
  b: true,
};
const extendedObj = {
  ...obj,
  c: true,
}; // { a: true, b: true, c: true }`}</Code>
                  </DetailsCard>
                  <DetailsCard>
                    <p>
                      How to <strong>rest</strong>?
                    </p>
                    <Code language={CodeLanguage.JS}>{`const words = ['a', 'b'];
const [firstElement, ...restElements] = words; // ['a', ['b']]

const obj = {
  a: true,
  b: true,
};
const { a, ...restProps } = obj; // { a: true, restProps: { b: true } }`}</Code>
                  </DetailsCard>
                </li>
              </ul>
            </>
          </DetailsCard>

          <DetailsCard>
            <p>Append fighters to the root element</p>
            <Code
              language={CodeLanguage.JS}
            >{`const fightersElement = createFighters(fighters);

rootElement.appendChild(fightersElement);`}</Code>
          </DetailsCard>

          <DetailsCard>
            Add events
            <>
              <Code language={CodeLanguage.JS}>{`element.addEventListener(
  'click',
  (event) => handleFighterClick(event, 'wrapper'),
  false,
);
imageElement.addEventListener(
  'click',
  (event) => handleFighterClick(event, 'image'),
  false,
);

function handleFighterClick(event, el) {
  console.log(el);
}`}</Code>

              <ul>
                <DetailsCard>
                  <a
                    href="https://javascript.info/bubbling-and-capturing"
                    target="_blank"
                  >
                    <strong>Events processing phases:</strong>
                  </a>

                  <img src="https://i.ibb.co/yd4kd8F/image.png" />
                </DetailsCard>
              </ul>
            </>
          </DetailsCard>
        </li>
        <li>
          <DetailsCard isReversed>
            <p>
              Use{' '}
              <strong>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections">
                  keyed collection
                </a>
              </strong>{' '}
              to hold key-value pairs (<code>Map</code> or <code>Set</code>)
            </p>

            <Code
              language={CodeLanguage.JS}
            >{`const fightersDetailsMap = new Map();

element.addEventListener(
  'click',
  (event) => handleFighterClick(event, fighter),
  false,
);

function handleFighterClick(event, fighter) {
  const { _id } = fighter;

  if (!fightersDetailsMap.has(_id)) {
    // send request here
    fightersDetailsMap.set(_id, fighter);
  }

  console.log(fightersDetailsMap.get(_id));
}`}</Code>
          </DetailsCard>
        </li>
        <li>
          Add <strong>classes</strong> (use inheritance and static properties)
          <DetailsCard>
            <p>
              Create <code>FighterService</code> class
            </p>
            <Code language={CodeLanguage.JS}>{`class FighterService {
  #endpoint =
    'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';

  async getFighters() {
    try {
      const apiResult = await callApi(this.#endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
}
const fighterService = new FighterService();`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              Add <code>View</code> class
            </p>
            <Code language={CodeLanguage.JS}>{`class View {
  element;

  createElement({ tagName, className = '', attributes = {} }) {
    const element = document.createElement(tagName);
    element.classList.add(className);

    Object.keys(attributes).forEach((key) =>
      element.setAttribute(key, attributes[key]),
    );

    return element;
  }
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              What are <em>getters</em> and <em>setters</em>?
            </p>
            <Code language={CodeLanguage.JS}>{`get element() {
  return this.element;
}

set element(value) {
  this.element = value;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              Create <code>Fighters</code> and <code>Fighter</code> class
            </p>
            <Code language={CodeLanguage.JS}>{`class FighterView extends View {
  constructor(fighter, handleClick) {
    super();
    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter, handleClick) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);

    this.element = this.createElement({ tagName: 'div', className: 'fighter' });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener(
      'click',
      (event) => handleClick(event, fighter),
      false,
    );
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: 'span',
      className: 'name',
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createImage(source) {
    const attributes = { src: source };
    return this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes,
    });
  }
}

class FightersView extends View {
  fightersDetailsMap = new Map();

  constructor(fighters) {
    super();
    this.createFighters(fighters);
  }

  createFighters(fighters) {
    const fighterElements = fighters.map((fighter) => {
      const fighterView = new FighterView(fighter, this.handleFighterClick);
      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: 'div',
      className: 'fighters',
    });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event, fighter) {
    this.fightersDetailsMap.set(fighter._id, fighter);
    console.log('clicked');
    // get from map or load info and add to fightersMap
    // show modal with fighter info
    // allow to edit health and power in this modal
  }
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              What is <code>super()</code>, <code>super.parentProperty</code>,
              and <code>super.parentMethod()</code>?
            </p>
            <Code language={CodeLanguage.JS}>{`class Lumberjack {
  cut() {
    console.log('Cutting tree');
  }
}

class SmartLumberjack extends Lumberjack {
  cut() {
    console.log('Measuring sizes of the tree');
    super.cut();
  }
}

const smartLumberjack = new SmartLumberjack();
smartLumberjack.cut();
/*
 * Measuring sizes of the tree
 * Cutting tree
 */`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              Add <code>App</code> class
            </p>
            <Code language={CodeLanguage.JS}>{`class App {
  static rootElement = document.getElementById('root');
  static loadingElement = document.getElementById('loading-overlay');

  static async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';

      const fighters = await fighterService.getFighters();
      const fightersView = new FightersView(fighters);

      App.rootElement.appendChild(fightersView.element);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
    }
  }
}

App.startApp();`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              <code>bind</code>, <code>call</code>, and <code>apply</code>
            </p>
            <>
              <Code language={CodeLanguage.JS}>{`// .bind()
const obj = { a: 1 };
const bindedFunction = foo.bind(obj);
bindedFunction(); // { a: 1 }

function foo() {
  console.log(this);
}

// .call()
const obj = { a: 1 };
foo.call(obj); // { a: 1 }

function foo() {
  console.log(this);
}

// .apply()
const obj = { a: 1 };
const args = ['firstArg', 'secondArg'];
foo.apply(obj, args); // { a: 1 }, 'firstArg', 'secondArg'

foo.call(obj, ...args); // alternative

function foo(arg1, arg2) {
  console.log(this, arg1, arg2);
}

class FightersView extends View {
  constructor(fighters) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
  }

  createFighters(fighters) {
    const fighterElements = fighters.map((fighter) => {
      // 1. Class function with context
      const fighterView = new FighterView(fighter, this.handleClick);

      // 2. Inline context binding
      const fighterView = new FighterView(
        fighter,
        this.handleFighterClick.bind(this),
      );

      // 3. Arrow function
      const fighterView = new FighterView(fighter, (event, fighters) =>
        this.handleFighterClick(event, fighters),
      );

      return fighterView.element;
    });

    // ...
  }
}
`}</Code>
            </>
          </DetailsCard>
        </li>
        <li>
          💥<strong>Boom, done! There is half already!</strong>
        </li>
      </ol>

      <Level
        id="modules-transpiling-bundling-etc"
        number="3"
        name="Modules, transpiling, bundling, etc."
        difficulty="And now we gonna roll 🤸."
        objectives="Get the most out of the JS."
      />

      <VideoWrapper duration="26 min 27 sec">
        <iframe
          src="https://www.youtube.com/embed/ENvG_hw0bV8"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <ol className="counted">
        <li>
          Hold on,{' '}
          <a href="https://medium.com/siliconwat/how-javascript-classes-work-80b0cf483b1d">
            <strong>How JavaScript Classes Work Under the Hood</strong>
          </a>{' '}
          again?
          <DetailsCard>
            <p>
              What's <code>__proto__</code>?
            </p>
            <Code language={CodeLanguage.JS}>{`const person = {
  walk: true,
};

const student = {
  studying: 'Javascript',
};

student.__proto__ = person; // ❌ - controversial and discouraged
Object.setPrototypeOf(student, person); // 👌 - recommended alternative

console.log(student.walk); // true`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              And the <code>constructor</code>?
            </p>
            <Code language={CodeLanguage.JS}>{`function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>How to add a method?</p>
            <Code
              language={CodeLanguage.JS}
            >{`Animal.prototype.makeSound = function () {
  console.log(\`\${this.name} \${this.sound}\`);
};`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>How to create an instance?</p>
            <Code
              language={CodeLanguage.JS}
            >{`const cat = new Animal('Sam', 'meowing');
console.log(cat.sound);
cat.makeSound();`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>But how does inheritance works?</p>
            <Code language={CodeLanguage.JS}>{`function Bird(name, sound) {
  Animal.apply(this, arguments);

  this._home = 'tree'; // Private property naming convention
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  Animal.prototype.makeSound.call(this);
  console.log(\`Bird \${this.name} fly\`);
};

const bird = new Bird('Kiwi', 'singing');
bird.fly();`}</Code>
          </DetailsCard>
        </li>

        <li>
          Let's learn more about the <strong>transpilers</strong> — tools that
          read source code written in one programming language, and produce the
          equivalent code in another language. The most popular one,{' '}
          <a href="https://babeljs.io/">
            <strong>Babel</strong>
          </a>
          , is mainly used to convert ECMAScript 2015+ code into a backwards
          compatible version of JavaScript in current and older browsers or
          environments. Let's try it out:
          <ul>
            <li>
              Install{' '}
              <a href="https://nodejs.org/en/">
                <strong>node.js</strong>
              </a>
              , open <strong>Terminal</strong> in Visual Studio Code{' '}
              <sup>
                <em>(Terminal</em> &rarr; <em>New Terminal)</em>
              </sup>
              , and run <code>npm init</code>.
            </li>
            <li>
              Now install <strong>babel</strong> with{' '}
              <code>npm i -D @babel/core @babel/cli</code>
            </li>
            <li>
              Add <code>"scripts"</code> to the <strong>package.json</strong>{' '}
              file
              <div>
                <Code language={CodeLanguage.JSON}>{`"scripts": {
  "build": "babel index.js -d dist"
}`}</Code>
              </div>
              and run <code>npm run build</code> in the terminal to see if it
              works
            </li>
            <li>
              Set up transpiling of ES2015+ code —{' '}
              <code>npm install @babel/preset-env --save-dev</code>, create a{' '}
              <strong>.babelrc</strong> in the root of your project, with the
              following content:
              <div>
                <Code language={CodeLanguage.JSON}>{`{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "67",
          "firefox": "60"
        }
      }
    ]
  ]
}`}</Code>
              </div>
            </li>
            <li>
              Let's watch for changes by running <code>babel</code> with{' '}
              <code>-w</code> flag
              <div>
                <Code language={CodeLanguage.JS}>{`"scripts": {
  "build": "babel src -d dist -w"
}`}</Code>
              </div>
            </li>
          </ul>
        </li>

        <li>
          What’s great about <strong>ES6 modules</strong>?
          <DetailsCard>
            <p>
              Export functions, objects, or primitive values from the module
              with <code>export</code> statement
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`export const fighterService = new FighterService();

export { callApi as apiHelper };

export default View;

export * from './apiHelper';
export { callApi } from './apiHelper';

export { default } from './View';`}</Code>
          </DetailsCard>
          <DetailsCard>
            <p>
              👆Load that stuff with <code>import</code> statement
            </p>
            <Code
              language={CodeLanguage.JS}
            >{`import App from './src/javascript/app';

import { fighterService } from './services/fightersService';

import { callApi as apiHelper } from '../helpers/apiHelper';

import * as helper from '../helpers/apiHelper';
helper.callApi();`}</Code>
          </DetailsCard>
        </li>

        <li>
          Alright, let's{' '}
          <s>
            <em>npm install everything</em>
          </s>{' '}
          set up{' '}
          <a href="https://webpack.js.org/">
            <strong>Webpack</strong>
          </a>{' '}
          — a module bundler for JavaScript applications:
          <ul>
            <li>
              Install Webpack by running{' '}
              <code>npm install webpack webpack-cli --save-dev</code>, then
              create a file named <strong>webpack.config.js</strong> in the root
              of your project, with the following content:
              <div>
                <Code language={CodeLanguage.JS}>{`const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
};`}</Code>
              </div>
            </li>
            <li>
              Set <code>build</code> command in <strong>package.json</strong>'s{' '}
              <code>scripts</code> key to <code>"build": "webpack"</code>
            </li>
            <li>
              Set up{' '}
              <a href="https://webpack.js.org/loaders/" target="_blank">
                <strong>loaders</strong>
              </a>
              :
              <DetailsCard>
                <p>
                  Add <code>babel-loader</code> to transpile code, as was
                  mentioned before:
                </p>
                <>
                  <p>
                    <code>npm install babel-loader --save-dev</code> and edit{' '}
                    <strong>webpack.config.js</strong> to include{' '}
                    <code>module</code> key:
                  </p>

                  <Code language={CodeLanguage.JS}>{`module: {
  rules: [
    {
      test: /\\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            configFile: './babel.config.js',
            cacheDirectory: true,
          },
        },
      ],
    },
  ];
}`}</Code>

                  <p>
                    Rename <strong>.babelrc</strong> to{' '}
                    <strong>babel.config.js</strong> to consistent with webpack
                    config type and change it's content to:
                  </p>

                  <Code language={CodeLanguage.JS}>{`const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        firefox: '60',
        chrome: '67',
      },
    },
  ],
];

module.exports = { presets };`}</Code>
                </>
              </DetailsCard>
              <DetailsCard>
                <p>
                  Add <code>style-loader</code> and <code>css-loader</code>, so
                  that you could import styles in your JavaScript files with{' '}
                  <code>import './src/styles/styles.css';</code>
                </p>
                <>
                  <p>
                    As usual, just run{' '}
                    <code>npm install css-loader style-loader --save-dev</code>{' '}
                    and edit <strong>webpack.config.js</strong> to include the
                    new rules:
                  </p>
                  <Code language={CodeLanguage.JS}>{`module: {
  rules: [
    {
      test: /\\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    // other rules
  ];
}`}</Code>
                </>
              </DetailsCard>
            </li>

            <li>
              Set up{' '}
              <a href="https://webpack.js.org/plugins/">
                <strong>plugins</strong>
              </a>
              :
              <DetailsCard>
                <p>
                  Add <code>html-webpack-plugin</code> to automate HTML file
                  creation:
                </p>
                <>
                  <p>
                    <code>npm install html-webpack-plugin --save-dev</code> and
                    edit <strong>webpack.config.js</strong> to include{' '}
                    <code>plugins</code> key:
                  </p>

                  <Code language={CodeLanguage.JS}>{`  // other settings
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],`}</Code>
                  <ul>
                    <li>
                      <DetailsCard isReversed>
                        <p>
                          Add <code>html-loader</code> to bundle assets from
                          template <code>.html</code> file:
                        </p>
                        <>
                          <p>
                            <code>npm install html-loader --save-dev</code> and
                            edit <strong>webpack.config.js</strong> to include
                            the new rule:
                          </p>

                          <Code language={CodeLanguage.JS}>{`  // other settings
  module: {
    rules: [
      // other rules
      {
        test: /\\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }`}</Code>
                        </>
                      </DetailsCard>
                    </li>
                  </ul>
                </>
              </DetailsCard>
            </li>

            <li>
              Add{' '}
              <a
                href="https://webpack.js.org/configuration/dev-server/"
                target="_blank"
              >
                <strong>Webpack DevServer</strong>
              </a>{' '}
              — <code>npm install webpack-dev-server --save-dev</code> and
              modify <strong>webpack.config.js</strong> to include{' '}
              <code>devServer</code> and <code>publicPath</code> keys:
              <Code language={CodeLanguage.JS}>{`  output: {
    // other output settings
    publicPath: '/'
  },
  // other Webpack settings
  devServer: {
    port: 9000
  }`}</Code>
              <p>
                Add <code>"dev": "webpack-dev-server"</code> to{' '}
                <strong>package.json</strong>'s <code>scripts</code> key
              </p>
            </li>
            <li>
              <p>
                Maybe add <code>devtool</code> option to the{' '}
                <strong>webpack.config.js</strong> for much better debugging
                experience — <code>devtool: "source-map"</code>
              </p>
            </li>
          </ul>
        </li>
        <li>
          🥁<strong>Badum tss! Refactored!</strong>
        </li>
      </ol>
      <hr />

      <ThatsAllFolks />

      <VideoWrapper duration="21 сек">
        <iframe
          src="https://www.youtube.com/embed/L3qbsVqVnBw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>

      <Bubble>
        Якщо ти доскролив аж до цього моменту, то тоді вітаю — це вже фініш 🙂.
        Дякую за увагу 🙏! Чекаю на запитання та коментарі під цією лекцією у
        особистому кабінеті{' '}
        <a href="https://academy.binary-studio.com/">
          <strong>Binary Studio Academy</strong>
        </a>
        . І звичайно ж — успіхів з домашкою! <strong>Enjoy 🙃</strong>
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };
