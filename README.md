# Netskope UI Take Home Exercise

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Tech stacks: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/), [Ant Design](https://ant.design/), [Emotion](https://emotion.sh/docs/introduction) and [idb](https://github.com/jakearchibald/idb#indexeddb-with-usability)

## Table of Contents

- [Step to launch](#step-to-launch)
- [Design of this exercise](#design-of-this-exercise)

<a name="step-to-launch"></a>

## Step to launch

```bash
$ docker pull lechewu/react-nginx
$ docker run --rm -it -p 8080:80 react-nginx
```

Navigate to http://localhost:8080, and you should now see app

<a name="design-of-this-exercise"></a>

## Design of this exercise

> This web application achieves requirements with [client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) which means it won't depend on any backend Web API Service. Hence, there only need [nginx](https://www.nginx.com/) to host bundle of web application.

### Homepage

#### First time to visit

> When users first time visit web, web would provide default movie list. In the mean time, web also set list to [Context](https://zh-hant.reactjs.org/docs/context.html) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)

#### Not first time to visit

> Web would provide movie list that stored in IndexedDB and synchronize the list to Context

### Details page

#### Click details on Homepage

> While users click details, web would navigate to Details page and set _id_ of moive to Context, [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

#### Add comments

> After users fill in required fields and click save button, web would update movie list that stored in IndexedDB and Context

#### While refreshing Deatils Page

> Web would get _id_ of movie and movie list from IndexedDB, then set them to Context
