import React, { Component } from 'react';

import axios from '../../../axios';
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Link } from 'react-router-dom'

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('/posts')
            .then(respose => {
                const posts = respose.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dorababu'
                    }
                });
                this.setState({ posts: updatedPosts })
            })
    }

    viewPostHandler = (id) => {
        this.props.history.push({ pathname: '/' + id });
        //this.props.history.push('/' + id );
    }

    render() {

        const posts = this.state.posts.map(post => {
            return (
                // <Link to={'/' + post.id} key={post.id} >
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    viewPost={() => this.viewPostHandler(post.id)} />
                // </Link>
            )
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;