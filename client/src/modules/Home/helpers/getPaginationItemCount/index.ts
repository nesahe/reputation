export const getPaginationItemCount = (page: number): string[] => {

    const paginationItemsArr: string[] = [];

    for (let i = 0; i < page; i++) {
        paginationItemsArr.push(String(i + 1));
    }

    return paginationItemsArr
}