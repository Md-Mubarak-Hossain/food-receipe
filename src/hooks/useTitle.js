import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `library/${title}`;
    }, [title])
};
export default useTitle;