"use strict";(self.webpackChunkbinary_studio_academy_lecture_abstracts=self.webpackChunkbinary_studio_academy_lecture_abstracts||[]).push([[82],{19591:function(a,e,t){t.r(e),t.d(e,{_frontmatter:function(){return b},default:function(){return w},metadata:function(){return y}});var l=t(63366),n=(t(67294),t(64983)),r=t(83105),s=t(39519),o=t(57190),i=t(24666),m=t(3527),c=t(17056),k=t(63513),p=t(26285),d=t(55071),u=t(74742),N=t(18952),v=t(58796),h=["components"],y={orderId:7,author:"Кирило Лесогорський",title:"Modern Java",description:"В цій лекції розглянемо базову інформацію, екосистему та фічі <strong>Java</strong>. Після цього Кирило розповість про структуру gradle проекту та створить невеликий веб-застосунок з використанням веб-серверу Undertow",keywords:["Java","JVM","Modern Java","Undertow"],duration:"1 час 25 хв.",publishedAt:"2021-05-04T00:00:00",hiddenFromMainPage:!0},b={},g={metadata:y,_frontmatter:b},f=r.Fq;function w(a){var e=a.components,t=(0,l.Z)(a,h);return(0,n.kt)(f,Object.assign({},g,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",null,(0,n.kt)("h1",null,(0,n.kt)("strong",null,"Modern java"))),(0,n.kt)(r.SQ,{currentLanguage:"ua",languages:{ru:"lectures/modern-java",ua:"lectures/modern-java/ua"},mdxType:"Language"}),(0,n.kt)(r.U1,{duration:"1 час 24 хв.",mdxType:"VideoWrapper"},(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/U5kfvTeg2sU",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,n.kt)("div",null,(0,n.kt)("div",{className:"author"},(0,n.kt)("div",{className:"avatar-wrapper"},(0,n.kt)("object",{className:"avatar-object",data:v.FI,role:"img","aria-label":"My profile picture"})),(0,n.kt)("div",{className:"profile"},(0,n.kt)("h3",{className:"name"},"Лесогорський Кирило"),(0,n.kt)("ul",{className:"contacts"},(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://www.facebook.com/nempavel",rel:"author",className:"facebook"},(0,n.kt)(s.G,{icon:o.Uv8,className:"icon",mdxType:"FontAwesomeIcon"}),(0,n.kt)("span",null,"@klesogor"))),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://github.com/klesogor",rel:"author",className:"github"},(0,n.kt)(s.G,{icon:o.zhw,className:"icon",mdxType:"FontAwesomeIcon"}),(0,n.kt)("span",null,"klesogor")))),(0,n.kt)("p",{className:"about"},"Кирило працює FullStack розробником в ",(0,n.kt)("a",{href:"https://binary-studio.com"},(0,n.kt)("strong",null,"Binary Studio"))," після того, як закінчив Академію по PHP в 2018 році. В роботі використовує JavaScript і TypeScript, але вважає, що мова - лише інструмент в руках програміста, та у вільний час пробує нові мови та парадигми, такі як Scala, Haskell, F#, Go, Rust і ",(0,n.kt)("i",null,"Java"),". Любить функціональне програмування та комп'ютерні ігри"))),(0,n.kt)("div",{className:"bubble",style:{margin:"-0.5em 1em 1em"}},(0,n.kt)("strong",null,"Привіт, академісти! 👋"),(0,n.kt)("br",null),"Зустрічайте першу профільну лекцію по Java «Modern Java»! Розглянемо, що нового в Java 8-11 та що готовить майбутнє. Але спочатку дисклеймер:",(0,n.kt)("ol",{className:"compact inverted"},(0,n.kt)("li",null,"скоріш за все, ви це знаєте, і це добре😊;"),(0,n.kt)("li",null,"лекція обіцяє бути інформативною ",(0,n.kt)("em",null,"(за використання слів-паразитів і термінів - вибачте)"),";"),(0,n.kt)("li",null,"практичка частина лекції доволі велика, якщо ви впевнені в своїх силах, можете її пропустити."),(0,n.kt)("li",null,"Як бачите, я вельми формальний зануда, але воно само так виходить😢")),"І не забудьте взяти з собою потрібний інструментарій: ",(0,n.kt)("a",{href:"https://git-scm.com/"},(0,n.kt)("strong",null,"Git")),", ",(0,n.kt)("a",{href:"https://www.jetbrains.com/ru-ru/idea/"},(0,n.kt)("strong",null,"Intellij IDEA або інша IDE на вибір")),", ",(0,n.kt)("a",{href:"https://www.oracle.com/java/technologies/javase-downloads.html"},(0,n.kt)("strong",null,"JDK (куди ж без неї)")),". Поїхали?")),(0,n.kt)("div",{id:"table-of-contents",className:"table-of-contents",style:{marginTop:"1em"}},(0,n.kt)(r.Nv,{timeline:[{linkTo:"#welcome-to-java",title:"Welcome to Java world"},{linkTo:"#whats-new-in-java",title:"What's new in Java 8-11"},{linkTo:"#java-ecosystem",title:"Java ecosystem"},{linkTo:"#typical-java-development-environment",title:"Typical Java development environment"}],mdxType:"TimelineOfContents"})),(0,n.kt)(r.aC,{id:"welcome-to-java",number:"1",name:"Welcome to Java world",difficulty:"Beginner",objectives:"Що таке Java і як її варити",mdxType:"Level"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Java")," - це мова програмування загального призначення, заснована на класах, об’єктно-орієнтована та розроблена так, щоб мати як можна менше залежностей реалізації. Вона розроблена з урахуванням парадигми ",(0,n.kt)("strong",{parentName:"p"},"W"),"rite ",(0,n.kt)("strong",{parentName:"p"},"O"),"nce - ",(0,n.kt)("strong",{parentName:"p"},"R"),"un ",(0,n.kt)("strong",{parentName:"p"},"A"),"nywhere(WORA), що означає, що скомпільований код Java може працювати на усіх платформах, які підтримують Java, без необхідності перекомпіляції. Java-застосунки зазвичай компілюються в байт-код, який може працювати на будь-якій віртуальній машині Java(JVM), незалежно від архітектури комп’ютера."),(0,n.kt)("div",{className:"bubble small subtle"},"Ява? Це коли замість «Кобол завдає удар у відповідь» пишуть «удар.нанестиВідповідь (новий Кобол ())» — ось це Ява."),(0,n.kt)("hr",{className:"small"}),(0,n.kt)("ul",null,(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-1-1"}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-1-1"},(0,n.kt)("strong",null,"Java - високорівнева мова")),(0,n.kt)("div",{className:"details-body"},"Окрім того, що Java більше похожа на людську мову, ніж інші машинні коди, Java також бере на себе керування пам'яттю, що значно спрощує розробку та зменшує кількість багів.",(0,n.kt)("div",{className:"gatsby-highlight","data-language":"java"},(0,n.kt)("pre",{parentName:"div",className:"language-java"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},(0,n.kt)("span",{parentName:"code",className:"token comment"},"// C/C++ language allocate memory"),"\n",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"int")," ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"*"),"testArray ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,n.kt)("span",{parentName:"code",className:"token function"},"malloc"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,n.kt)("span",{parentName:"code",className:"token number"},"5")," ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"*")," ",(0,n.kt)("span",{parentName:"code",className:"token function"},"sizeof"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,n.kt)("span",{parentName:"code",className:"token keyword"},"int"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,n.kt)("span",{parentName:"code",className:"token function"},"free"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"("),"testArray",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",(0,n.kt)("span",{parentName:"code",className:"token comment"},"// allocate memory"),"\n",(0,n.kt)("span",{parentName:"code",className:"token class-name"},"ArrayList")," list ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"new")," ",(0,n.kt)("span",{parentName:"code",className:"token class-name"},"ArrayList"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\nlist",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,n.kt)("span",{parentName:"code",className:"token function"},"add"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,n.kt)("span",{parentName:"code",className:"token string"},"'Hi!'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",(0,n.kt)("span",{parentName:"code",className:"token comment"},"// cleanup memory by garbage collector")))),(0,n.kt)("p",null,"Пам'ять керується автоматично."))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-1-2"}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-1-2"},(0,n.kt)("strong",null,"Java - об'єктно-орієнтована мова")),(0,n.kt)("div",{className:"details-body"},"в Java есть:",(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"класи"),(0,n.kt)("li",{parentName:"ul"},"інтерфейси"),(0,n.kt)("li",{parentName:"ul"},"абстрактні класи"),(0,n.kt)("li",{parentName:"ul"},"пакети"),(0,n.kt)("li",{parentName:"ul"},"успадкування ")),(0,n.kt)(i.default,{mdxType:"JavaOOSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-1-3"}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-1-3"},(0,n.kt)("strong",null,"Java - в якійсь-то мірі функціональна мова")),(0,n.kt)("div",{className:"details-body"},(0,n.kt)("ul",null,(0,n.kt)("li",null," Функції вищого порядку за допомогою функціональних інтерфейсів "),(0,n.kt)("li",null," Декілька абстракцій зі світу функціонального програмування, таких як Optional "))))),(0,n.kt)(r.aC,{id:"whats-new-in-java",number:"2",name:"What's new in Java 8-11",difficulty:"Intermediate",objectives:"В Java 8+ було додано багато нових фіч. Вони дуже сильно вплинули на те, як ми пишемо наші програми. Їх знання та застосування на практиці важні для сучасного розробника",mdxType:"Level"}),(0,n.kt)("ul",null,(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-1",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-1"},"Functional Interfaces"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(m.default,{mdxType:"JavaFISnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-2",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-2"},"Stream API"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(c.default,{mdxType:"JavaStreamSnippet"}),(0,n.kt)("p",null,"Часто використовувані операції стрімів:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intermediate",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sorted"),(0,n.kt)("li",{parentName:"ul"},"filter"),(0,n.kt)("li",{parentName:"ul"},"map"))),(0,n.kt)("li",{parentName:"ul"},"Terminal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"collect"),(0,n.kt)("li",{parentName:"ul"},"reduce"),(0,n.kt)("li",{parentName:"ul"},"forEach"),(0,n.kt)("li",{parentName:"ul"},"findAny"),(0,n.kt)("li",{parentName:"ul"},"findFirst")))))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-3",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-3"},"Optional"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)("i",null,"Ah, almost monads"),(0,n.kt)(k.default,{mdxType:"JavaOptionalSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-4",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-4"},"Static, default and private interface methods"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(p.default,{mdxType:"JavaPSDIMSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-5"},"Module system"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(d.default,{mdxType:"JavaModuleSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-6",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-6"},"Try-catch with resources"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(u.default,{mdxType:"JavaTrycatchSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-7",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-7"},"JSHell CLI REPL"),(0,n.kt)("div",{className:"details-body"},"Введіть в терміналі `jshell` та експериментуйте")),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-8",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-8"},"HTTP Client"),(0,n.kt)("div",{className:"details-body"},(0,n.kt)(N.default,{mdxType:"JavaHTTPClientSnippet"}))),(0,n.kt)("li",{className:"details"},(0,n.kt)("input",{type:"checkbox",id:"accordion-2-9",hidden:!0}),(0,n.kt)("label",{className:"summary",htmlFor:"accordion-2-9"},"Other changes"),(0,n.kt)("div",{className:"details-body"},"- GC interface - Nest Based Access Control - Immutable collections - String methods - Run java files from command line with `java` - No-Op GC - CompletableFuture - Variable handles"))),(0,n.kt)(r.aC,{id:"java-ecosystem",number:"3",name:"Java ecosystem",difficulty:"Hard",objectives:"Вивчити екосистему й управління пакетами",mdxType:"Level"}),(0,n.kt)("h3",null,"Види кави, або що можна створювати на Java"),(0,n.kt)("div",{className:"columns"},(0,n.kt)("div",{className:"column col-4"},(0,n.kt)("div",{className:"panel"},(0,n.kt)("div",{className:"panel-header"},(0,n.kt)("a",{href:"https://spring.io/"},(0,n.kt)("strong",null,"Web застосунки"))),(0,n.kt)("div",{className:"panel-body"},"API, MVC, Map-Reduce та багато іншого. Величезний вибір бібліотек та фреймворків"))),(0,n.kt)("div",{className:"column col-4"},(0,n.kt)("div",{className:"panel"},(0,n.kt)("div",{className:"panel-header"},(0,n.kt)("a",{href:"#"},(0,n.kt)("strong",null,"Крос-платформений Desktop"))),(0,n.kt)("div",{className:"panel-body"},"Багатоплатформовий десктоп не дуже затребуваний, однак для застосунків, які потребують доступ до операційної системи або дуже вимогливі до ресурсів, таких як IDE, Java - відмінний вибір"))),(0,n.kt)("div",{className:"column col-4"},(0,n.kt)("div",{className:"panel"},(0,n.kt)("div",{className:"panel-header"},(0,n.kt)("a",{href:"#"},(0,n.kt)("strong",null,"Нативна Android розробка"))),(0,n.kt)("div",{className:"panel-body"},"Нативна розробка застосунків під андроїд. Останнім часом витісняється Kotlin.")))),(0,n.kt)("h3",null,"Стиль написання коду"),(0,n.kt)("p",null,"Стиль написання коду – це набір принципів для конкретної мови програмування, які рекомендують стиль та методи програмування для кожного аспекту програми, написаної на цій мова. Ці угоди зазвичай охоплюють організацію файлів, відступи, коментарі, оголошення, оператори, пробіли, згоди стосовно імен, методи програмування, принципи програмування, практичні правила програмування, передові методи архітектури і т.д. Це керівні вказівки стосовно якості структури програмного забезпечення. Програмістах наполегливо рекомендується дотримуватися цих рекомендацій, для того, щоб поліпшити читабельність вихідного коду та полегшити підтримку програмного забезпечення."),(0,n.kt)("p",null,"В Java немає єдиного стилю написання коду, замість цього – кожен проект обирає стиль під власні потреби. Однак, існує три популярних стиля:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Google style guide"),(0,n.kt)("li",{parentName:"ul"},"Oracle code conventions"),(0,n.kt)("li",{parentName:"ul"},"Spring code style")),(0,n.kt)("h3",null,"Фреймворки та бібліотеки"),(0,n.kt)("p",null,(0,n.kt)("code",{parentName:"p",className:"language-text"},"Фре́ймворк — програмна платформа, що визначаюча структура програмної системи; програмне забезпечення, що полегшує розробку та об’єднання різних компонентів великого програмного проекту.")," - Wikipedia"),(0,n.kt)("img",{src:"https://pbs.twimg.com/media/DvIFxwfXcAAEyWL.jpg"}),(0,n.kt)("p",null,"Фреймворки надають необхідну інфраструктуру для проекту, тим самим зменшуючи кількість бойлерплейту та збільшуючи швидкість розробки.\nВід бібліотеки фреймворк відрізняється використанням принципу інверсії управління - прикладний код, написаний програмістами, викликається із коду фреймворку, що дозволяє абстрагуватися від багатьох низькорівневих операцій."),(0,n.kt)("p",null,"Приклади Java фреймворків і бібліотек:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Spring"),(0,n.kt)("li",{parentName:"ul"},"Play"),(0,n.kt)("li",{parentName:"ul"},"Vert.x"))),(0,n.kt)("li",{parentName:"ul"},"ORMs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Hibernate"),(0,n.kt)("li",{parentName:"ul"},"EclipseLink"),(0,n.kt)("li",{parentName:"ul"},"OpenJPA"))),(0,n.kt)("li",{parentName:"ul"},"Misc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RX Java"),(0,n.kt)("li",{parentName:"ul"},"Apache Hadoop"),(0,n.kt)("li",{parentName:"ul"},"Apache Lucene ")))),(0,n.kt)("h3",null,"Статичні аналізатори (aka лінтери)"),(0,n.kt)("p",null,"Статичний аналізатор – інструмент, який слідкує за коректністю програми, не запускаючи її. Інструменти для статичного аналізу можуть знаходити розповсюджені помилки та антипатерни, які компілятор пропустив. Також, вони можуть слідкувати за відповідністю стилю написання коду, тим самим спрощуючи  життя програмістам."),(0,n.kt)("p",null,"В ",(0,n.kt)("strong",{parentName:"p"},"Java")," для статичного аналізу використовуються такі інструменти:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PMD"),(0,n.kt)("li",{parentName:"ul"},"Cobertura"),(0,n.kt)("li",{parentName:"ul"},"FindBugs"),(0,n.kt)("li",{parentName:"ul"},"Jacoco ")),(0,n.kt)("h3",null,"Профайлери"),(0,n.kt)("p",null,"Ghjafqkths - це інструмент, який відслідковує конструкції та операції Java-байткоду на рівні JVM. Ці конструкції й операції включають створення об’єктів, ітеративне виконання (включаючи рекурсивні виклики), виконання методів, виконання потоків та зборку мусору.\nПриклади профіліровщиків:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JProfiler"),(0,n.kt)("li",{parentName:"ul"},"YourKit"),(0,n.kt)("li",{parentName:"ul"},"VisualVM")),(0,n.kt)("h3",null,"JVM Languages"),(0,n.kt)("p",null,"Java - не єдина JVM мова. Існують й інші мови, які можна компілювати в Java-байткод. Такі мови зазвичай сумісні з існуючим Java-кодом."),(0,n.kt)("p",null,"Приклади таких мов: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Scala"),(0,n.kt)("li",{parentName:"ul"},"Kotlin"),(0,n.kt)("li",{parentName:"ul"},"Clojure"),(0,n.kt)("li",{parentName:"ul"},"Groovy")),(0,n.kt)("h3",null,"Package management"),(0,n.kt)("p",null,'Пакетні менеджери дозволяють перевикористовувати існуючий код та бібліотеки з легкістю. "Зовнішній" по відношенню до проекту код називається ',(0,n.kt)("code",{parentName:"p",className:"language-text"},"залежністю"),".\nВ світі Java активно використовують два пакетних менеджера: ",(0,n.kt)("strong",{parentName:"p"},"Gradle")," і ",(0,n.kt)("strong",{parentName:"p"},"Maven")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Gradle"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Maven"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gradle Build time is short and fast."),(0,n.kt)("td",{parentName:"tr",align:"center"},"Maven performance is slow as compared to Gradle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gradle Scripts are shorter and cleaner."),(0,n.kt)("td",{parentName:"tr",align:"center"},"Maven scripts are a bit lengthy as compared to Gradle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DSL based"),(0,n.kt)("td",{parentName:"tr",align:"center"},"XML-based")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supports incremental compilation"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Does not supports incremental compilation")))),(0,n.kt)("h4",null,"Приклади gradle команд"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Команда"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Опис"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gradle build"),(0,n.kt)("td",{parentName:"tr",align:"center"},"збірка проекту, запуск ",(0,n.kt)("code",{parentName:"td",className:"language-text"},"assemble")," и ",(0,n.kt)("code",{parentName:"td",className:"language-text"},"check")," задач")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gradle clean build"),(0,n.kt)("td",{parentName:"tr",align:"center"},"збірка проекту з нуля, без використання кешу")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"gradle test"),(0,n.kt)("td",{parentName:"tr",align:"center"},"запуск тестів")))),(0,n.kt)(r.aC,{id:"typical-java-development-environment",number:"4",name:"Typical java development envicronment",difficulty:"Easy",objectives:"Дізнатись, що необхідно для розробки на Java окрім JDK",mdxType:"Level"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IDE - Intellij IDEA / Eclipse / NetBeansIDE / VS Code / Text Editor"),(0,n.kt)("li",{parentName:"ul"},"Operating System - Linux / Windows / Mac"),(0,n.kt)("li",{parentName:"ul"},"VM/Container - Vagrant / Docker"),(0,n.kt)("li",{parentName:"ul"},"VCS - Git / SVN / Mercurial")),(0,n.kt)("h2",null,"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Vedenin/useful-java-links"},"Useful java links repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.baeldung.com/"},"Useful java articles and guides"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akullpp/awesome-java"},"List of popular java libraries"))),(0,n.kt)("h2",null,"Additional materials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM"},"Clean code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8"},"GOF Design Patterns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871"},"SICP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.amazon.de/dp/0134685997?tag=hackr03c-21"},"Effective Java"))),(0,n.kt)(r.wO,{mdxType:"ThatsAllFolks"}),(0,n.kt)("div",{className:"bubble"},"А на сьогодні все! Свої запитання та відгуки залишайте на сайті ",(0,n.kt)("a",{href:"https://academy.binary-studio.com/"},(0,n.kt)("strong",null,"Binary Studio Academy")),". Бажаю вам успіхів, не втрачайте мотивації та вчиться з задоволенням. Дякую за увагу!"))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-modern-java-ua-index-mdx-e881d09ee12cebac1321.js.map