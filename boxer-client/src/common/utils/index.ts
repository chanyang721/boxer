export const updateActionObjectToState = ( oldObject: any, newValues: any ) => {
    return Object.assign({}, oldObject, newValues)
}