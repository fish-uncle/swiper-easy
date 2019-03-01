import Swiper from './lib/swiper.min';
import './lib/swiper.min.css';
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
    this.update();
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

  update(updateTranslate) {
    const {id} = this.state;
    sw[id].update(updateTranslate);
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
    const {className, options = {}, ...others} = this.props;
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
  options: PropTypes.object
};

export default SwiperEasy;