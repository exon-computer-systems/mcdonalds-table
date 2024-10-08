import { useContext } from "react";
import MessageContext from "../context/MessageProvider";

const useMessage = () => useContext(MessageContext);

export default useMessage;
