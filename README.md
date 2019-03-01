# swiper-easy

![version](https://img.shields.io/badge/version-v1.0.0-brightgreen.svg?style=flat-square) [![React](https://img.shields.io/badge/react-16.x.x-brightgreen.svg?style=flat-square)](https://github.com/facebook/react) [![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

### 下载
```
npm install swiper-easy --save
```

### 使用说明
```javascript
import SwiperEasy from 'swiper-easy';
class Demo extends React.Component {
  
  state={
     list:[
        'swiper1',
        'swiper2',
        'swiper3',
     ]
  }
  
  componentDidMount(){
      console.log(this.refs.s);
  }
  
  render() {
      const {list} = this.state;
      const options = {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scroll-bar',
        },
      };
      return (
        <div>
          <SwiperEasy ref='s' className='diy-className' options={options}>
            {list.map((item, index) => <div key={index}>{item}</div>)}
          </SwiperEasy>
        </div>
      );
    }
}
```

### API

同 [Swiper4](https://www.swiper.com.cn/)
* init 初始化
* slideNext
* slidePrev
* slideTo
* slideToLoop
* update
* destroy
* getTranslate
* setTranslate
* appendSlide
* prependSlide
* addSlide
* removeSlide
* removeAllSlides
```
// e.g.

<EasySwiper ref='swiper' className='diy-className' options={options}>
   <div>swiper1</div>
   <div>swiper2</div>
</EasySwiper>

// this.refs.swiper.update();
```


