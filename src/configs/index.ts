import { localConfig } from './local';
import { productionConfig } from './production';

interface Config {
    baseUrl: string;
    baseWs: string;
}

export const getConfig = (): Config => {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'production') {
        return productionConfig;
    }
    return localConfig;
};
