import React, {Component} from 'react';

class Result extends Component {


    render() {
        let {result} = this.props;
        // Here is where you should insert commas into result.
        // Because result could be a string like "65 + 7" it's a bit harder to insert commas in the correct spots.
        // But definitely not impossible!! Try writing a helper function that accepts result as an arg and returns a properly formatted string with commas.
        return (
            <div className="result">
                <p>{result || 0}</p>
            </div>
    )
        ;
    }
}


export default Result;
