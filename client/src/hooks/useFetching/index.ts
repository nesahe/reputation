import { useState } from "react";

export const useFetching = (callback: any): [() => void, boolean] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {

        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading];
}