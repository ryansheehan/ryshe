import type {PageLoad} from './$types';

export interface TestType {
    greet: string;
    name: string;
}

export const load: PageLoad<TestType> = () => {
    return {
        greet: 'hello',
        name: 'world',
    };
}
