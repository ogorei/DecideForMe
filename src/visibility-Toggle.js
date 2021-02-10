import React from 'react';


class Visibility extends React.Component{

//default settings
constructor(props){
    super(props);
    this.makeVisible = this.makeVisible.bind(this);
    this.state={
        visibility: false
    };
}

//function    
makeVisible(){
    this.setState((prevState)=>{
    return {
        visibility: !prevState.visibility
    }
    })
}


render(){
const invisibleContent = (
    <div>lorem4099999</div>
)

return (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={this.makeVisible}>
    {this.state.visibility ? 'hide Details': 'show Details'}
    </button>
    {this.state.visibility && ( <p>{invisibleContent}</p>)}
    </div>
)

}

}

export default Visibility;