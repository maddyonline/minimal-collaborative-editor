import React from 'react';
import Image from 'next/image'
import slide1 from './slide-1.svg'
import slide2 from './slide-2.svg'

const slides = [slide1, slide2];

function Home() {
    const [num, setNum] = React.useState(0);
    return (
        <>
            <h1>My Homepage</h1>
            <Image
                src={slides[num]}
                alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
            <button onClick={() => setNum((num + 1) % slides.length)}>Next</button>
        </>
    )
}

export default Home;