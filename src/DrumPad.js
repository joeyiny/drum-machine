import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react';

const DrumPad = props => {
    
    const [isTriggered, setIsTriggered] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
    })

    let soundUrl = "/sounds/" + props.sampleName + ".wav";

    let audioElementRef = useRef();
    let drumPadRef = useRef();

    let handleKeyPress = e => {
        let keyPressed = e.code.substring(3)
        if(keyPressed === props.letter) {
            e.preventDefault();
            playAudio();
        }
    }

    let playAudio = () => {
        clearInterval();
        audioElementRef.current.currentTime = 0;

        audioElementRef.current.play();

        props.setDisplayText(props.sampleName);

        setIsTriggered(true);
        setTimeout(() => setIsTriggered(false),120)

    }

    return (
        <button
            id={props.sampleName}
            onClick={playAudio}
            ref={drumPadRef}
            className={isTriggered ? 'drum-pad triggered' : 'drum-pad'}>

            <h1>{props.letter}</h1>

            <audio
            ref={audioElementRef}
            id={props.letter}
            className="clip"
            type="audio/wav"
            src={soundUrl}/>

        </button>
    )
}

export default DrumPad
