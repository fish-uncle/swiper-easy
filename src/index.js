import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.css'
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

let sw = {};

class SwiperEasy extends React.Component {
  constructor() {
    super();
    const id = Math.random().toString(36).replace('0.', '');
    this.state = {
      className: 'easy-swiper',
      id
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    prevProps.children.length !== this.props.children.length ? this.update() : void 0
  }

  componentWillReceiveProps(nextProps) {

  }

  init() {
    const {id, className} = this.state;
    sw[id] = new Swiper(`.${className}-${id}`, this.props.options || {})
  }

  slideNext(speed, runCallbacks) {
    const {id} = this.state;
    sw[id].slideNext(speed, runCallbacks);
  }

  slidePrev(speed, runCallbacks) {
    const {id} = this.state;
    sw[id].slidePrev(speed, runCallbacks);
  }

  slideTo(index, speed, runCallbacks) {
    const {id} = this.state;
    sw[id].slideTo(index, speed, runCallbacks);
  }

  slideToLoop(index, speed, runCallbacks) {
    const {id} = this.state;
    sw[id].slideToLoop(index, speed, runCallbacks);
  }

  update() {
    const {id, className} = this.state;
    sw[id].destroy(false);
    sw[id] = new Swiper(`.${className}-${id}`, this.props.options || {})
  }

  destroy(deleteInstance, cleanupStyles) {
    const {id} = this.state;
    sw[id].destroy(deleteInstance, cleanupStyles);
  }

  getTranslate() {
    const {id} = this.state;
    sw[id].getTranslate();
  }

  setTranslate(translate) {
    const {id} = this.state;
    sw[id].setTranslate(translate);
  }

  appendSlide(slides) {
    const {id} = this.state;
    sw[id].appendSlide(slides);
  }

  prependSlide(slides) {
    const {id} = this.state;
    sw[id].prependSlide(slides);
  }

  addSlide(index, slides) {
    const {id} = this.state;
    sw[id].addSlide(index, slides);
  }

  removeSlide(index) {
    const {id} = this.state;
    sw[id].removeSlide(index);
  }

  removeAllSlides() {
    const {id} = this.state;
    sw[id].removeAllSlides();
  }

  render() {
    const {className = '', options = {}, ...others} = this.props;
    let navigationHtml = null, paginationHtml = null, scrollbarHtml = null;
    if (options.navigation) {
      navigationHtml = <Fragment>
        <div
          className={`swiper-button-next ${options.navigation.nextEl && options.navigation.nextEl.replace('.', '')}`}></div>
        <div
          className={`swiper-button-prev ${options.navigation.prevEl && options.navigation.prevEl.replace('.', '')}`}></div>
      </Fragment>
    }
    if (options.pagination) {
      paginationHtml =
        <div className={`swiper-pagination ${options.pagination.el && options.pagination.el.replace('.', '')}`}></div>
    }
    if (options.scrollbar) {
      scrollbarHtml =
        <div className={`swiper-scrollbar ${options.scrollbar.el && options.scrollbar.el.replace('.', '')}`}></div>
    }
    return (
      <div className={`swiper-container ${this.state.className}-${this.state.id} ${className}`} {...others}>
        <div className='swiper-wrapper'>
          {this.props.children.map((item, index) => <div className='swiper-slide' key={index}>{item}</div>)}
        </div>
        {navigationHtml}
        {paginationHtml}
        {scrollbarHtml}
      </div>
    );
  }
}

SwiperEasy.propTypes = {
  options: PropTypes.object,
  className: PropTypes.string
};

export default SwiperEasy;