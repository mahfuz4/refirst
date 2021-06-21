import { Component } from 'react'

const Hoc = (OreginalComponent) =>{
    
    class NewComponent extends Component {
        state = {count: 0}
     
        handleClick = () => {
        this.setState ((prevState) => ({count: prevState.count + 1}))

    }

        render() {
            const {count} = this.state

            return(
                <OreginalComponent count={count} handleClick={this.handleClick}/>
                
            )
        }
    }
    return NewComponent
}

export default Hoc