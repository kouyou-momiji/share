import React from 'react';

const Home = (props) => {
    function onJumpParam(){
        props.history.push({
            pathname: '/param/1',
            state: {
                id: 3
            }
        })
    }
    return (
        <div>
            <h1>主页，主页中有非常非常好的内容</h1>
            <button onClick={onJumpParam}>点击跳转</button>
        </div>
    );
};

export default Home;
