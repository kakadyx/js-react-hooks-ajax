import React, {useState} from 'react';
import Spinner from '../../components/spinner/spinner'
const useSpinner = () => {
    const [loading, setLoading] = useState(false);
    return [
        loading ? <Spinner/> : null,
        () => setLoading(true), //Show Loader
        () => setLoading(false) //Hide loader
    ]

}

export default useSpinner;
