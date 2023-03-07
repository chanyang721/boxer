export const updateActionObjectToState = ( oldObject: any, newValues: any ) => {
    return Object.assign({}, oldObject, newValues)
}

export const updateItemInArray = (array: any, itemId: any, updateItemCallback: any) => {
    return array.map(( item: any ) => {
        if ( item.id !== itemId ) return item;

        return updateItemCallback(item)
    })
}


export const createReducer = ( initialState: any, handlers: any ) => {
    return function reducer( state = initialState, action: any ) {
        if ( handlers.hasOwnProperty(action.type) ) {
            return handlers[ action.type ](state, action)
        }
        else {
            return state
        }
    }
}