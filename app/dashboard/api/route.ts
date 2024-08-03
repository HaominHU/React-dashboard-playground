import axiosInterceptorInstance from '@/app/lib/axios-helper'

export async function getPatients() {
    console.log('Getting patients');
    return await axiosInterceptorInstance.get('/users/getAllClients');
}
