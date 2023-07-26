import { optionForValid } from "../../components/Sort"

export const isSortValid = (sort: string): boolean => {
    return optionForValid.includes(sort);
}