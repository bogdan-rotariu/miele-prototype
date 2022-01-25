import { ProgramListTopBar } from '../components/molecules'

export default {
    title: 'Molecules/ProgramListTopBar',
    component: ProgramListTopBar,
}

const Template = (args) => (
    <div style={{ backgroundColor: 'var(--color-dark-100)' }}>
        <ProgramListTopBar {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    list: ['List Item', 'List Item'],
}
