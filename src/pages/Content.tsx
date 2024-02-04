export default function _(args: { title: string }) {
    return (
        <div className="content">
            <header>
                <h1>{args.title}</h1>
            </header>
            <main></main>
        </div>
    );
}