import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string; }, router: string[]) => async (dispatch: (arg0: { type: any; data: any; }) => void) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string; }, router: string[]) => async (dispatch: (arg0: { type: any; data: any; }) => void) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};