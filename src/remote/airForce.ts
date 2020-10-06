import { internalAxios } from "./axios";


export const getCampaignStages = async () => {
    const response = await internalAxios.get('/air-force');
    console.log(response)
}