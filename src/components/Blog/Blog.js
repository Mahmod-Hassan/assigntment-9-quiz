import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (

        <Accordion defaultActiveKey="0" alwaysOpen flush className='w-75 mx-auto'>
            <h2 className='text-primary text-center my-3'>Learn About React..</h2>

            {/* question number 1 start */}
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is the purpose of react router ?</Accordion.Header>
                <Accordion.Body>
                    React is mainly used for dynamic Routing.
                    React router implements a component-based approach to routing. With the help of react router we can prevent a page refresh. By Link components we can go to another path without refreshing the page. In a single page application you must use react router.
                </Accordion.Body>

                {/* question number 2  start*/}
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How does Context API work ?</Accordion.Header>
                <Accordion.Body>
                    Basically we passed data from parent to child component via props method. This is not a good system at all.Because if we need to pass data 4 level down from parent componene then how do you do that? you have to go through the props drilling method. Here is Context API coming to your life easy.Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </Accordion.Body>

                {/* question number 3 start */}
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Do you know about useRef ?</Accordion.Header>
                <Accordion.Body>
                    The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;