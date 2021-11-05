import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Items, Menu } from './styledComp'
import Card from './Card'
import Detail from './Detail'
import { contents } from '../utilities/contents'

const Collection = () => {
    return <div>
        <Menu>
            <h2 style={{ color: '#87CE00' }}>Book 리스트</h2>
        </Menu>
        <Switch>
            {contents.map((content, idx) => {
                return <Route path={content.path} key={idx}>
                    <Detail image={content.imagePath} content={content.detail} subDetail={content.subDetail}
                    number = {content.number} img={content.img} video={content.video}/>
                </Route>
            })}
            <Route path="/">
                <Items>
                    {contents.map((content, idx) => {
                        return <Card content={content} key={idx}/>
                    })}
                </Items>
            </Route>
        </Switch>
    </div>
}

export default Collection