import React, { Component } from 'react';
import Issue from './Issue';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueData: [],
        }
    }

    _loadIssues = async () => {
        const url = 'https://api.github.com/repos/facebook/create-react-app/issues'
        const data = await 
            fetch(url)
            .then(response => response.json());
        return data;
    }

    async componentDidMount() {
        const apiData = await this._loadIssues();
        this.setState({
            issueData: apiData,
        });
    }

    render () {
        const { issueData } = this.state;
        return (
            <ul>
                {!!issueData ? (
                    issueData.map((issue) => {
                        return <Issue title={issue.title} url={issue.html_url} body={issue.body} key={issue.id}/>
                    })
                ) : (
                    <p>Loading issues...</p>
                )}
            </ul>
        )
    }
}

export default IssueList;