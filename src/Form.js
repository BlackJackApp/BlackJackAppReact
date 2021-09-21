import React, {Component} from 'react'

class Form extends Component{

render(){
return(
    <div>
      <form action = "getPlayerName" method = "GET" id="anyname">
            <label for ="nameField">
            Please Enter The Name of The Player
            </label>
            <input name="playerName" id="nameField" />
            <label for ="moneyField">
            Please Enter Your Balance
            </label>
            <input name="playerMoney" id="moneyField" />
            <input type="submit" value= "Play" />
      </form>
    </div>
)
}
}
export default Form;