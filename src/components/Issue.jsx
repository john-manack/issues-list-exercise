import './Issue.css';

const Issue = (props) => {
    const { title, url, body } = props;
    return (
        <li>
            <h2>Issue: <em>{title}</em></h2>
            <p>Link to Issue: <a href={url} rel="noreferrer" target="_blank">{url}</a></p>
            <p>{body}</p>
        </li>
    );
}

export default Issue;