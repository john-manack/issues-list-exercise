import './Issue.css';
import ReactMarkdown from 'react-markdown/with-html'

const Issue = (props) => {
    const { body } = props;
    return (
            <ReactMarkdown children={body} />
    );
}

export default Issue;