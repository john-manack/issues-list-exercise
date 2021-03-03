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
                        return (
                            <li>
                                <h2>Issue: <em>{issue.title}</em></h2>
                                <p>Link to Issue: <a href={issue.html_url} rel="noreferrer" target="_blank">{issue.html_url}</a></p>
                                <Issue body={issue.body} key={issue.id}/>
                            </li>
                        )
                    })
                ) : (
                    <p>Loading issues...</p>
                )}
            </ul>
        )
    }
}

export default IssueList;