# Description

In this project I am implementing a To-Do list. As a backend I am using Microsoft Firebase. CSS modules are being used for CSS code.

## State

I use Redux slices for storing app-wise state. The current state includes login and logout functionality(which could also be implemented with React Context efficiently). However, I chose Redux since in this case adding new global states to the app becomes easier.

## Routing

I use React Router v6 for simulation multipage website. Each page except for login consists of navigation bar(described in MainNavigation.js) and page content. Page contents for different pages are described in /components/pages

## Custom Hooks and HTTP requests

In order to incapculate sending HTTP requests and keeping code lean, a custom hook for sending HTTP requests will be created

## Next steps

-Add animations using CSS and react-transition-group
-Add Unit Tests with Jest
-Move project to TypeScript
-Add logout after timer(since Firebase token expires after one hour)
-Add simple personalized ToDo list, the introduce grouping of ToDos
-Introduce hooks for different types of HTTP requests to remove repitition
