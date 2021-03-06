import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {


    render() {
        return (
            <div className='Blog'>
                <header>
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/new-post"
                        }}>New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/" component={Posts} exact />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>
                {/* <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;