import { getHomePageContentSelectors } from "./homePageContentSelectors";
import { getHeaderSelectors } from "./headerSelectors";

export const getHomePageSelectors = () => {
    return {
        get header() {
            return getHeaderSelectors();
        },

        get content(){
            return getHomePageContentSelectors();
        }
    }
}