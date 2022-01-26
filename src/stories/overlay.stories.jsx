import { Overlay } from '../components/atoms'

export default {
    title: 'Atoms/Overlay',
    component: Overlay,
}

const Template = (args) => (
    <div>
        Regular Content
        <Overlay {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    isActive: true,
}
