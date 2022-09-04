import React, {Component} from 'react';
import Esgs from './components/esgs';
import "./App.css";
import mondaySdk from "monday-sdk-js";


const esgToken = '*******************';
const url = 'https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=';
const mondayToken = '*********************';

var itemId;
var urlToQuery;

const monday = mondaySdk();
monday.setToken(mondayToken);

class App extends Component {
    constructor(props) {
        super(props);
    
        // Default state
        this.state = {
            context: {},
            contextData: "",
            name: ""
        };
    }

    render() {
        return (
            <>
            <Esgs esgs={this.state.esgs} />
            </>
        )
    }

    state = {
        esgs: []
    }; 

    componentDidMount() {
        // TO Do:
        // Get the Item ID for the Item
        monday.listen("context", contextRes => {
            itemId = contextRes.data.itemIds[0];

            // Pass the Item ID in query to Monday API
            monday.api(`query { items( ids: [${itemId}] ) { name }}`).then((itemNameRes) => {
                urlToQuery = url + itemNameRes.data.items[0].name + esgToken;
                debugger;
                fetch(encodeURI(urlToQuery))  
                    .then(res => res.json())
                    .then((data) => {
                        this.setState({ esgs: data })
                    })
                    .catch(console.log);
            });
        });
    }
}

export default App;