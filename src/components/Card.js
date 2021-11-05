import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Item, Image, Butt_sty} from './styledComp'

const Card = props => {
    const { content } = props
    const [ opaci, setopaci ] = useState(0)
    const [ opaciImg, setopaciImg ] = useState(1)

    return <Item>
            <div onMouseOver={ () =>  setTimeout( () => {
                setopaci(1);
                setopaciImg(0.4);
            }, 100) } 
            onMouseOut={ () => setTimeout( () => {
                setopaci(0);
                setopaciImg(1);
            },100)} style={{ position: 'relative'}}>

            <Link to={content.path} onClick={() => {window.scrollTo(0,0)}}>
               <Butt_sty opaci={opaci} type="button" value="정보"/>
            </Link>
               <Image opaciImg={opaciImg} imagePath={content.imagePath}></Image>
            </div>
            {/* <Temp color={content.imagePath}></Temp> */}
        
        
        <p style={{ margin: '15px', fontSize: "21px" }}>{content.title}</p>
        <p style={{ margin: '15px', fontSize: "14px" }}>{content.character}</p>
    </Item>
}

export default Card