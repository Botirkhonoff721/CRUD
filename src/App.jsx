import React from 'react';
import {dataList }from './data'
import './App.css';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: '',
      status: '',
      data: dataList,
      active: null
    }
  }
  render(){
  
     const onDelete=(id)=>{
       const rest = this.state.data.filter((value)=>value.id !== id)
       this.setState({data:[...this.state.data,rest]})
    }     
    const onChange=(e)=>{
      console.log(e.target.name)
        this.setState({active:{ ...this.state.active,
          [e.target.name]:e.target.value
        }})
    }
 
    const onEdit=(value)=>{
     this.setState({active: value})
    }
    const onSave=()=>{
      const res = this.state.data.map((value)=>value.id ===this.state.active.id ?this.state.active : value)
      this.setState({data: res, active: null})
    }
         
    return(
      <div>
        <h1 className='task'><b><i>CR</i></b>UD</h1>
        <hr />
        <hr />
        <table border='1'>
          <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th>DELETE</th>
                <th>UPDATE</th>
              </tr>
          </thead>
          <tbody>

        {
          this.state.data.map(({id,name,status})=>(
            <tr key={id}>
              <td>{id}</td>
              <td>{ this.state?.active?.id === id ? <input name='name' onChange={onChange} value={this.state.active.name} />:name}</td>
              <td> {this.state?.active?.id === id ? <input name='status' onChange={onChange} value={this.state.active.status} />:status}</td>
            
             <td><button onClick={()=>onDelete(id)}>delete</button> </td>   
             <td><button onClick={()=>
              {
                this.state.active 
                ? onSave()
                :onEdit({id,name,status})}
              }
              >{this.state?.active?.id === id ? 'Save' : 'Edit'}</button> </td>   
              

            </tr>  
          ))
        }
        </tbody>
        </table>
      </div>

    )
  }
}
export default Test