import { READY_ASSETS } from './actionTypes';

const readyAssets = (assets) => {
    console.log('Action created: ' + READY_ASSETS + ' ' + assets);
    return {
        type: READY_ASSETS,
        assets: assets
    }
}

export default readyAssets;