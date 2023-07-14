export const getPaginationSlice = (items: string[], activePage: number): string[] => {


    const startSlice = activePage > 1 ? activePage - 2 : activePage - 1;
    const endSlice = activePage > 1 ? activePage + 1 : activePage + 2;

    const slice = items.slice(items.length - 3 <= activePage - 1 ? items.length - 3 : startSlice, items.length - 3 <= activePage - 1 ? endSlice : items.length);

    return slice
}