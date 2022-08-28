export const actionCreator = {
    loginSuccess: function(data){
        return {
            type: 'LOGIN_SUCCESS',
            paylaod: data
        }

    } ,
    loginfailure: function(){
        return {
            type: 'LOGIN_FAILURE',

        }
    }
}
ddd