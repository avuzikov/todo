# Description

In this project I am implementing a To-Do list with authorization. As a backend I am using Google Firebase.\
The deployed production build can be found here: https://todo-6ba5c.web.app \
Autodeployment from github is not configured(because otherwise I will expose credentials), so the deployed version can be a little bit behind. \
Feel free to register your own account or use test@test.com 87654321 to log in.\

## Implementation details

### State

I use Redux slices for storing app-wise state. The current state includes login and logout functionality(which could also be implemented with React Context efficiently). However, I chose Redux since in this case adding new global states to the app becomes easier.

### Routing

I use React Router v6 for simulation multipage website. Each page except for login consists of navigation bar(described in MainNavigation.js) and page content. Page contents for different pages are described in /components/pages

### Registration and login-state persistance

I use local storage to keep cridentials of logged in person even after reloading of the page. Authentification part of the website is almost finished.

## Next steps

-Add animations using CSS and react-transition-group\
-Add Unit Tests with Jest\
-Move project to TypeScript\
-Add logout after timer(since Firebase token expires after one hour)\
-Add simple personalized ToDo list, the introduce grouping of ToDos\
-Introduce hooks for different types of HTTP requests to remove repitition\
