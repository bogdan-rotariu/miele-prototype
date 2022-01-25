import '@testing-library/jest-dom'
import { ProgramList } from './components/organisms'
import './index.scss'

export function App() {
    return (
        <div>
            <header>
                <h1>Miele proto</h1>
                <ProgramList />
            </header>
        </div>
    )
}
