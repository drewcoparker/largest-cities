
function Name(props) {
    return(
        <p>{props.textToDisplay}</p>
    )
}


class MyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
            <form>
                <div className="form-control">
                    <label>Name: </label>
                    <input type="text" className="form-control" onChange={this.handleChange} />
                    <Name textToDisplay={this.state.value} />

                </div>
            </form>
        )
    }
}

ReactDOM.render(
    <MyForm />,
    document.getElementById('form-wrapper')
)
