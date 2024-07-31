# Hunting Buddy - Job Application Tracker App

- package manager used: npm (v10.8.1)

  - https://www.npmjs.com/

- to start application:

  - install dependencies on both the fronend and the backend:

  ```zsh
  npm run setup-project
  ```

  - then start the server:

  ```zsh
  npm run dev
  ```

- dependencies

  - sass (v1.77.8)
    - npm: https://www.npmjs.com/package/sass
    - repo: https://github.com/sass/dart-sass
  - @tanstack/react-query (v4.29.5)
    - npm: https://www.npmjs.com/package/@tanstack/react-query
    - repo: https://github.com/TanStack/query
    - homepage: https://tanstack.com/query/latest
  - @tanstack/react-query-devtools (v4.29.6)
    - npm: https://www.npmjs.com/package/@tanstack/react-query-devtools
    - repo: https://github.com/TanStack/query
    - homepage: https://tanstack.com/query/latest
  - axios (v1.3.6)
    - npm: https://www.npmjs.com/package/axios
    - repo: https://github.com/axios/axios
    - homepage: https://axios-http.com/
  - dayjs (v1.11.7)
    - npm: https://www.npmjs.com/package/dayjs
    - repo: https://github.com/iamkun/dayjs
    - homepage: https://day.js.org/
  - react-icons (v4.8.0)
    - npm: https://www.npmjs.com/package/react-icons
    - repo: https://github.com/react-icons/react-icons
    - homepage: https://react-icons.github.io/react-icons/
  - react-router-dom (v6.10.0)
    - npm: https://www.npmjs.com/package/react-router-dom
    - repo: https://github.com/remix-run/react-router
    - homepage: https://reactrouter.com/en/main
  - react-toastify (v9.1.2)
    - npm: https://www.npmjs.com/package/react-toastify
    - repo: https://github.com/fkhadra/react-toastify
    - homepage: https://fkhadra.github.io/react-toastify/introduction/
  - recharts (v2.5.0)
    - npm: https://www.npmjs.com/package/recharts
    - repo: https://github.com/recharts/recharts
    - homepage: https://recharts.org/en-US/
  - styled-components (v5.3.10)
    - npm: https://www.npmjs.com/package/styled-components
    - repo: https://github.com/styled-components/styled-components
    - homepage: https://styled-components.com/

- UI
  - icons
    - react-icons (v4.8.0)
      - npm: https://www.npmjs.com/package/react-icons
      - repo: https://github.com/react-icons/react-icons
      - homepage: https://react-icons.github.io/react-icons/

### resources & tutorials

- docs:
  - vite
    - https://vitejs.dev/guide/
  - react-router: Migrating to RouterProvider
    - https://reactrouter.com/en/main/upgrading/v6-data
  - TanStack Query
    - https://tanstack.com/query/latest/docs/framework/react/quick-start
  - axios:
    - https://axios-http.com/docs/intro
  - dayjs:
    - https://day.js.org/docs/en/installation/installation
  - styled-components
    - https://styled-components.com/docs
