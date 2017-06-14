import * as types from './types';

var root = 'https://jsonplaceholder.typicode.com';

export function fetchMyData() {
    console.log('i am in fetchmyDara');
  
    return (dispatch, getState) => {
        return fetch(root + 'posts/1')
            .then(resp => resp.json())
            .then(respJson => {
                dispatch(
                    setFetchedData({
                        myData: respJson
                    })).
                    catch(err => {
                        console.log(err);
                    });
            });
    }
}


export function getPosition() {
    return (dispatch, getState) => {
        return fetch(root + 'posts/1')
            .then(resp => resp.json())
            .then(respJson => {
                dispatch(
                    setFetchedData({
                        myData: respJson
                    })).
                    catch(err => {
                        console.log(err);
                    });
            });
    }
}

export function setFetchedData({ myData }) {
    console.log('mydatajs setfetcehddata');
    return {
        type: types.SET_FETCHED_DATA,
        myData: myData
    };
}
