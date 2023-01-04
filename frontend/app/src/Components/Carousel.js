import React from 'react';
import { Carousel } from 'antd';
import HomePage_1 from '../Carousel/HomePage_1.png';
import HomePage_2 from '../Carousel/HomePage_2.png';
import HomePage_3 from '../Carousel/HomePage_3.png';
// import HomePage_4 from '../Carousel/HomePage_4.jpg';
import HomePage_5 from '../Carousel/HomePage_5.png';
import HomePage_6 from '../Carousel/HomePage_6.png';
// import HomePage_7 from '../Carousel/HomePage_7.png';



function App(props) {
    const src = props.src
    const width = props.width

    const contentStyle = React.CSSProperties = {
        maxHeight: '300px',
        width:"100%",
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
        marginTop:"0.1px"
    };
    
    return (
        <>
            <Carousel autoplay style={{textAlign:"center"}}>
                <div>
                    <img style={contentStyle} src={HomePage_1}/>
                </div>
                <div>
                    <img style={contentStyle} src={HomePage_2}/>
                </div>
                <div>
                    <img style={contentStyle} src={HomePage_3}/>
                </div>
                <div>
                    <img style={contentStyle} src={HomePage_6}/>
                </div>
                <div>
                    <img style={contentStyle} src={HomePage_5}/>
                </div>
               
            </Carousel>
        </>
    );
}

export default App;