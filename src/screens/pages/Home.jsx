import React from 'react'
import logo from '../../logo.svg';
import log from '../../../src/services/log.services'
import Layout from '../../components/layouts/Layout';
function Home() {
    const eh = () => {
        log.error("Error test")
    }
    return (
        <Layout>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>

                <h3>Welcome</h3>
                <img src={logo} alt='' className='App-logo' />
                <h3>React</h3>
                <button onClick={() => eh()}>click</button>
                <button
                    type="button"
                    onClick={() => {
                        throw new Error("Sentry Test Error");
                    }}
                >
                    Break the world
                </button>;
                <pre>template</pre>
            </div>
        </Layout>
    )
}

export default Home
