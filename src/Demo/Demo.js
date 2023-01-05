import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player/youtube';

const Demo = () => {
    return (
        <div>
            <div>
                 <ReactAudioPlayer
                     src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
                
                 controls
             />
            </div>
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls />
            </div>
        </div>
    );
};

export default Demo;