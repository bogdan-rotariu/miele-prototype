import { ProgramListFooter } from '../components/molecules'

export default {
    title: 'Molecules/ProgramListFooter',
    component: ProgramListFooter,
}

const Template = (args) => (
    <div style={{ backgroundColor: 'var(--color-dark-100)' }}>
        <ProgramListFooter {...args} />
    </div>
)

export const Default = Template.bind({})
