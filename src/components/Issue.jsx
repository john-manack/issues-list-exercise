import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import './Issue.css';

const Issue = (props) => {
    const { issue_number } = useParams();
    console.log('ISSUE NUMBER: ', issue_number)

    const { issueData } = props;
    console.log('issueData from props: ', issueData)
    let issue = issueData.find(i => i.number === parseInt(issue_number));
    console.log('ISSUE: ', issue)

    return (
        <>
            
            <ReactMarkdown children={issue.body} />
        </>
    );
}

export default Issue;