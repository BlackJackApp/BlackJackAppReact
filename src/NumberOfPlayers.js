import React, {Component} from 'react'

class NumberOfPlayers extends Component{

render(){
return(
      <form action = "NumberOfPlayers" method = "GET" id="anyname">
            <label for ="numberField">
            Please Enter The Number of Players
            </label>
            <input name="playersNumber" id="numberField" />
            for (let i=0; i<playersNumber; i++ ){

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
            }
      </form>
)
}
}
export default NumberOfPlayers;