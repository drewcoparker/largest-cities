
function Inputs(props) {
    return(
        <input type="text" value={props.value} className="form-control"  />
    )
}

class CreditInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
        this.handleCreditChange = this.handleCreditChange.bind(this)
    }

    handleCreditChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
                <div className="form-group">
                    <label>Credit: </label>
                    <Inputs onChange={this.handleCreditChange} />
                </div>
        )
    }
}

class BillInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
        this.handleBillChange = this.handleBillChange.bind(this)
    }

    handleBillChange(event) {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
                <div className="form-group">
                    <label>Bill: </label>
                    <input type="text" className="form-control" onChange={this.handleBillChange} />
                </div>
        )
    }
}

function Balance(props) {
    return(
        <div className="totaled">
            <div className="totaled-text">
                <span>Your balance:</span>
            </div>
        </div>
    )
}

function Form(props) {
    return(
        <div className="form-wrapper">
            <form>
                <BillInput />
                <CreditInput />
            </form>
            <Balance />
        </div>
    )
}

ReactDOM.render(
    <Form />,
    document.getElementById('form-wrapper')
)
