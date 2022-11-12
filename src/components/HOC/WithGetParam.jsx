import { useParams } from "react-router-dom";


export const WithGetParam = (Component) => {

    const GetParam = (props) => {
        const { userId } = useParams();
        return (
            <Component {...props}  userId={userId} />
        )
    }

    return GetParam;
}