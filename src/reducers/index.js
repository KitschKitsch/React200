import {ADD} from '../actions'
import {combineReducers} from 'redux'; // 스토어로 넘겨주는 함수

const initState = { // 리듀서 데이터 초기값 선언 및 할당
    str : 'react',
};

const data = (state = initState, action) => { // 리듀서 함수 : 데이터 변경
    switch (action.type) {
        case ADD: // ADD 이면
            return state, {
                str: state.str + '200'
            };
        default: // 아니면
            return state;
    }
};

const App = combineReducers({ // 하나의 리듀싱 함수로 변환
    data
});
export default App; // 그리고 익스포트