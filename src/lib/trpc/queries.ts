import { Issue } from './types';
import { z } from 'zod';
import { t } from './router';


const todos = [
    { id: 1, title: 'Learn about React', completed: true }
] as Issue[];

export const getIssues = () => {
    return t.procedure.query(() => {
        return todos;
    })
}