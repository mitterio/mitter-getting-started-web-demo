import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Mitter } from '@mitter-io/web'

const regex = /^\/user\/(@[a-zA-Z0-9-]+)/
const loggedUser = (new URL(document.location.href).pathname.match(regex)[1])

// Enter your own credentials below
const userAuth = {
    '@john':
        'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJtaXR0ZXItaW8iLCJ1c2VyVG9rZW5JZCI6IjcwM2RQbG9BNTlBVXNCVlQiLCJ1c2VydG9rZW4iOiJybTQ2ZDRwMmg3OWxtaGZoc3Q2Y2o4ZzZzaCIsImFwcGxpY2F0aW9uSWQiOiJUN0h2Yi1MUmxURy1mRW1XaS1JR05ORiIsInVzZXJJZCI6IkBqb2huIn0.VEyHGAH9uAnea3LssgwwHLmxZ2cBR9AsW30FU2TyuHZywSIN5HgRnJnad9f0GcjU6Ig_O-VjVuMBullcw-fBbA',

    '@amy':
        'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJtaXR0ZXItaW8iLCJ1c2VyVG9rZW5JZCI6InpyUDFRNkhkU2JBWGthUHUiLCJ1c2VydG9rZW4iOiJzbTE4dDc0ZWdjc2wybTQ3cnNxNnU1dGpvcSIsImFwcGxpY2F0aW9uSWQiOiJUN0h2Yi1MUmxURy1mRW1XaS1JR05ORiIsInVzZXJJZCI6IkBhbXkifQ.D0m3f6F7QDwbpdJNerY9LPlH0cTKVLFhGaZfIj-chIjZFnTQfZOOOJeAFuOG9N4VAhS70K7S05cF6O6w32V8pA',

    '@candice':
        'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJtaXR0ZXItaW8iLCJ1c2VyVG9rZW5JZCI6IkJrU3k3eDlRRFR0UnNwaW4iLCJ1c2VydG9rZW4iOiJ0Nm0wbHM0cW5vajhqYjgyM2lwNmR0am9jNyIsImFwcGxpY2F0aW9uSWQiOiJUN0h2Yi1MUmxURy1mRW1XaS1JR05ORiIsInVzZXJJZCI6IkBjYW5kaWNlIn0.QFu_7CB7uXFfqbJsVgTtEFn-4zDt__jilPquCE0wnqMq8f6X2UsOqxVD76scoca4cCLrYRZdf7aABvPlWT7yXA'
}

// Enter the application id from the mitter.io panel
const mitter = Mitter.forWeb(
    'T7Hvb-LRlTG-fEmWi-IGNNF',
    [() => {}],
    'https://api.staging.mitter.io'
)

mitter.setUserAuthorization(userAuth[loggedUser])

ReactDOM.render(
    <App
        mitter={mitter}
        loggedUser={loggedUser}
    />,
    document.getElementById('root')
);

registerServiceWorker();
