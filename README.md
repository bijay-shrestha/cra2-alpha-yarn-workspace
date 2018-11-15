This project is using create-react-app 2 alpha release with Yarn workspace. The monorepo support was reverted before CRA2 GA. 

To run do the following:
- Run `yarn` from the workspace root (or any app or package folder should work also).
- Run `yarn start` from the root to start both apps or `yarn start` from an app folder. 

If you change anything in `packages/core/components/Hello/index.js` and save the change will show in the browser.

Other commands you can run:
- `yarn build` to build production version.
- `yarn test` to run the tests.
- `yarn lint` to run eslint.
- `yarn format` to run prettier.
- `yarn analyze` to analyze the size and chunks of the production build.
- `yarn reset` to clean the workspace node_modules and rebuild workspace dependencies.
