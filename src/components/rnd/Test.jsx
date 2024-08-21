import React,{useEffect} from 'react'

function Test() {
    const senMsg = () => {
        window.parent.postMessage({
            txt:'Hello how are you?'
        },'http://localhost:3000')
    }
    useEffect(() => {
     window.addEventListener("message" ,(e) => {
        if(e.origin !== 'http://localhost:3000') return;
        console.log(e.data)
     })   
     return () => {
        window.removeEventListener("message",() => {})
     }
    }, [])
    const onChange = e => {}
    return (
        <div>
            <div>
                <label>Search</label>
                <input type='text' name='search' onChange={onChange}/>
            </div>
        </div>
    )
}

export default Test
