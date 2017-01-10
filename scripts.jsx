

class Cities extends React.Component {

    render() {
        let cityRows = [];
        this.props.cities.map(function(city, index) {
            cityRows.push(<GoogleCity cityObject={city} key={index} />)
        });
        return(
            <div>{cityRows}</div>
        )
    }
}

function GoogleCity(props) {
    return(
        <div className="city-name">

            {props.cityObject.city}
        </div>
    )
}


function Application(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <CityCards cities={props.cities}/>
                </div>
            </div>
        </div>
    )
}

function MapTile(props) {
    var map = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location}&zoom=11&size=200x300&maptype=road&markers=color:red%7C${props.location}&key=${mapKey}`;
    return (
        <div className="map-tile">
            <img src={map} />
        </div>
    )
}

function CityDetails(props) {
    return(
        <div className="city-card">
            <div className="city-card-header">
                <p>{props.city.yearRank}. {props.city.city}, {props.city.state}</p>
            </div>
            <div className="city-card-body">
                <MapTile location={props.city.latLon} />
            </div>
        </div>
    )
}

function CityCards(props) {
    return(
        <div className="city-card-wrapper">
            {cities.map(function(city, index) {
                return <CityDetails key={index} city={city} />
            })}
        </div>
    )
}

ReactDOM.render(
    <Cities cities={cities}/>,
    document.getElementById('city-wrapper')
)

// ReactDOM.render(
//     <Application cities={cities} />,
//     document.getElementById('city-wrapper')
// )
