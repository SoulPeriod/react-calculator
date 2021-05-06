import React, {Component} from 'react';

class Result extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result || 0}</p>
            </div>
    )
        ;
    }
}


export default Result;