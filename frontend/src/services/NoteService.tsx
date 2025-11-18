import axios from 'axios'
import type { CardProps } from '../models/card-props'

export const save = async (register: CardProps): Promise<CardProps> => {
    try {
        const response = await axios.post("http://localhost:3000/api/notes", register);
        return response.data;
    } catch (error) {
        throw new Error('It was not possible save register.')
    }
}

export const get = async (register: CardProps): Promise<CardProps | undefined> => {
    try {
        const response = await axios.get(`http://localhost:3000/notes/${register.id}`);
        return response.data;
    } catch (error) {
        throw new Error('It was not possible get register.')
    }
}

export const edit = async (register: CardProps): Promise<CardProps> => {
    try {
        const response = await axios.put(`http://localhost:3000/api/notes/${register.id}`, register);
        return response.data;
    } catch (error) {
        throw new Error('It was not possible edit register.')
    }
}

export const remove = async (register: CardProps): Promise<CardProps> => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/notes/${register.id}`);
        return response.data;
    } catch (error) {
        throw new Error('It was not possible remove register.')
    }
}

export const getAll = async (): Promise<Array<CardProps>> => {
    try {
        const response = await axios.get("http://localhost:3000/api/notes");
        return response.data;
    } catch (error) {
        throw new Error('It was not possible get all registers.')
    }
}