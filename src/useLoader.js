import React, {useState} from "react";
import Loader from "./LoaderCode";

const useLoader = () => {
    const [loading, setloader] = useState();
    return [
        loading ? <Loader/> : null,
        () => setloader(true),
        () => setloader(false)
    ];
};
export default useLoader;