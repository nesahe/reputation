import { useState } from "react";

export const useFetching = (callback: any): [() => void, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e: any) {
            setIsError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, isError];
}