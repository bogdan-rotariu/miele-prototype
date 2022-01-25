import { render } from '@testing-library/react'
import { ProgramItem } from './program-item'

describe('ProgramItem', () => {
    it('should match snapshot if render correctly', () => {
        const { container } = render(
            <ProgramItem
                label='Label'
                icon={() => ''}
                onClick={jest.fn()}
                subLabel='sub label'
            />,
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render nothing if missing label', () => {
        const { container } = render(
            <ProgramItem
                icon={() => ''}
                onClick={jest.fn()}
                subLabel='sub label'
            />,
        )
        expect(container.firstChild).toBeNull()
    })

    it('should render nothing if missing icon', () => {
        const { container } = render(
            <ProgramItem
                label='label'
                onClick={jest.fn()}
                subLabel='sub label'
            />,
        )
        expect(container.firstChild).toBeNull()
    })
})
