import React, {Component} from 'react'

class NumberOfPlayers extends Component{

render(){
return(
      <form action = "numberOfPlayers" method = "GET" id="anyname">
            <label for ="numberField">
            Please Enter The Number of Players
            </label>
            <input name="playersNumber" id="numberField" />
      </form>
)
}
}
export default NumberOfPlayers;