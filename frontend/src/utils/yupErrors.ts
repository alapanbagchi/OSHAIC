export const extractErrors = (err: any) => {
    return err.inner.reduce((acc: any, err: any) => {
        return { ...acc, [err.path]: err.message };
    }, {});
};
