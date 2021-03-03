import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
        console.log('issueData is: ', issueData);
        return (
            <>
                <Route exact path='/'>
                    <ul>
                        {!!issueData ? (
                            issueData.map(issue => {
                                return (
                                    <div key={issue.id}>
                                        <li>
                                            <h2>Issue: <em>{issue.title}</em></h2>
                                            <Link to={`/issue/${issue.number}`}>
                                                View Issue
                                            </Link>
                                        </li>
                                    </div>
                                )
                            })
                        ) : (
                            <p>Loading issues...</p>
                        )}
                    </ul>
                </Route>
                <Route path='/issue/:issue_number'>
                    <Issue issueData={issueData}/>
                </Route>
            </>
        )
    }
}

export default IssueList;