import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './styledComp'

const Detail = props => {
    const { image, content, subDetail, number, img, video } = props
    const Introduce = {
        margin: '30px', lineHeight: '30px',
        width: '95%', color: 'black'
    }
    return <div style={Introduce}>
        <table>
            <thead>
                <tr>
                    <td>
                        <div>
                            <img style={{ width: '250px', height: '100%' }} src={image} alt="책 이미지"/>
                        </div>
                    </td>
                    <td style={{ padding: '15px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <td><h2 style={{ margin: '10px 0px' }}>책 소개</h2></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p style={{ color: 'hotpink', fontSize: '17px', margin: '10px 0px' }}>{content}</p>
                                        <p style={{ textAlign: 'justify', fontSize: '15px', margin: '10px 0px' }}>{subDetail}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td colSpan="2">
                        <h2>상세 소개</h2>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">{number === 0 ? video: img}</td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ textAlign: 'center'}}>
                        <Link to="/" onClick={() => {window.scrollTo(0,0)}}>
                            <Button>홈으로</Button>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Detail