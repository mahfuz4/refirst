import { Component } from 'react'
    
    class Counter extends Component {
        state = {count: 0}
     
        handleClick = () => {
        this.setState ((prevState) => ({count: prevState.count + 1}))

    }

        render() {
            const {render} = this.props
            const {count} = this.state

            return render(count, this.handleClick)
            
   }
    }

export default Counter