export const initialState = {
    user           : {
        id      : '',
        email   : '',
        username: '',
    },
    token          : { access: '', refresh: '' },
    isAuthenticated: false,
}

export const authReducer = ( state = initialState, action: any ) => {

}
