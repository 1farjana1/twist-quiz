import React from 'react';

const Blog = () => {
    return (
        <div className='ms-5 me-5 mt-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <h3>What is the purpose of <span className='text-success'>React Route</span>?</h3>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <p><strong className='fs-4'>React Router</strong> is a standard library for routing in React.Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.<span className='fw-semibold'>It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</span></p>
                        </div>
                    </div>
                </div>

                {/* second question start... */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <h3 className='text-primary'>How does <span className='text-success'>Context API</span> works in react?</h3>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <p><strong className='fs-4'>React Router</strong> is a standard library for routing in React.Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.<span className='fw-semibold'>It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</span></p>
                        </div>
                    </div>
                </div>

                {/* third question starts */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <h3>What is <span className='text-success'>UseRef</span> and how does it work?</h3>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <p><strong className='fs-4'>UseRef</strong><span className='fw-semibold'> returns a mutable ref object whose current property is initialized to the passed argument ( initialValue ).</span>The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


<p> <strong>React Context API is</strong><span className='fw-semibold'>a way for a React app to effectively produce global variables that can be passed around</span>This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>