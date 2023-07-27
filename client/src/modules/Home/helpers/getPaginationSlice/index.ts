export const getPaginationSlice = (items: string[], activePage: number): string[] => {

    const startSlice = activePage > 1 ? activePage - 2 : activePage - 1;
    const endSlice = activePage > 1 ? activePage + 1 : activePage + 2;

    return items.slice(activePage === items.length && items.length > 2 ? startSlice - 1 : startSlice, endSlice);
}