    import React, { Component } from 'react';
    import Contacts from './Contacts.js';
    import logo from './logo1.jpg'
    import Header from './Header.js'
    import Form from './Form.js'
    import PlayersNumber from './NumberOfPlayers.js'
    class App extends Component {
    render() {
    return (
    <div>
        <Header/>
        <PlayersNumber/>
    </div>
     );
}
}
        export default App;