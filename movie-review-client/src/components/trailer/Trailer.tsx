import {useParams} from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import "./Trailer.css"

import React from 'react';

type YtParams ={
    ytTrailerId: string;
}

const Trailer = () => {
    const {ytTrailerId} = useParams<YtParams>();

    let ytWatchLinkBase = "https://www.youtube.com/watch?v=";
    // console.log(ytWatchLinkBase+ytTrailerId);
    return (
        <div className={"react-player-container"}>
            {(ytTrailerId!=null)?<ReactPlayer controls={true} playing={true} url={`${ytWatchLinkBase}${ytTrailerId}`}
            width={"100%"} height={"100%"}/>:null}
            {/*<ReactPlayer controls={true} playing={true} url="https://www.youtube.com/watch?v=5PdEmeopJVQ"*/}
            {/*width={"100%"} height={"100%"}/>*/}
        </div>
    );
};

export default Trailer;