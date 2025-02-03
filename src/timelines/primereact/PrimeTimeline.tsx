import { Timeline } from 'primereact/timeline';

export const PrimeTimeline = () => {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-column gap-3">
            {/* <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} /> */}
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        </div>
    )
}