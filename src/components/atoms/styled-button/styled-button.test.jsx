import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
    it('should match snapshot', () => {
        const { container } = render(
            <Button onClick={jest.fn()}>button</Button>,
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should match snapshot if disabled', () => {
        const { container } = render(
            <Button onClick={jest.fn()} isDisabled>
                button
            </Button>,
        )
        expect(container.firstChild).toMatchSnapshot()
    })
})
