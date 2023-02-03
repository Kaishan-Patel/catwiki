const axios = require('axios');

const singleImage = 'https://api.thecatapi.com/v1/images/';
const allBreeds = 'https://api.thecatapi.com/v1/breeds/';
const breedImages = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const random10Images = 'https://api.thecatapi.com/v1/images/search?limit=10';

const getCat = async (id) => {
    try {
        const response = await axios.get(`${singleImage}${id}`, {
            headers: { 'x-api-key': 'api_key=live_Rzzr9Zsoi6CAQf6jbcj2jOIijYfffK57NkKly67oBcVOdMArWgvvY400XhCS7Dxh' },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getCats = async () => {
    try {
        const response = await axios.get(random10Images, {
            headers: { 'x-api-key': 'api_key=live_Rzzr9Zsoi6CAQf6jbcj2jOIijYfffK57NkKly67oBcVOdMArWgvvY400XhCS7Dxh' }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getAllBreeds = async () => {
    try {
        const response = await axios.get(allBreeds, {
            headers: { 'x-api-key': 'api_key=live_Rzzr9Zsoi6CAQf6jbcj2jOIijYfffK57NkKly67oBcVOdMArWgvvY400XhCS7Dxh' }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getBreed = async (id) => {
    try {
        const response = await axios.get(`${breedImages}${id}`, {
            headers: { 'x-api-key': 'api_key=live_Rzzr9Zsoi6CAQf6jbcj2jOIijYfffK57NkKly67oBcVOdMArWgvvY400XhCS7Dxh' }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getCat, getCats, getAllBreeds, getBreed };