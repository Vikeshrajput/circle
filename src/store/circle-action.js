import { circleActions } from "./circle-slice";

const fetchUserData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://mocki.io/v1/5486c5b2-16e2-43ff-894a-7e1c847525fb');
            const data = await response.json()
            return data
        }
        try {
            const data = await fetchData()
            dispatch(circleActions.setUserData(data || {}))
        } catch(error) {
            console.log(error)
        }
    }
}

export default fetchUserData;