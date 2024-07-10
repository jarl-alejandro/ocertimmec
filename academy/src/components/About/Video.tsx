"use client";

import Plyr, {PlyrSource} from "plyr-react"
import "plyr-react/plyr.css"
import styles from './video.module.css';


const videoSource1: PlyrSource = {
    type: 'video',
    sources: [
        {
            src: "TlKVyIzp650",
            provider: "youtube"
        }
    ]
}


const videoSource2: PlyrSource = {
    type: 'video',
    sources: [
        {
            src: "hPXJVzeX-4Y",
            provider: "youtube"
        }
    ]
}

export default function Video() {

    return (
        <section className=" position-relative">

            <div className={`${styles.video_container}`}>
                <div className="video-player">
                    <Plyr source={videoSource1}/>
                </div>
                <div className="video-player">
                    <Plyr source={videoSource2}/>
                </div>
            </div>


        </section>
    )
}
