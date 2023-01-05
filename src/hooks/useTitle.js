import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Food Recipes/${title}`;
    }, [title])
};
export default useTitle;