import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import './template/custom.css'

import React from 'react'
import Tarefa from './todo/tarefas'
import Menu from './template/menu'


export default props => (
    <div>
      <Menu />
      <Tarefa />
    </div>
)