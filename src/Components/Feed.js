import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [posts, setPosts] = useState([])
    /* Use the map() function to render multiple Blocks! */
    const posts = null; // TODO: edit this variable
    
    function handleClick(props) {}  
    return (
        <div>
            <Menu></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts.map}
        </div>
    );
}

export default Feed;