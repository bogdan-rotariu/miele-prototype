import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { ScrollerContainer, ProgramItem } from '../../atoms'
import { ProgramListTopBar, ProgramListFooter } from '../../molecules'
import { listOfPrograms } from './program-list-mock'
import styles from './program-list.module.scss'

export const ProgramList = () => {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <section className={styles.container}>
            <ProgramListTopBar />
            <ScrollerContainer>
                {listOfPrograms.map(({ icon, label, subLabel }, index) => {
                    const key = `${label}-${index}`
                    return (
                        <SwiperSlide key={key}>
                            <ProgramItem
                                icon={icon}
                                label={`${label} ${index + 1}`}
                                subLabel={subLabel}
                                isActive={activeItem === key}
                                onClick={() => setActiveItem(key)}
                            />
                        </SwiperSlide>
                    )
                })}
            </ScrollerContainer>
            <ProgramListFooter />
        </section>
    )
}
