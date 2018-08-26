import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd() 
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return(
        <div className='row'>
        <Grid cols='12 9'>
            <div className='input-field'>
                <i className="material-icons prefix">note_add</i> 
                <input id='description' type='text' onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}/>
                <label htmlFor="description">Tarefa</label>
            </div>
        </Grid>
        <Grid cols='6 3'>
            <div className='posit'>
                <IconButton icone='send' plus='grey-text text-darken-4 right' onClick={props.handleAdd} 
                    color='yellow accent-4' />
                <IconButton icone='search' plus='left' color='grey darken-4' onClick={props.handleSearch}/>
                <IconButton icone='clear' plus='grey-text text-darken-4 left' color='white' 
                    onClick={props.handleClear}/>
            </div>
        </Grid>
    </div>
    
    )
}