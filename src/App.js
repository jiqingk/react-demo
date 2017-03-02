import React, { Component } from 'react';
import {
   // ButtonToolbar,
    //Button,
    //Slider,
    Nav,
    NavItem,
    Gallery,
} from 'amazeui-react';


var onSelect = function(index, direction,) {
    console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};
var data = [
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic06.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic06.jpg",
        "title": "世界各国最高法院专区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic05.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic05.jpg",
        "title": "“一带一路”专区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic07.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic07.jpg",
        "title": "音视频专区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic08.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic08.jpg",
        "title": "公共图书馆馆际互借去",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic01.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic01.jpg",
        "title": "数据库综合资源专区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic02.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic02.jpg",
        "title": "大法官专区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic03.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic03.jpg",
        "title": "中华法系文献区",
        "desc": "2375-09-26"
    },
    {
        "img": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic04.jpg",
        "link": "http://eastlawlibrary.court.gov.cn/court-digital-library-search/page/portal/imgs/pic04.jpg",
        "title": "法律珍本善本库",
        "desc": "2375-09-26"
    }
];

class App extends  React.Component{
    render(){
        return(
            <div>
                <Nav tabs>
                    <NavItem active href="//">首页</NavItem>
                    <NavItem href="http://">开始使用</NavItem>
                    <NavItem href="http://">按需定制</NavItem>
                </Nav>
                {/*<Slider onSelect={onSelect}>
                    <Slider.Item><img
                        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                    </Slider.Item>
                    <Slider.Item><img
                        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></Slider.Item>
                    <Slider.Item>
                        <img
                            src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></Slider.Item>
                    <Slider.Item>
                        <img
                            src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></Slider.Item>
                    <Slider.Item><img
                        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                    </Slider.Item>
                </Slider>*/}
                <Gallery data={data} />

            </div>

        );

    }
}
export default  App;

/*class App extends React.Component{
    render() {
        return (
            <ButtonToolbar>
                <Button radius>Default</Button>
                <Button amStyle="primary" radius>Primary</Button>
                <Button amStyle="secondary" radius>Secondary</Button>
                <Button amStyle="success" radius>Success</Button>
                <Button amStyle="warning" radius>Warning</Button>



            </ButtonToolbar>
        );
    }
}
export  default App;
/!*
class App extends Component {
  render() {
    return (
        <ButtonToolbar>
            <Button radius>Default</Button>
            <Button amStyle="primary" radius>Primary</Button>
            <Button amStyle="secondary" radius>Secondary</Button>
            <Button amStyle="success" radius>Success</Button>
            <Button amStyle="warning" radius>Warning</Button>



        </ButtonToolbar>
    );
  }
}

export default App;
*!/*/
