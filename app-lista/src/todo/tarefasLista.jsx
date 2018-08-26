import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


import moment from 'moment-timezone'

export default props => {

    const renderRows = () => {
        const list = props.list || ''
        return list.map(todo => (
                <tr key={todo._id} className={todo.done ? 'markedAsDone' : ''}>
                    <td>
                        {todo.description}
                    </td>
                    <td>
                        {moment(todo.createdAt).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm')}
                    </td>
                    <td>
                        {todo.done ?
                         moment(todo.concludedAt).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm')
                        : ' - '}
                    </td>
                    <td className='tableActions'>
                        <IconButton icone='check' color='yellow accent-4' hide={todo.done}
                            onClick={() => props.markAsDone(todo)} plus='grey-text text-darken-4'/>
                        <IconButton icone='undo' color='white' hide={!todo.done}
                         onClick={() => props.markAsPending(todo)} plus='grey-text text-darken-4'/>
                         <IconButton icone='delete' color='grey darken-4' 
                            onClick={() => props.handleRemove(todo)}/>
                    </td>
                </tr>
            )
        )
    }

    return (
        <div className='row'>
            <Grid cols='12'>
                <table className="highlight">
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Criada em:</th>
                    <th>Concluída em:</th>
                    <th className='tableActions' >Ações</th>
                </tr>
                </thead>
        
                <tbody>
                {renderRows()}
                </tbody>
                </table>
            </Grid>
        </div>
    )
}