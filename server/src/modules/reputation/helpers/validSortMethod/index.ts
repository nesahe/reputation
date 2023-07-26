const methodsArr = ['reputation', 'login', ''];

export const validSortMethod = (method: string): boolean => {
    return methodsArr.includes(method);
}