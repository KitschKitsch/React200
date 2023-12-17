import React, {Component} from "react";
import Swal from 'sweetalert2';

export default class R056_Sweeralert2Basic extends Component {
    componentDidMount() {
       /* Swal.fire('1. Sweet Alert') // '비동기' 나중 나옴
        alert('2. result.value') // '동기' 먼저 나옴*/
        Swal.fire('1. SweetAlert').then(result => { // then : 이전 함수가 완전히 완료되고 난 후에 실행하기
            alert('2. result.value : ' + result.value)
        })
    }

    render() {
        return (
               <h1>sweetalert2</h1>
        )
    }

}
