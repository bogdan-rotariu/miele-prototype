import * as IconList from '../components/atoms/icons'

export default {
    title: 'Atoms/Icons',
    component: () => <div>Icons</div>,
}

export const Overview = () => {
    return (
        <ul>
            {Object.entries(IconList).map(([name, Component]) => (
                <li key={name}>
                    <h3>{name}</h3>
                    <Component />
                </li>
            ))}
        </ul>
    )
}
