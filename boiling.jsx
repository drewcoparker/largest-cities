
function toCelcius(f) {
    return (f - 32) * 5 / 9;
}

function toFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function tryConvert(value, unit) {
    var tryNumber = Number(value);
    if (isNaN(tryNumber)) {
        return '';
    } else {
        if (unit === 'c') {
            var convertedNumber = toFahrenheit(tryNumber);
        } else if (unit === 'f') {
            var convertedNumber = toCelcius(tryNumber);
        } else {
            return '';
        }
        return convertedNumber;
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return(
            <p>The water would boil at {props.celsius}</p>
        )
    } else {
        return(
            <p>The water would not boil at {props.celsius}</p>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({
        //     value: event.target.value
        // })
        this.props.onChange(event.target.value)
    }

    render() {
        var value = this.props.value;
        var units = this.props.units;
        return(
            <div>
                <label>Enter temperature in question in {units}</label>
                <input placeholder="Temp" value={value} onChange={this.handleChange} />
            </div>
        )
    }

}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            units: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange() {
        this.setState({
            scale: 'c',
            value
        })
    }

    handleFahrenheitChange() {
        this.setState({
            scale: 'f',
            value
        })
    }

    render() {
        return(
            <div>
                <TemperatureInput units="Celsius" value={} onChange={this.handleCelsiusChange} />
                <TemperatureInput units="Fahrenheit" value={} onChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={Number(1)} />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('boiling-wrapper')
)
