import * as api from "../api"

export const signInAction = (formData: any, router:any) => async (dispatch: any) => {
    try {
        const { data } = await api.signIn(formData)
        dispatch({ type:"AUTH", data})
        router.push('/dashboard')
        
    } catch (error) {
        console.log(error);
        
    }

}