import { useState } from "react"
import Results from './results'

function Search() {
    const [visibility, setVisibility] = useState(false)

    const [name, setName] = useState("")
    const [repos, setRepos] = useState([])
    const [info, setInfo] = useState([])
    function handleChange(e) {
        setName(e.target.value)
    }
    function log() {
        fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(data => setRepos(data))
        fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(data => setInfo(data))
        setVisibility(true)
    }
    return <div className="search">
        <h1>Reporeq</h1>
        <input type="text" placeholder="Github user" onChange={handleChange}/>
        <input type="submit" value="Fetch" onClick={log}/>
        {visibility ? <Results repos={repos} info={info} style={{visibility: visibility}}/> : null}
    </div>
}

export default Search