import React, {Component} from "react";
import {debounce} from "lodash";

class R094_reactDebounce extends Component {
    debounceFunc = debounce((e) => {
        console.log("Debounce API Call : ", e.target.value);
    }, 1000);

    render() {
        return (
                <>
                 <h2>검색어 입력</h2>
                 <input type="text" onChange={this.debounceFunc}/>
                </>
        );
    }
}

export default R094_reactDebounce;