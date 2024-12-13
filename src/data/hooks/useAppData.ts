import { useContext } from "react";
import AppContext from "../context/AppContext";

const globalData = () => useContext(AppContext);

export default globalData;