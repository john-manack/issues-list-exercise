import './Issue.css';
import ReactMarkdown from 'react-markdown/with-html'

const Issue = (props) => {
    const { title, url, body } = props;
    return (
        <li>
            <h2>Issue: <em>{title}</em></h2>
            <p>Link to Issue: <a href={url} rel="noreferrer" target="_blank">{url}</a></p>
            <ReactMarkdown children={body} />
        </li>
    );
}

export default Issue;