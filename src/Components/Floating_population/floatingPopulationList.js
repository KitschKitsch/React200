import React, {Component} from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
        axios.get(
                'https://apis.data.go.kr/3130000/openapi/floatingPopulation/getfloatingPopulation'
                + '?serviceKey=Oq8716m%2B%2Be846ymhJLGO0k1vUF0kQbBNjBruiLmlmA2lLBIdGn9UaY0DqqiDDj81kdcn1R4zYBeb%2FLQy3NqWUA%3D%3D'
                + '&type=Json'
                + '&numOfRows=30',
                {})
        .then(response => {
            try {
                this.setState({
                    responseFPList: response,
                    append_FPList: this.FloatPopulListAppend(response)
                });
            } catch (error) {
                alert(error)
            }
        })
        .catch(error => {
            alert(error);
            return false;
        });
    }

    FloatPopulListAppend = (response) => {
        let result = []
        var json = response

        for (let i = 0; i < json.data.items.length; i++) {
            var data = json.data.items[i]
            var idx = i + 1
            result.push(
                    <tr class="hidden_type">
                        <td>{idx}</td>
                        <td>{data._14age}</td>
                        <td>{data._20_50T21_}</td>
                        <td>{data._65age_}</td>
                        <td>{data._20_60T9_18}</td>
                        <td>{data.weekend}</td>
                        <td>{data.addr}</td>
                    </tr>
            )
        }
        return result
    }

    render() {
        return (
                <section class="sub_wrap">
                    <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                        <div class="li_top">
                            <h2 class="s_tit1">서울특별시 마포구_유동인구데이터 API</h2>
                        </div>
                        <div class="list_cont list_cont_admin">
                            <table class="table_ty1 fp_tlist">
                                <tr>
                                    <th>Row</th>
                                    <th>14세 미만</th>
                                    <th>20~50 여성+21시-24시 전체</th>
                                    <th>65세 이상</th>
                                    <th>20~60 주중(일평균)</th>
                                    <th>주말 전체 일별평균, 성.연령별(연휴제외)</th>
                                    <th>위치명</th>
                                </tr>
                            </table>
                            <table class="table_ty2 fp_tlist">
                                {this.state.append_FPList}
                            </table>
                        </div>
                    </article>
                </section>
        );
    }
}

export default floatingPopulationList;