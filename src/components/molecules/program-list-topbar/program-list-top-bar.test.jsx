import { render } from '@testing-library/react'
import { ProgramListTopBar } from './program-list-top-bar'

describe('ProgramListTopBar', () => {
    it('should match snapshot', () => {
        const { container } = render(<ProgramListTopBar />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
