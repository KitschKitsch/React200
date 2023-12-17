import React, {Component} from "react";
import $ from 'jquery';

class R016_Jquery extends Component {

    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }

    render() {
        return (
            <div>
                <h2>[제이쿼리]</h2>
                <input id='inputId' name='inputName'/>
                <button id='buttonId' onClick={e => this.input_alert(e)}>제이쿼리버튼</button>
            </div>
        )
    }


}

export default R016_Jquery;