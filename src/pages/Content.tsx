import Post from '../components/Post';

export default function _(args: { title: string }) {
    return (
        <div className="content">
            <header>
                <h1>{args.title}</h1>
            </header>
            <main>
                <Post title="Post title" body="Post body" id={0} userId={0} />
            </main>
        </div>
    );
}