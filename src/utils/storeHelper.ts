export interface FuncModule {
    name: string,
    reducer?: any,
    web?: any,
}
export const generateModule = (name: string, reducerMap?: any, webMap?: any) => {
    const funcModule: FuncModule = {
        name,
    };
    if (reducerMap) {
        funcModule.reducer = reducerMap;
    }
    if (webMap) {
        funcModule.web = webMap;
    }
    return funcModule;
};

export const buildReducer = (modulesInfo: Array<FuncModule>) => {
    const reducers = {};
    modulesInfo.forEach((m: FuncModule) => {
        if (typeof m.reducer === 'function') {
            reducers[m.name] = m.reducer;
        }
    });
    return reducers;
};

export const buildWeb = (modulesInfo: Array<FuncModule>) => {
    let webMap = {};
    modulesInfo.forEach((m: FuncModule) => {
        if (m.web) {
            Object.assign(webMap, m.web);
        }
    });
    return webMap;
}