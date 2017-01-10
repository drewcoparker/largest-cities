
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

function FreezingVerdict(props) {
    if (props.celsius <= 0) {
        return(
            <p>Water would be frozen at {props.celsius}</p>
        )
    } else {
        return(
            <p>Water would be fluid at {props.celsius}</p>
        )
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return(
            <p>Water would boil at {props.celsius}</p>
        )
    } else {
        return(
            <p>Water would not boil at {props.celsius}</p>
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
        this.props.onChange(event.target.value)
    }

    render() {
        var value = this.props.value;
        var units = this.props.units;
        return(
            <div>
                <label>Enter temperature in question in {units}</label>
                <input value={value} onChange={this.handleChange} />
            </div>
        )
    }

}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            scale: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(value) {
        this.setState({
            scale: 'c',
            value
        })
    }

    handleFahrenheitChange(value) {
        this.setState({
            scale: 'f',
            value
        })
    }

    render() {
        var scale = this.state.scale;
        var value = this.state.value;
        if (this.state.scale === 'c') {
            var fTemp = tryConvert(value, 'c')
            var cTemp = value;
        } else if (this.state.scale === 'f') {
            var fTemp = value;
            var cTemp = tryConvert(value, 'f');
        }
        return(
            <div>
                <TemperatureInput units="Celsius" value={cTemp} onChange={this.handleCelsiusChange} />
                <TemperatureInput units="Fahrenheit" value={fTemp} onChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={Number(cTemp)} />
                <FreezingVerdict celsius={Number(cTemp)} />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('boiling-wrapper')
)
