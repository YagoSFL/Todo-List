import React, {Component} from 'react'
import Header from '../template/pageHeader'
import Form from './tarefasForm'
import List from './tarefasLista'
import axios from 'axios'

const URL = 'http://localhost:3333/api/tarefas'

export default class Tarefa extends Component {
    constructor(props){
        super(props)

        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
        this.markAsPending = this.markAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.atualiza()
    }
    
    atualiza(description = ''){
        const search = description ? `&description__regex=/${this.state.description}/` : ''
        axios.get(`${URL}?sort=+concludedAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch(){
       this.atualiza(this.state.description)
    }

    handleClear() {
        this.atualiza()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
         .then(resp => this.atualiza())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.atualiza(this.state.description))
    }

    markAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:true, concludedAt: Date.now()})
            .then(resp => this.atualiza(this.state.description))
    }

    markAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resp => this.atualiza(this.state.description))
    }

    render(){
        return (
            <div className="container">
                <Header name='Lista' />
                <Form description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <List list={this.state.list}
                    handleRemove={this.handleRemove}
                    markAsDone={this.markAsDone}
                    markAsPending={this.markAsPending}/>
            </div>

        )
    }
}