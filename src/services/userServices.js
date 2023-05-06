import axios from 'axios'
import { USER_TOKEN } from '../types/localstorage.type'

const BASE_URL_WITH_USER = import.meta.env.VITE_BASE_URL_API + '/user/'

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL_WITH_USER)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const getUser = async () => {
  try {
    const TOKEN = localStorage.getItem(USER_TOKEN).substring(1, localStorage.getItem(USER_TOKEN).length - 1)
    const response = await axios.get(BASE_URL_WITH_USER, { headers: { 'rutago-token': TOKEN } })
    return response?.data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export const createUser = async (user) => {
  try {
    const response = await axios.post(BASE_URL_WITH_USER, user)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL_WITH_USER}${id}/`, data)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL_WITH_USER}${id}/`)
    return response.data
  } catch (error) {
    console.log(error)
    return error.response.data
  }
}
