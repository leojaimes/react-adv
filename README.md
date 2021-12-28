# Git hub pages install

yarn add -D gh-pages

```

{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.9",
    "@types/react": "^17.0.35",
    "@types/react-dom": "^17.0.11",
    "formik": "^2.2.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "6",
    "react-scripts": "4.0.3",
    "typescript": "^4.5.2",
    "web-vitals": "^2.1.2",
    "yup": "^0.32.11"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.3.2",
    "gh-pages": "^3.2.3"
  }
}


```

# Después de los cambios

## se agrega

- hompage
- predeploy
- deploy

```
{
  "homepage": "https://github.com/leojaimes/react-adv/tree/ghp-dyforms",
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.9",
    "@types/react": "^17.0.35",
    "@types/react-dom": "^17.0.11",
    "formik": "^2.2.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "6",
    "react-scripts": "4.0.3",
    "typescript": "^4.5.2",
    "web-vitals": "^2.1.2",
    "yup": "^0.32.11"
  },
  "scripts": {
    "predeploy": "yarn build && ",
    "deploy" :"gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.3.2",
    "gh-pages": "^3.2.3"
  }
}


```

# Error en las rutas al dar refresh

So as suggested by that link, I added a \_redirects file inside the /public folder like /public/\_redirects. I then pasted /\* /index.html 200 into the \_redirects file. I did all that in my VS Code, after which I pushed to github and then ofcourse my netlify re-deploys automatically everytime I push to github. My problem was solved and refresh nolonger brings the 404 error.

https://create-react-app.dev/docs/deployment/#netlify
