import { useDispatch as useReduxDispatch } from "react-redux";
import { RootDispatch } from "..";

const useDispatch = () => useReduxDispatch<RootDispatch>()

export default useDispatch