
const redux = require('redux');

const ORDERED_CAKES = 'ORDERED_CAKES';
const ORDERED_SWEETS = 'ORDERED_SWEETS';


const initialState = {
    cakes : 100 ,
    sweets : 200
}

const orderedCakes = (qty)=>{
    return {type: ORDERED_CAKES , payload : { qty : qty }}
}

const orderedSweets = (qty)=>{
    return {type : ORDERED_SWEETS,payload : {qty:qty}}
}
const reducer = (state=initialState , action) => {
    switch (action.type){
        case ORDERED_CAKES :

        return {
            ...state,
            cakes : state.cakes - action.payload.qty
        }

        case ORDERED_SWEETS :

        return {
            ...state,
            sweets:state.sweets - action.payload.qty
        }

        default:
            return state
    }
}

const store = redux.createStore(reducer);

const unsubscibe = store.subscribe(()=>{
    console.log("State has been updated => ", store.getState());
});

console.log("Initial state => ",store.getState());

store.dispatch(orderedCakes(2));
store.dispatch(orderedSweets(3));
store.dispatch(orderedCakes(10));
store.dispatch(orderedSweets(20));

