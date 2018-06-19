import isFunction from 'lodash/fp/isFunction';
import isUndefined from 'lodash/fp/isUndefined';
import isString from 'lodash/fp/isString';
import every from 'lodash/fp/every';

const everyIsString = every(isString);

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// redux style middleware to be more generic and short while describing
// api calls that should go through redux store
// - types (array), action types per each action accordingly [request, success, error]
// - shouldCallApi (function) default=true, if should call API
export default ({ dispatch, getState }) => next => action => {
    const callApiConfig = action[CALL_API];

    // if action don't have [CALL_API] property we skip usage of middleware
    if (isUndefined(callApiConfig)) {
        return next(action);
    }

    const {
        types = [],
        callApi,
        shouldCallApi = () => true
    } = callApiConfig;

    // extract action types accordingly for request, success and error
    const [requestType, successType, failureType] = types;

    // if shouldCallApi return false, we don't call Api but return promise to let
    // probable promise chain be continued (if there is one)
    if (!shouldCallApi(getState())) {
        return Promise.resolve(null);
    }

    // unfortunatly we cannot identify at this point which action has failed
    if (types.length !== 3 || !everyIsString(types)) {
        throw new Error('Expected an array of three string types.');
    }

    if (!isFunction(callApi)) {
        throw new Error(`[${requestType}]: Expected callApi to be a function.`);
    }

    dispatch({ type: requestType });

    return callApi()
        .then(response => {
            dispatch({
                type: successType,
                payload: response.data,
            });
            return Promise.resolve(getState());
        })
        .catch(error => {
            dispatch({
                type: failureType,
                payload: error,
            });
            return Promise.reject(error);
        });
};