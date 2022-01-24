import { Swiper } from 'swiper/react'
import { Scrollbar } from 'swiper'
import { node } from 'prop-types'
import 'swiper/scss'
import 'swiper/scss/scrollbar'
import './swiper-override.css'
import styles from './scroller-container.module.scss'

export const ScrollerContainer = ({ children }) => (
    <Swiper
        modules={[Scrollbar]}
        scrollbar={{
            hide: false,
            dragClass: styles.scrollbar,
            dragSize: 130,
        }}
        grabCursor
        spaceBetween={32}
        slidesPerView={5}
        slidesOffsetAfter={32}
        slidesOffsetBefore={32}
        className={styles.container}
    >
        {children}
    </Swiper>
)

ScrollerContainer.propTypes = {
    children: node.isRequired,
}
