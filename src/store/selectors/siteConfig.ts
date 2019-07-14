import State from 'src/state';

export const getSiteConfigIsLoading = (state: State) => state.siteConfig.isLoading;
export const getSiteConfig = (state: State) => state.siteConfig.config;