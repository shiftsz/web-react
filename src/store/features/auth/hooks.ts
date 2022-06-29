import useSelector from "../../hooks/useSelector";
import authSelectors from "./selectors";

const useAuthSelectors = () => useSelector(authSelectors)

export default useAuthSelectors