
var cities = [
    {
        yearRank: '1',
        city: 'New York',
        state: 'New York',
        yearEstimate: '8,491,079',
        lastCensus: '8,175,133',
        change: '+3.86%',
        landArea: '302.6 sq mi',
        lastPopDensity: '27,012 per sq mi',
        lat: 40.6643,
        lon: -73.9385,
        latLon: '40.6643,-73.9385'
    },
    {
        yearRank: '2',
        city: 'Los Angeles',
        state: 'California',
        yearEstimate: '3,928,864',
        lastCensus: '3,792,621',
        change: '+3.59%',
        landArea: '468.7 sq mi',
        lastPopDensity: '8,092 per sq mi',
        lat: 34.0194,
        lon: -118.4108,
        latLon: '34.0194,-118.4108'
    },
    {
        yearRank: '3',
        city: 'Chicago',
        state: 'Illinois',
        yearEstimate: '2,722,389',
        lastCensus: '2,695,598',
        change: '+0.99%',
        landArea: '227.6 sq mi',
        lastPopDensity: '11,842 per sq mi',
        lat: 41.8376,
        lon: -87.6818,
        latLon: '41.8376,-87.6818'
    },
    {
        yearRank: '4',
        city: 'Houston',
        state: 'Texas',
        yearEstimate: '2,239,558',
        lastCensus: '2,100,263',
        change: '+6.63%',
        landArea: '599.6 sq mi',
        lastPopDensity: '3,501 per sq mi',
        lat: 29.7805,
        lon: -95.3863,
        latLon: '29.7805,-95.3863'
    },
    {
        yearRank: '5',
        city: 'Philadelphia',
        state: 'Pennsylvania',
        yearEstimate: '1,560,297',
        lastCensus: '1,526,006',
        change: '+2.25%',
        landArea: '134.1 sq mi',
        lastPopDensity: '11,379 per sq mi',
        lat: 40.0094,
        lon: -75.1333,
        latLon: '40.0094,-75.1333'
    },
    {
        yearRank: '6',
        city: 'Phoenix',
        state: 'Arizona',
        yearEstimate: '1,537,058',
        lastCensus: '1,445,632',
        change: '+6.32%',
        landArea: '516.7 sq mi',
        lastPopDensity: '2,798 per sq mi',
        lat: 33.5722,
        lon: -112.088,
        latLon: '33.5722,-112.0880'
    },
    {
        yearRank: '7',
        city: 'San Antonio',
        state: 'Texas',
        yearEstimate: '1,436,697',
        lastCensus: '1,327,407',
        change: '+8.23%',
        landArea: '460.9 sq mi',
        lastPopDensity: '2,880 per sq mi',
        lat: 29.4724,
        lon: -98.5251,
        latLon: '29.4724,-98.5251'
    },
    {
        yearRank: '8',
        city: 'San Diego',
        state: 'California',
        yearEstimate: '1,381,069',
        lastCensus: '1,307,402',
        change: '+5.63%',
        landArea: '325.2 sq mi',
        lastPopDensity: '4,020 per sq mi',
        lat: 32.8153,
        lon: -117.135,
        latLon: '32.8153,-117.1350'
    },
    {
        yearRank: '9',
        city: 'Dallas',
        state: 'Texas',
        yearEstimate: '1,281,047',
        lastCensus: '1,197,816',
        change: '+6.95%',
        landArea: '340.5 sq mi',
        lastPopDensity: '3,518 per sq mi',
        lat: 32.7757,
        lon: -96.7967,
        latLon: '32.7757,-96.7967'
    },
    {
        yearRank: '10',
        city: 'San Jose',
        state: 'California',
        yearEstimate: '1,015,785',
        lastCensus: '945,942',
        change: '+7.38%',
        landArea: '176.6 sq mi',
        lastPopDensity: '5,359 per sq mi',
        lat: 37.2969,
        lon: -121.8193,
        latLon: '37.2969,-121.8193'
    },
    {
        yearRank: '11',
        city: 'Austin',
        state: 'Texas',
        yearEstimate: '912,791',
        lastCensus: '790,390',
        change: '+15.49%',
        landArea: '322.48 sq mi',
        lastPopDensity: '2,653 per sq mi',
        lat: 30.3072,
        lon: -97.756,
        latLon: '30.3072,-97.7560'
    },
    {
        yearRank: '12',
        city: 'Jacksonville',
        state: 'Florida',
        yearEstimate: '853,382',
        lastCensus: '821,784',
        change: '+3.85%',
        landArea: '747.0 sq mi',
        lastPopDensity: '1,120 per sq mi',
        lat: 30.337,
        lon: -81.6613,
        latLon: '30.3370,-81.6613'
    },
    {
        yearRank: '13',
        city: 'San Francisco',
        state: 'California',
        yearEstimate: '852,469',
        lastCensus: '805,235',
        change: '+5.87%',
        landArea: '46.9 sq mi',
        lastPopDensity: '17,179 per sq mi',
        lat: 37.7751,
        lon: -122.4193,
        latLon: '37.7751,-122.4193'
    },
    {
        yearRank: '14',
        city: 'Indianapolis',
        state: 'Indiana',
        yearEstimate: '848,788',
        lastCensus: '820,445',
        change: '+3.45%',
        landArea: '361.4 sq mi',
        lastPopDensity: '2,270 per sq mi',
        lat: 39.7767,
        lon: -86.1459,
        latLon: '39.7767,-86.1459'
    },
    {
        yearRank: '15',
        city: 'Columbus',
        state: 'Ohio',
        yearEstimate: '835,957',
        lastCensus: '787,033',
        change: '+6.22%',
        landArea: '217.2 sq mi',
        lastPopDensity: '3,624 per sq mi',
        lat: 39.9848,
        lon: -82.985,
        latLon: '39.9848,-82.9850'
    },
    {
        yearRank: '16',
        city: 'Fort Worth',
        state: 'Texas',
        yearEstimate: '812,238',
        lastCensus: '741,206',
        change: '+9.58%',
        landArea: '339.8 sq mi',
        lastPopDensity: '2,181 per sq mi',
        lat: 32.7795,
        lon: -97.3463,
        latLon: '32.7795,-97.3463'
    },
    {
        yearRank: '17',
        city: 'Charlotte',
        state: 'North Carolina',
        yearEstimate: '809,958',
        lastCensus: '731,424',
        change: '+10.74%',
        landArea: '297.7 sq mi',
        lastPopDensity: '2,457 per sq mi',
        lat: 35.2087,
        lon: -80.8307,
        latLon: '35.2087,-80.8307'
    },
    {
        yearRank: '18',
        city: 'Detroit',
        state: 'Michigan',
        yearEstimate: '680,250',
        lastCensus: '713,777',
        change: '−4.70%',
        landArea: '138.8 sq mi',
        lastPopDensity: '5,144 per sq mi',
        lat: 42.383,
        lon: -83.1022,
        latLon: '42.3830,-83.1022'
    },
    {
        yearRank: '19',
        city: 'El Paso',
        state: 'Texas',
        yearEstimate: '679,036',
        lastCensus: '649,121',
        change: '+4.61%',
        landArea: '255.2 sq mi',
        lastPopDensity: '2,543 per sq mi',
        lat: 31.8484,
        lon: -106.427,
        latLon: '31.8484,-106.4270'
    },
    {
        yearRank: '20',
        city: 'Seattle',
        state: 'Washington',
        yearEstimate: '668,342',
        lastCensus: '608,660',
        change: '+9.81%',
        landArea: '83.9 sq mi',
        lastPopDensity: '7,251 per sq mi',
        lat: 47.6205,
        lon: -122.3509,
        latLon: '47.6205,-122.3509'
    },
    {
        yearRank: '21',
        city: 'Denver',
        state: 'Colorado',
        yearEstimate: '663,862',
        lastCensus: '600,158',
        change: '+10.61%',
        landArea: '153.0 sq mi',
        lastPopDensity: '3,923 per sq mi',
        lat: 39.7618,
        lon: -104.8806,
        latLon: '39.7618,-104.8806'
    },
    {
        yearRank: '22',
        city: 'Washington',
        state: 'District of Columbia',
        yearEstimate: '658,893',
        lastCensus: '601,723',
        change: '+9.50%',
        landArea: '61.0 sq mi',
        lastPopDensity: '9,856 per sq mi',
        lat: 38.9041,
        lon: -77.0171,
        latLon: '38.9041,-77.0171'
    },
    {
        yearRank: '23',
        city: 'Memphis',
        state: 'Tennessee',
        yearEstimate: '656,861',
        lastCensus: '646,889',
        change: '+1.54%',
        landArea: '315.1 sq mi',
        lastPopDensity: '2,053 per sq mi',
        lat: 35.1035,
        lon: -89.9785,
        latLon: '35.1035,-89.9785'
    },
    {
        yearRank: '24',
        city: 'Boston',
        state: 'Massachusetts',
        yearEstimate: '655,884',
        lastCensus: '617,594',
        change: '+6.20%',
        landArea: '48.3 sq mi',
        lastPopDensity: '12,793 per sq mi',
        lat: 42.332,
        lon: -71.0202,
        latLon: '42.3320,-71.0202'
    },
    {
        yearRank: '25',
        city: 'Nashville',
        state: 'Tennessee',
        yearEstimate: '644,014',
        lastCensus: '601,222',
        change: '+7.12%',
        landArea: '475.1 sq mi',
        lastPopDensity: '1,265 per sq mi',
        lat: 36.1718,
        lon: -86.785,
        latLon: '36.1718,-86.7850'
    },
    {
        yearRank: '26',
        city: 'Baltimore',
        state: 'Maryland',
        yearEstimate: '622,793',
        lastCensus: '620,961',
        change: '+0.30%',
        landArea: '80.9 sq mi',
        lastPopDensity: '7,672 per sq mi',
        lat: 39.3002,
        lon: -76.6105,
        latLon: '39.3002,-76.6105'
    },
    {
        yearRank: '27',
        city: 'Oklahoma City',
        state: 'Oklahoma',
        yearEstimate: '620,602',
        lastCensus: '579,999',
        change: '+7.00%',
        landArea: '606.4 sq mi',
        lastPopDensity: '956 per sq mi',
        lat: 35.4671,
        lon: -97.5137,
        latLon: '35.4671,-97.5137'
    },
    {
        yearRank: '28',
        city: 'Portland',
        state: 'Oregon',
        yearEstimate: '619,360',
        lastCensus: '583,776',
        change: '+6.10%',
        landArea: '133.4 sq mi',
        lastPopDensity: '4,375 per sq mi',
        lat: 45.537,
        lon: -122.65,
        latLon: '45.5370,-122.6500'
    },
    {
        yearRank: '29',
        city: 'Las Vegas',
        state: 'Nevada',
        yearEstimate: '613,599',
        lastCensus: '583,756',
        change: '+5.11%',
        landArea: '135.8 sq mi',
        lastPopDensity: '4,298 per sq mi',
        lat: 36.2277,
        lon: -115.264,
        latLon: '36.2277,-115.2640'
    },
    {
        yearRank: '30',
        city: 'Louisville',
        state: 'Kentucky',
        yearEstimate: '612,780',
        lastCensus: '597,337',
        change: '+2.59%',
        landArea: '325.2 sq mi',
        lastPopDensity: '1,837 per sq mi',
        lat: 38.1781,
        lon: -85.6667,
        latLon: '38.1781,-85.6667'
    },
    {
        yearRank: '31',
        city: 'Milwaukee',
        state: 'Wisconsin',
        yearEstimate: '599,642',
        lastCensus: '594,833',
        change: '+0.81%',
        landArea: '96.1 sq mi',
        lastPopDensity: '6,188 per sq mi',
        lat: 43.0633,
        lon: -87.9667,
        latLon: '43.0633,-87.9667'
    },
    {
        yearRank: '32',
        city: 'Albuquerque',
        state: 'New Mexico',
        yearEstimate: '557,169',
        lastCensus: '545,852',
        change: '+2.07%',
        landArea: '187.7 sq mi',
        lastPopDensity: '2,908 per sq mi',
        lat: 35.1056,
        lon: -106.6474,
        latLon: '35.1056,-106.6474'
    },
    {
        yearRank: '33',
        city: 'Tucson',
        state: 'Arizona',
        yearEstimate: '527,972',
        lastCensus: '520,116',
        change: '+1.51%',
        landArea: '226.7 sq mi',
        lastPopDensity: '2,294 per sq mi',
        lat: 32.1543,
        lon: -110.8711,
        latLon: '32.1543,-110.8711'
    },
    {
        yearRank: '34',
        city: 'Fresno',
        state: 'California',
        yearEstimate: '515,986',
        lastCensus: '494,665',
        change: '+4.31%',
        landArea: '113.2 sq mi',
        lastPopDensity: '4,418 per sq mi',
        lat: 36.7827,
        lon: -119.7945,
        latLon: '36.7827,-119.7945'
    },
    {
        yearRank: '35',
        city: 'Sacramento',
        state: 'California',
        yearEstimate: '485,199',
        lastCensus: '466,488',
        change: '+4.01%',
        landArea: '97.9 sq mi',
        lastPopDensity: '4,764 per sq mi',
        lat: 38.5666,
        lon: -121.4686,
        latLon: '38.5666,-121.4686'
    },
    {
        yearRank: '36',
        city: 'Long Beach',
        state: 'California',
        yearEstimate: '473,577',
        lastCensus: '462,257',
        change: '+2.45%',
        landArea: '50.3 sq mi',
        lastPopDensity: '9,191 per sq mi',
        lat: 33.8091,
        lon: -118.1553,
        latLon: '33.8091,-118.1553'
    },
    {
        yearRank: '37',
        city: 'Kansas City',
        state: 'Missouri',
        yearEstimate: '470,800',
        lastCensus: '459,787',
        change: '+2.40%',
        landArea: '315.0 sq mi',
        lastPopDensity: '1,460 per sq mi',
        lat: 39.1252,
        lon: -94.5511,
        latLon: '39.1252,-94.5511'
    },
    {
        yearRank: '38',
        city: 'Mesa',
        state: 'Arizona',
        yearEstimate: '464,704',
        lastCensus: '439,041',
        change: '+5.85%',
        landArea: '136.5 sq mi',
        lastPopDensity: '3,218 per sq mi',
        lat: 33.4019,
        lon: -111.7174,
        latLon: '33.4019,-111.7174'
    },
    {
        yearRank: '39',
        city: 'Atlanta',
        state: 'Georgia',
        yearEstimate: '456,002',
        lastCensus: '420,003',
        change: '+8.57%',
        landArea: '133.2 sq mi',
        lastPopDensity: '3,154 per sq mi',
        lat: 33.7629,
        lon: -84.4227,
        latLon: '33.7629,-84.4227'
    }
]

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
    console.log(props);
    var map = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location}&zoom=11&size=300x500&maptype=terrain&markers=color:red%7C${props.location}&key=${mapKey}`;
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
    <Application cities={cities} />,
    document.getElementById('city-wrapper')
)



// Case Convert
// Write a function caseConvert that accepts two arguments. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.


// function caseConvert(str, conversionType){
//  //Your code here!!
//  str.toLowerCase();
//  var convertedStr = [];
//  str.split('');
//
// if (conversionType === 'snakecase') {
//   for (let i of str) {
//     if (i !== ' ') {
//       convertedStr.push(i)
//     } else if (i === ' ') {
//       convertedStr.push('_');
//     }
//   }
// } else if (conversionType === 'camelcase') {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i+1; j < str.length + 1; j++) {
//       if (str[i] !== ' ') {
//         convertedStr.push(str[i]);
//         break;
//       } else if ( str[i] === ' ') {
//         convertedStr.push(str[j].toUpperCase());
//         i++;
//         break;
//       }
//     }
//   }
// }
//
//
// return convertedStr.join('');
// }
//
//
// var text = 'javascript and python';
// console.log(caseConvert(text, 'camelcase'));
