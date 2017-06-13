import * as types from './types';

var root = 'https://jsonplaceholder.typicode.com';

export function fetchMyData(searchValue) {
    return (dispatch, getState) => {
        return fetch(root + 'posts/1')
            .then(resp => resp.json())
            .then(respJson => {
                dispatch(setFetchedData({
                    myData: respJson
                })).
                    catch(err => {
                        console.log(err);
                    });
            });
    }
}