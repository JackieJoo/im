# funbox HTML/CSS

## Level 1 

### Q1. Отличия хорошего клиентского приложения от плохого с точки зрения : 

* Пользователя – Интуитивность + хороший(понятный) дизайн, чтобы пользователь мог понять с первых секунд как можно пользоваться сайтом, приложением (Первое впечатление вырисовывается сразу после открытия и если клиент не может сразу найти нужное то скорее всего покинет сайт);
* Быстрота работы(пользователи ждут как правило несколько секунд, если сайт не отобразится то неизбежен уход)
Естественное есть множество мелочей на которые стоит обратить внимание, но я думаю это основа .
* Менеджера проекта – Это соответствие требованиям заказчика .
* Дизайнера – это все та же интуитивность и понятность +  естественно красота и уникальность . Есть уйма красивых сайтов, но при посещении непонятно предназначение .  Если бы я был дизайнером то старался балансировать между красотой и удобством . Конечно все зависит от цели, есть случаи где интуитивность второстепенна и наоборот . 
* Верстальщика – Использование тегов по назначению (Для цитат, повторяющихся элементов, кнопок, полей форм, списков), использование вертикального ритма текста для хорошей читаемости, грамотное использование БЭМ хотя бы в именовании селекторов, не задавать высоту для блоков, и не сбрасывать отступы у всех элементов, кроссбраузерность.
* Серверного программиста – Не буду лить воду и писать общие фразы, еще предстоит изучить этот аспект.

### Q2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.:
* Использование методологий(БЭМ), препроцессоров, стайлгайда которые едины для всех; к скриптам модульный подход (исключение конфликтов) ;
* Комментирование кода - это сэкономит уйму времени вникание в функционал ново пришедшему сотруднику да и действительным тоже;
* Использование системы контроля версии с нормальными описаниями коммитов ; 
* Использование progressive enhancement, дабы обеспечить адекватную работу и дальнейшую поддержку. 

*Проблемы : старый без пояснений код, который дольше разбираться для понимания нежели внести нужные изменения, дополнения. «Завязанность» частей программы друг на друге, что требует слишком детального разбора всего когда дабы не сломать существующую логику. Те же проблемы решения которых предложил выше .*


### Q3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать. 
Использование caniuse.com + различные сервисы для проверки на мобильном (http://quirktools.com/screenfly/;https://www.bing.com/webmaster/tools/mobile-friendliness;Google Mobile Friendly и тд), использование префиксов где нужно + полифиллы js для IE(Можно использовать polyfill.io);
Если правильно использовать эти инструменты и подобные то нужные отображение и функциональность будет практически везде.

### Q4.Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.
Emmet – при написании html, css; Проверка кода, отладка – Developper Tools в Хроме.
Заготовка сборки есть на Grunt, Webpack, препроцессоры использую - LESS. С удовольствием изучу любые упрощающие и помогающие инструменты . 

### Q5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?
Нужно сравнить страницу в Хроме с IE и Safari. Дальше в зависимости от того, что отображается не должным образом искать причину. Может префиксы не стоят или нет поллифила . В зависимости от конкретной проблемы можно искать решение .

### Q6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?
Если в требованиях к проекту нет, то реализую на свой лад, в стиле всего дизайна сайта, после покажу менеджеру/куратору, если что-то не так, то доработаю . 
### Q7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
learn.javascript.ru; stackoverflow; proglib; подписан на рассылку актуальных новостей фронтенда, не помню каких; хабр, medium, coursera( смотрю курсы не только IT ), edX.
Сейчас активно изучаю и практикую js. Не хочу зацикливаться на одном, занимаясь исключительно HTML/CSS
Интересны : наука( не прочь почитать практически обо всем, медицина - особенно ); литература.

### Q8. Расскажите нам немного о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
Хочу изучать computer science, решил начать как бы сверху и постоянно углубляться .
Прохожу курс от OSSU University -  computer science (https://github.com/ossu/computer-science).
Смогу быстро обучиться нужным инструментам и вообще чему угодно новому, тратить на это столько времени сколько потребуется . 
Важнее всего знания и опыт, могу жертвовать ради этого заработной платой лишь бы работать с людьми у которых можно это перенять. Сейчас работаю на портфолио .

*Можете посмотреть простую игру на js -* https://jackiejoo.github.io/pigGameJS/
*Репозиторий игры -* https://github.com/JackieJoo/pigGameJS


## Level 2 
https://jackiejoo.github.io/im/ - gh pages
https://github.com/JackieJoo/im - репозиторий
disabled класс на элементе делает его недоступным для покупки с соответствующими стилями .

