import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import PostList from './components/post.list';
import Header from './components/header';
import Navigation from './components/Navigation';
import PostEntrySummary from './components/PostEntrySummary';

// contexts
import { ThemeConfig, ThemeContext } from './contexts/ThemeContext';
import { useFetch } from './hooks/useFetch';
import About from './components/About';
import Contact from './components/Contact';
import Create from './components/Create';

// consts
const API = process.env.REACT_APP_JSON_PLACEHOLDER_API; 

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, addPost, removePost] = useFetch(`${API}/posts`);
    const [users] = useFetch(`${API}/users`);

    useEffect(() => {
        if (posts.length > 0) {
            document.title = `My blog has ${posts.length} entries`;
        }
    }, [posts]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router>
                <Navigation />
                <Switch>
                <Route exact path="/">
                    <div style={ThemeConfig[theme]}>
                        <Header />
                        {posts?.length > 0 && users?.length > 0 ? (
                                <PostList
                                    posts={posts}
                                    users={users}
                                    removePost={removePost}
                                />
                            ) : (
                                <div>Loading...</div>
                        )}
                    </div>
                </Route>
                <Route path="/create">
                    <Create addPost={addPost} />
                </Route>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/post/id" component={PostEntrySummary}/>
                </Switch>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;