- blogs:
  - [The Power Of CreateBrowserRouter: Optimizing Your React App's Navigation](https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app) by Daxesh Patel
  - [Getting Started with createBrowserRouter in react-router-dom](https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4) by [Pavitra Modi](https://medium.com/@pavitramodi.it)
- Youtube:
  - [React Router in Depth #3 - Router Provider, createBrowserRouter & Outlet](https://www.youtube.com/watch?v=5s57C7leXc4&pp=ygUacmVhY3QgY3JlYXRlYnJvd3NlcnJvdXRlciA%3D) by [Net Ninja](https://www.youtube.com/@NetNinja)
- udemy:
  - [MERN 2024 Edition - MongoDB, Express, React and NodeJS](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/) by [John Smilga](https://www.udemy.com/user/janis-smilga-3/)
    - GitHub:
      - https://github.com/john-smilga/mern-jobify-v2
      - https://github.com/john-smilga

---

<!---

*** Notes ***

### day 1:23/07/2024

- set up frontend using vite

```zsh

npm create vite@latest application-tracker-client -- --template react

```

import some global syles (css) from a template

day 2: 24/07/2024

- install npm packages
- set up react router
- create react components for different pages
- set up nested routes

day 2: 25/07/2024

27/07/2024

- set up content for 404 page
- moved logo into its own react component so I can reuse it in other places

---

challenges:

wins:
This was not my first React project, so for this app I wanted to challenge myself and expand my understanding of the framework. I set up previous application using the 'create-react-app' command so for this project I wanted to learn how to use vite. Although the file structure and jsx extension are slighly different it didn't take me too long to get the hang of it.

Similarly, I have used react router before, but I normally do so using the the `<BrowserRouter>`, `<Route>` and `<Routes>` components. For this project I wanted to learn how to set up the routes using the newer `createBrowserRouter()` function and the `<RouterProvider>` components released with react version??. Those took a bit longer to get working as the syntax for setting up nested routes looks different than it does using the more familar `<Route>` and `<Routes>` but I think it's a great addition to react-router-dom package. Although this might be subjective, I find setting up the routes as an array of objects looks cleaner and it's easier to get an overview over the routes in a project. I will definitely make use of these newer components in future projects.


```JSX
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AddJob, Admin, AllJobs, DashboardLayout, Error, HomeLayout, Landing, Login, Profile, Register, Stats
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

```

This was also the first time I used styled-components. Although the syntax is slightly different, it is pretty similar to the css/scss I'm used to and I managed to give  the app a fully responsive design.

```JSX

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

```

In React Router, `<Route>` and `<Routes>` are components traditionally used for defining routes within a single-page application (SPA). On the other hand, `createBrowserRouter` and `RouterProvider` are newer APIs introduced in React Router v6.4 to provide a more flexible and powerful routing system.

### `<Route>` and `<Routes>`

- **Purpose**: These components are used to define and manage the routing within your React application.
- **Usage**:
  - `<Routes>` is a container for all your route definitions.
  - `<Route>` defines individual routes and their corresponding components.

#### Example:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### `createBrowserRouter` and `RouterProvider`

- **Purpose**: These APIs provide a more declarative way to configure routing, supporting data loading, error handling, and nested routing structures out of the box.
- **Usage**:
  - `createBrowserRouter` is used to create a router instance with a more structured and centralized configuration.
  - `RouterProvider` is used to provide the router instance to your application, similar to how you might use a context provider.

#### Example:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

- https://reactrouter.com/en/main/upgrading/v6-data
- https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app
- https://medium.com/@pavitramodi.it/getting-started-with-createbrowserrouter-in-react-router-dom-e3131820fef4

### Key Differences

1. **Configuration Style**:

   - **Route and Routes**: These components are JSX-based and are typically used within the render method of your component.
   - **createBrowserRouter and RouterProvider**: These are more configuration-based, allowing you to define routes in a more structured manner, supporting nested routes and other advanced features directly.

2. **Features**:

   - **Route and Routes**: Basic routing capabilities.
   - **createBrowserRouter and RouterProvider**: Enhanced features such as data loading, deferred rendering, error handling, and nested routing directly within the route configuration.

3. **API Flexibility**:

   - **Route and Routes**: More straightforward and traditional approach, suitable for simpler applications.
   - **createBrowserRouter and RouterProvider**: Provides a more powerful and flexible API, ideal for complex applications requiring advanced routing capabilities.

4. **Centralized Configuration**:
   - **Route and Routes**: Routes are defined directly within the component tree.
   - **createBrowserRouter and RouterProvider**: Routes are configured in a centralized object, making it easier to manage and understand the routing structure of the application.

### Summary

- Use **`<Route>` and `<Routes>`** for straightforward and traditional JSX-based route definitions within your components.
- Use **`createBrowserRouter` and `RouterProvider`** for a more powerful, declarative, and centralized routing configuration that supports advanced features like nested routes, data loading, and error handling.

Vite and Create React App (CRA) are both tools used to set up and manage React projects, but they have several differences in terms of performance, features, and use cases. Here's a detailed comparison between the two:

### 1. **Performance**

- **Vite**:
  - **Faster Development Builds**: Vite leverages native ES module imports in the browser, enabling it to start the development server almost instantly regardless of the size of the application.
  - **Hot Module Replacement (HMR)**: Vite provides faster HMR, making updates almost instantaneous by only replacing the changed modules without a full page reload.
- **Create React App**:
  - **Slower Development Builds**: CRA uses Webpack, which can be slower, especially for larger projects. Initial startup and subsequent rebuilds can take longer.
  - **Hot Module Replacement (HMR)**: CRA supports HMR, but it can be slower compared to Vite due to the underlying Webpack build process.

### 2. **Bundling**

- **Vite**:

  - Uses Rollup for production builds, which is known for its efficient tree-shaking and smaller bundle sizes.
  - Supports code splitting out of the box.

- **Create React App**:
  - Uses Webpack for both development and production builds. Webpack is highly configurable but can result in larger build times and potentially larger bundle sizes.
  - Also supports code splitting through dynamic `import()` calls, but configuration might be less straightforward compared to Vite.

### 3. **Configuration and Extensibility**

- **Vite**:
  - Designed to be minimal out of the box but highly extensible through plugins.
  - Simpler configuration through a single `vite.config.js` file.
- **Create React App**:
  - Convention over configuration: CRA is designed to work with zero configuration out of the box.
  - Extending CRA requires ejecting, which exposes the underlying Webpack configuration but makes future updates harder.

### 4. **Community and Ecosystem**

- **Vite**:

  - Developed and maintained by the creator of Vue.js, Evan You, and has a growing community.
  - Gaining popularity rapidly due to its performance advantages and modern approach.

- **Create React App**:
  - Created by Facebook and has a large, established community.
  - A lot of resources, tutorials, and third-party tools are available due to its long-standing presence in the React ecosystem.

### 5. **Features**

- **Vite**:

  - Support for multiple frameworks: While CRA is specific to React, Vite can be used with Vue, Svelte, and other frameworks.
  - Modern JavaScript and TypeScript support out of the box.

- **Create React App**:
  - Focused on React projects with robust support for JSX and React-specific features.
  - Supports modern JavaScript and TypeScript with minimal configuration.

### 6. **Build Output and Optimization**

- **Vite**:

  - Produces highly optimized builds with smaller bundle sizes thanks to Rollup.
  - Efficient tree-shaking and dead code elimination.

- **Create React App**:
  - Produces optimized builds with Webpack, but they can be larger compared to Vite's output.
  - Good support for code splitting and lazy loading.

### Conclusion

**Vite** is a modern build tool that offers faster development builds, better HMR, and smaller production builds, making it an excellent choice for new projects or developers looking for a highly performant setup. **Create React App** is a well-established, easy-to-use tool that provides a solid foundation for React projects with minimal configuration, making it suitable for beginners and projects where community support and stability are paramount.

Choosing between the two depends on your specific needs:

- Use **Vite** if you prioritize fast development times, modern build optimizations, and flexibility with configuration.
- Use **Create React App** if you prefer convention over configuration, need extensive community support, or are starting with React and want a stable, familiar tool.

lessons learned:




day: 31/07/2024
-> logout button
-> dark theme
-> save dark theme to localStorage


App.jsx

```JSX

export const getThemeFromLS = () => {
  const darkThemeActiveLS = localStorage.getItem('darkThemeActive') === 'true';
  document.body.classList.toggle('dark-theme', darkThemeActiveLS);
  return darkThemeActiveLS;
};

getThemeFromLS();

```

DashboardLayout.jsx

```JSX
  import { getThemeFromLS } from '../App';

  const [darkThemeActive, setDarkThemeActive] = useState(getThemeFromLS());

  const toggleDarkTheme = () => {
    const updatedTheme = !darkThemeActive;
    setDarkThemeActive(updatedTheme);
    document.body.classList.toggle('dark-theme', updatedTheme);
    localStorage.setItem('darkThemeActive', updatedTheme);
  };
```

index.css
```CSS
  .dark-theme {
    --text-color: var(--dark-mode-text-color);
    --background-color: var(--dark-mode-bg-color);
    --text-secondary-color: var(--dark-mode-text-secondary-color);
    --background-secondary-color: var(--dark-mode-bg-secondary-color);
  }
```

wins:
I wanted to implement a dark/light theme as well as had never been able to implement this in previous applications I build due to time constraints, so it was important to me to set some time aside during this project to achieve this.
I also thought it would be nice if the theme stayed the same after reloading the page, so I decided to save the theme to active storage once the toggle button is clicked and then automatically apply it again once the page reloads.

```JSX

import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../styledComponents/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { darkThemeActive, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {darkThemeActive ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;

```


31/07/2024

start backend
set up separate json file for backend:

```zsh
npm init -y
```

add server.js file to backend

package.json:
add
  "type": "module",

set up .gitignore

install packages
- bcryptjs@2.4.3
- concurrently@8.0.1
- cookie-parser@1.4.6
- dayjs@1.11.7
- dotenv@16.0.3
- express@4.18.2
- express-async-errors@3.1.1
- express-validator@7.0.1
- http-status-codes@2.2.0
- jsonwebtoken@9.0.0
- mongoose@7.0.5
- morgan@1.10.0
- multer@1.4.5-lts.1
- nanoid@4.0.2
- nodemon@2.0.22
- cloudinary@1.37.3
- dayjs@1.11.9
- datauri@4.1.0
- helmet@7.0.0
- express-rate-limit@6.8.0
- express-mongo-sanitize@2.2.0


set up script in package.json that installs all dependencies:

```zsh
"scripts": {
    "setup-project": "npm i && cd client && npm i"
  },
```

-->
