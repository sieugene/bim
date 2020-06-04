## Результат - https://sieugene.github.io/bim-test
`Выполнено`
```sh
 Базовые ✔
 Расширенные ✔
```
Тестовые задания на позицию `стажера, junior разработчика и разработчика` в компанию Айбим.
Исходные данные:
Все задачи базируются на данных в приложенных файлах small_data и big_data.
В файлах содержатся файлы одинаковые по структуре, но отличающиеся объемом.
В файлах содержится информация о людях (Persons) и контактах людей (Contacts).
Файлы предоставлены в двух форматах xml и json, можно пользоваться любыми файлами в
качестве источника данных.
Структура входных данных:
Person. Поля: id, name, age.
Contacts. Поля: From, To, Member1_ID, Member2_ID
Общие правила:
Вы можете выполнить любое количество дополнительных заданий, не обязательно выполнять все
задания, однако, желательно выполнить хотя бы базовые задания.
Преимуществом выполнения Расширенных заданий является то, что это позволяет нам оценить
кандидатов не только на позицию стажировки или junior разработчика, но и на более высокие
позиции.
Приветствуется любая инициатива и креатив при решении задач, нет никаких ограничений по
использованию библиотек, фреймворков и технологий.
Задания для позиции
РАЗРАБОТКА WEB-ПРИЛОЖЕНИЙ - FRONTEND (Javascript)
# 1. Базовые задания
- Создать скрипт для отображения таблицы с данными о людях (Person) и вывести в
таблицу. Разрешается использование только plain ECMAScript любой версии (без
дополнительных фреймворков и библиотек).
Столбцы таблицы: ID, ФИО, Возраст
- Сделать возможность сортировки данных по фамилии, имени и возрасту.


# 2. Расширенные задания
### Добавить кнопку удаления строки.
По клику на которую строка удаляется.
### Добавить кнопку добавления строки.
По клику на которую отображается форма с 3
полями (ID, ФИО, Возраст). Появляется кнопка "Сохранить": по клику форма валидируются
(см. п. 3 "Правила валидации полей формы").
### Добавить кнопку редактирования строки.
По клику на которую все столбцы в строке
становятся редактируемыми: отображается форма с 3 полями (ID, ФИО, Возраст).
Появляется кнопка "Сохранить": по клику форма валидируются (см. п. 3 "Правила
валидации полей формы").

### Правила валидации полей формы

| Поле формы | Столбец | Тип поля | Правила валидации |
| ------ | ------ | ------ | ------ |
| id | ID | Числовое поле | обязательное, уникальное для таблицы |
| name | ФИО | Текстовое поле| обязательное, до 100 символов|
| age | Возраст | Числовое поле | обязательное, до 1000, 4 знака в дробной части |


При успешной валидации форма скрывается.
### 1
![demo](https://github.com/sieugene/bim-test/blob/master/src/assets/gh/1.png?raw=true)
### 2
![demo](https://github.com/sieugene/bim-test/blob/master/src/assets/gh/2.png?raw=true)
### 3
![demo](https://github.com/sieugene/bim-test/blob/master/src/assets/gh/3.png?raw=true)
### 4
![demo](https://github.com/sieugene/bim-test/blob/master/src/assets/gh/4.png?raw=true)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
