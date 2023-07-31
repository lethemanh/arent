# Arent test

## Install & Start

```shell
npm i
npm run start
```

## Structure

```js
|- src/
  |- app/
    |- containers/
    |- components/
    |- layouts/
    |- pages/
    |- index.tsx
  |- styles/
  |- theme/
  |- utils/
  |- index.tsx
|- package.json
|- tsconfig.json
```

In core, app contains the application's main components, such as containers, components, and layouts. Styles contains global CSS styles, and theme contains variables and functions for theming the application and utils contains utility functions. config.ts contains environment variables and configuration values.

The project structure is organized as follows:

- `src/` contains all the source code for the project.
  - `app/` contains the components, hooks, and layout used in the application.
    - `containers/` contains the high-level components of the application, which are responsible for handling data and passing it down to lower-level components.
    - `components/` contains the lower-level components that are used to compose the containers.
    - `layout/` contains the overall layout of the application, including the header and footer.
    - `pages/` contains the different pages that make up the web application.
      - `index.tsx` is the entry point for the web application components.
  - `styles/` contains all the global styles used in the application.
  - `theme/` contains the theme for the application, including colors, typography, and other design-related properties.
  - `utils/` contains all the utility functions and classes used throughout the application.
  - `index.tsx` is the entry point for the web application. Application configuration variables, such as API URLs and environment variables.
- `package.json` contains all the NPM packages used in the project, as well as the build and start scripts.
- `tsconfig.json` contains the TypeScript configuration for the project.
