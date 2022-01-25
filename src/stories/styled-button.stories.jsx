import { Button } from '../components/atoms/'

export default {
    title: 'Atoms/Button',
    component: Button,
}

const Template = (args) => (
    <div style={{ backgroundColor: 'var(--color-dark-100)' }}>
        <Button {...args}>{args.children}</Button>
    </div>
)

export const Default = Template.bind({})
Default.args = {
    children: 'Button Text',
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Disabled Text',
    isDisabled: true,
}
