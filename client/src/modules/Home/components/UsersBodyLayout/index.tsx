import { useEffect, useRef, useState } from "react";

import Loader from "../Loader";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { changeFiltersAction } from "../../../../store/reducers/filtersReducer";

import { isSortValid } from "../../helpers/isSortValid";

import qs from 'qs';

import UsersBody from "../UsersBody";
import ErrorSort from "../ErrorSort";


const UsersBodyLayout = () => {

    const [checkSort, setSortCheck] = useState<{ isCheck: boolean, isValid: boolean }>({ isCheck: false, isValid: false });

    const isMounted = useRef(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (window.location.search && !isMounted.current) {
            const { search, sort } = qs.parse(window.location.search.substring(1)) as { search: string, sort: string };

            const resultValidation = isSortValid(sort);

            setSortCheck({ isValid: resultValidation, isCheck: true });

            !resultValidation && dispatch(changeFiltersAction({ search: search, sort: { value: sort, label: `By ${sort}` } }));
        }

        setSortCheck({ isCheck: true, isValid: true })

    }, [])

    return checkSort.isCheck
        ? checkSort.isValid ? <UsersBody isMounted={isMounted} /> : <ErrorSort />
        : <Loader />
};

export default UsersBodyLayout;