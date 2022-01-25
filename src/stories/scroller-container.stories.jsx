import { node } from 'prop-types'
import { SwiperSlide } from 'swiper/react'
import { ScrollerContainer } from '../components/atoms'

export default {
    title: 'Atoms/ScrollerContainer',
    component: ScrollerContainer,
}

const SlideContent = ({ children }) => (
    <span style={{ margin: '0.5rem', display: 'flex' }}>{children}</span>
)
SlideContent.propTypes = {
    children: node,
}

export const Component = () => {
    return (
        <div
            style={{
                backgroundColor: 'var(--color-dark-100)',
                color: 'var(--color-white)',
                width: '30%',
            }}
        >
            <ScrollerContainer>
                <SwiperSlide>
                    <SlideContent>Slide 1</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 2</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 3</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 4</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 5</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 6</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 7</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 8</SlideContent>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideContent>Slide 9</SlideContent>
                </SwiperSlide>
            </ScrollerContainer>
        </div>
    )
}
