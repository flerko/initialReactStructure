import {getFromMock, post} from "../../utils/fetcher";
import { TEST } from "./actionTypes";
export function example() {
    let data = {

    };
    return (dispatch) => {
        getFromMock('/mocks/example.json', data)
            .then(
                (response) => {
                    dispatch(
                        {
                            type: TEST,
                            gettingData: data
                        }
                    )
                }
            )
    }
}
