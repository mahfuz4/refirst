// import { Component } from 'react'
// // import  from ''
// export default class HoverCounter extends Component {
//     state = {count: 0}
//      handleClick = () => {
//         this.setState ((prevState) => ({count: prevState.count + 1}))

//     }

//     render() {
//     const {count} = this.state          
//         return(

//             <h1 type="button" onMouseOver={this.handleClick} > Hover here {count}</h1>
//         )
//     }
// }

import Hoc from './hoc'

const HoverCounter = (props) =>{
    const {count, handleClick} = props
    return(
        <h1 type="button" onMouseOver={handleClick} > Hover here {count}</h1>
    )
}
export default Hoc(HoverCounter)