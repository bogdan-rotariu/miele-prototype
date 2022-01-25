import { render } from '@testing-library/react'
import { ProgramListFooter } from './program-list-footer'

describe('ProgramListFooter', () => {
    it('should match snapshot', () => {
        const { container } = render(<ProgramListFooter />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
