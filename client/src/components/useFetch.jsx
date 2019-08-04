import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/**
|--------------------------------------------------
| Reusuable fetch that can be used to fetch data
|--------------------------------------------------
*/

/**@method {use fetch}
 * @param {action} the action it will dispatch
 * @returns data
 */
const useFetch = action => {
  const dispatch = useDispatch();
  const fetchesPost = () => dispatch(action);

  useEffect(() => {
    fetchesPost();
  }, []);
};

export default useFetch;
