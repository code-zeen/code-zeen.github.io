import { ReactNode } from 'react'

function Section({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div style={{ textAlign: 'left', padding: '0 16px 0' }} className="border">
            <h3>{title}</h3>
            <hr />
            {children}
        </div>
    )
}

export default Section