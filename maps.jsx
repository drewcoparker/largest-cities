
var map = new google.maps.Map(
    document.getElementById('map'),
    {
        center: {lat: 39.8282, lng: -98.5795},
        zoom: 4
    }
);

var infoWindow = new google.maps.InfoWindow({});
var markers = [];

function createMarker(city) {
    var icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFE7569';
    var cityLatLong = {
        lat: city.lat,
        lng: city.lon
    }
    var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: cityLatLong,
        map: map,
        title: city.city
    });

    google.maps.event.addListener(marker, 'click', function(event) {
        infoWindow.setContent(`<h2> ${city.city}</h2><div>${city.state}</div><div>${city.city}</div>`);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}

class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCities: this.props.cities
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateMarkers = this.updateMarkers.bind(this)
    }

    handleInputChange(event) {
        var newFilterValue = event.target.value;
        var filteredCitiesArray = [];
        this.props.cities.map(function(currentCity, index) {
            if (currentCity.city.indexOf(newFilterValue) !== -1) {
                filteredCitiesArray.push(currentCity);
            }
        });
        this.setState({
            currentCities: filteredCitiesArray
        })
    }

    updateMarkers(event) {
        event.preventDefault();
        markers.map(function(marker, index) {
            marker.setMap(null);
        });
        this.state.currentCities.map(function(city, index) {
            createMarker(city);
        });
    }

    render() {
        let cityRows = [];
        this.state.currentCities.map(function(city, index) {
            createMarker(city);
            cityRows.push(<GoogleCity cityObject={city} key={index} />)
        });
        return(
            <div>
                <div className="city-search-form">
                    <form className="form-inline" onSubmit={this.updateMarkers}>
                        <div className="form-group">
                            <label>Search</label>
                            <input type="text" className="form-control" onChange={this.handleInputChange}/>
                            <button type="submit" className="btn btn-primary btn-sm">Update</button>
                        </div>
                    </form>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>City</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cityRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

class GoogleCity extends React.Component {
    constructor(props){
        super(props);
        this.handleClickedCity = this.handleClickedCity.bind(this);
    }


    handleClickedCity(event) {
        console.log("someone clicked on a city");
        google.maps.event.trigger(markers[this.props.cityObject.yearRank - 1], 'click');
    }

    render() {
        return(
            <tr onClick={this.handleClickedCity}>
                <td className="city-rank">{this.props.cityObject.yearRank}</td>
                <td className="city-name">{this.props.cityObject.city}</td>
                <td className="city-population">{this.props.cityObject.yearEstimate}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <Cities cities={cities}/>,
    document.getElementById('cities-wrapper')
)
