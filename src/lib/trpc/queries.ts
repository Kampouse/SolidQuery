import { Issue } from './types';
import { z } from 'zod';
import { t } from './router';

const todos = [
    { id: 1, title: 'Learn about React', description: 'react is framework...', type: 'feature', completed: false },
    { id: 2, title: 'Learn about SolidJs', description: 'react is framework...', type: 'bugs', completed: false },
]

export const getIssues = () => {
    return t.procedure.query(() => {
        return todos;
    })
}