import React from "react";

function Results(props) {
    const repos = props.repos
    const info = props.info
    const reposList = 
        repos.length > 0 ? (
            repos.map((item) => {
                return <li key={item.id}>{item.name} <span className="date">{item.created_at}</span><br/>
                {item.description != null ? item.description : "No description"}<br/><br/>
                Last update: {item.updated_at}<br/>
                Watching: {item.watchers}<br/>
                Forks: {item.forks}
                </li>
            })) : (
                <li key="213218492492334294239423429">No repos</li>
            )

    return (
        <div className="repos">
            <div className="maininfo">
                <p>
                    <h1>{info.login}</h1>
                    <img src={info.avatar_url} alt={info.avatar_url}/>
                </p>
            </div>
            <p><strong>Description</strong>: {info.bio}</p>
            <p><strong>Website</strong>: {info.blog}</p>
            <ul>{reposList}</ul>
        </div>
    )
}

export default Results