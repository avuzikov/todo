# Description

In this project I implemented a To-Do list with authorization. As a backend I am using Google Firebase.\
The deployed production build can be found here: https://todo-6ba5c.web.app \
Autodeployment from github is not configured(because otherwise I will expose credentials), so the deployed version can be a little bit behind. \
Feel free to register your own account or use test@test.com 87654321 to log in.

## Implementation details

The React code is stored in src directory. In App.js routing logic, depending on presence of authentification token, is written.\
At the moment of writing this description, the components directory consists of 7 folders: forms, functions, hooks, layout, pages, simpleTodos, UI.\

- "forms" includes desctiption of 3 forms, related to authentification: Registration, Login, ChangePassword.
- "functions" has functions which might be useful in different parts of the app and which are not hook. Currently these are validation functions for password, name, email.
- "hooks" consists of custom hooks. Currently it is a hook for user input(logic related to providing feedback to the user during filling in forms) and an http hook(not finished yet).
- "Layout" describes general layout of pages after authorization. Now is a Navigation Bar at the top of the page and main content.
- "pages" includes different pages of the website(Login, ChangePassword, CreateProfile, main page with ToDoList).
- "simpleTodos" has logic of ToDo page. Currently it has 2 main elements: AddTodo and ToDoList, containing ToDo items.
- "UI" keeps general UI components like Card and Button.

### State

I use Redux slices for storing app-wise state. The current state includes login and logout functionality(which could also be implemented with React Context efficiently). However, I chose Redux since in this case adding new global states to the app becomes easier.

### Routing

I use React Router v6 for simulation multipage website. Each page except for login consists of navigation bar(described in MainNavigation.js) and page content. Page contents for different pages are described in /components/pages

### Registration and login-state persistance

I use local storage to keep cridentials of logged in person even after reloading of the page.

## Next steps

- Add animations using CSS and react-transition-group\
- Add Unit Tests with Jest\
- Move project to TypeScript\
- Introduce hook(s) for HTTP requests to remove repitition and other minor refactoring
