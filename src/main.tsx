import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import 'virtual:windi.css'
import { Home } from './pages/Home'

var log = console.log;

console.log = function () {
    var first_parameter = arguments[0];
    var other_parameters = Array.prototype.slice.call(arguments, 1);

    function formatConsoleDate (date: Date) {
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();

        return '[' +
               ((hour < 10) ? '0' + hour: hour) +
               ':' +
               ((minutes < 10) ? '0' + minutes: minutes) +
               ':' +
               ((seconds < 10) ? '0' + seconds: seconds) +
               '.' +
               ('00' + milliseconds).slice(-3) +
               '] ';
    }

    log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters));
};
const root = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  , root)
