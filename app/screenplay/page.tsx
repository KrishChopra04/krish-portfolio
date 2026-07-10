import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Screenplay',
    description: 'Request access to an unpublished screenplay written by Krish Chopra.',
}

export default function Screenplay () {
    return (
        <div className="container">
            <header className="page-head">
                <p className="label">Unpublished</p>
                <h1>A draft of a feature-length screenplay.</h1>
            </header>

        <div 
            className="section"
            style={{
                paddingBlock: 'var(--s-16)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
                gap: 'var(--s-16)',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>
                <p>
                    This one isn&apos;t public. Any interested parties that may wish to read it, please request access to the Google Drive file and send your name, email, and a line on why, and I&apos;ll follow up with access.
                </p>
            </div>

            <form
                action="https://formspree.io/f/xbdvnpjl"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}
            >
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="field">
                    <label htmlFor="sp-name" className="label">Name</label>
                    <input id="sp-name" name="name" type="text" required />
                </div>

                <div className="field">
                    <label htmlFor="sp-email" className="label">Email</label>
                    <input id="sp-email" name="email" type="email" required />
                </div>

                <div className="field">
                    <label htmlFor="sp-reason" className="label">Reason for Interest</label>
                    <textarea id="sp-reason" name="reason" required />
                </div>

                <button type="submit" className="btn" style={{ width: 'fit-content' }}>
                    Request access &rarr;
                </button>
            </form>
        </div>
    </div>
    )
}