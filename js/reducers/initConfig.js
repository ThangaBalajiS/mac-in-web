import cloneDeep from 'clone-deep';

export default (state = {}, action) => {


    let abc = cloneDeep(state);
    let value;


    switch (action.type) {
    
        default : 
            return state;
    }
}