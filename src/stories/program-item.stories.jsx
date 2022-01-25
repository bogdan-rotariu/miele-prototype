import { ProgramItem, PlaneIcon } from '../components/atoms/'

export default {
    title: 'Atoms/ProgramItem',
    component: ProgramItem,
}

const Template = (args) => (
    <div style={{ backgroundColor: 'var(--color-dark-100)' }}>
        <ProgramItem {...args} />
    </div>
)

export const Default = Template.bind({})
Default.args = {
    label: 'Label',
    subLabel: 'Second Line',
    icon: <PlaneIcon />,
}
