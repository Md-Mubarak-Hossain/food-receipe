import React, { useState } from 'react';
import LibraryNav from './LibraryNav';
import book from '../../components/assets/bookBanner.png'
import Six from '../library/Books/Six'
const Library = () => {
    const [books, setBook] = useState(<Six/>)
    return (
        <div>
                <LibraryNav setBook={setBook}></LibraryNav> 
             <div className="w-full">{books}</div>          
        </div>
    );
};

export default Library;