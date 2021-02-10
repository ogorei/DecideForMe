import React from "react";
import "../test.css";

class ParentIndecision extends React.Component {
  constructor(props){
    super(props);
    this.deleteAlltasks = this.deleteAlltasks.bind(this);
    this.choseTask= this.choseTask.bind(this);
    this.addTaskhandler= this.addTaskhandler.bind(this);
    this.state={
      options: props.seleccion
    }
}
choseTask(){
const random = Math.floor(Math.random()* this.state.options.length);
const option = this.state.options[random];
alert(option);
}

deleteAlltasks(){
  this.setState(()=>({options:[]}))};

addTaskhandler(userInput){
  this.setState((prevState)=>{
    return{
    options: prevState.options.concat([userInput])
    };

  })
}

  render() {
  const title= 'RELYon';
  const subtitle='やることの優先順位を決めてくれるAPP';
  const age= 32;
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action hasTasks={this.state.options.length > 0}
              choseTask={this.choseTask}/>
      <AddOptions 
             addTaskhandler={this.addTaskhandler}/>
      <Options options={this.state.options}
      deleteAlltasks= {this.deleteAlltasks}/>
      
      <Task />
      </div>
    )
  }
}

const Header =(props)=>{
return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    {props.age && <h3>{props.age}</h3>} {/*only is age was provided display the h3 tag*/ }
    </div>);
};

Header.defaultProps = {
  title:'My default title'
}

class Action extends React.Component {
    render(){
    const btnStyle= {
      backgroundColor:'#66cccc',
      borderRadius:'15px',
      border:'transparent',
      padding:'15px',
      margin:'auto',
      fontSize:'1.2em'
    }
        return (
            <div>
            <button onClick={this.props.choseTask}
            disable={this.props.hasTasks} style={btnStyle} 
            
            >AIによる優先を決める</button></div>
        )
    }
};

class Options extends React.Component {
    render(){

        const divStyle={
          display:'flex',
          flexDirection:'column',
          flexBasis:'80%',
          marginTop:'3%',
          backgroundColor:'#ccc',
          justifyContent: 'center'
        }
        const btnStyle={
          display:'inline-flex',
          width:'200px',
          alignSelf:'center',
          padding:'10px',
          color:'#fff',
          justifyContent: 'center',
          backgroundColor:'#ff6666',
          fontSize: '1.2em',
          borderRadius:'15px',
          border:'#ff6666',
          marginTop: '3%',
          marginBottom:'3%'


        }

    return (
        <div style={divStyle}>
      {this.props.options.map((option)=>
       <Task key= {option} output={option}></Task>)}
         <button style={btnStyle} onClick={this.props.deleteAlltasks}>remove all</button> 
        </div>
   )
    }
}

const Task =(props)=>{
    const optionStyle={
      fontSize: '1em',
      fontWeight: 'bold',
      lineHeight: '25px',
      width:'200px',
      display: 'flex',
      alignSelf:'center',
      justifyContent: 'center',
      color:'#000',
      padding:'10px',
      margin:'1%',
      };
    return(
      <div style={optionStyle}>{props.output}</div>
    )
  }

class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.addTaskhandler= this.addTaskhandler.bind(this);
    this.state={
      error: undefined
    }
  }
  addTaskhandler(e){
    e.preventDefault();

  const userInput = e.target.elements.userInput.value.trim();
  this.setState(()=>{
    return {
      error: 'Please input valid value'
    }
  })

  if(userInput){
    this.props.addTaskhandler(userInput);
    e.target.elements.userInput.value='';
  } 
  } //addTaskhandler end brackets
  render() {

  

    return (
      <div className="myForm">
      <form onSubmit={this.addTaskhandler}>
        <input type="text" name="userInput"></input>
        <button>Add</button>
        </form>
      </div>
    );
  }
}

ParentIndecision.defaultProps ={
  seleccion:['早起きする','納豆を食べる']
}





export default ParentIndecision;
