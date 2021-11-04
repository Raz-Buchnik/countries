import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './components'
import { language } from './stores'

language.setCurrent(null, () => {
  ReactDOM.render(<Main />, document.querySelector('#main'))
})

module.hot.accept(function () {
  window.location.reload();
});