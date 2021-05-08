import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch} from 'react-router-dom';

// components
import PostList from './components/PostList';
import Header from './components/header';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Create from './components/Create';
import PostEntry from './components/PostEntry';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LogIn';

// contexts
import { ThemeConfig, ThemeContext } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

//Custom Hook
import { useFetch } from './hooks/useFetch';

//Styles
import { PageWrapper,
    PageContainer,
    PostListWrapper, } from './styles/GlobalStyles';

// consts
const API = process.env.REACT_APP_JSON_PLACEHOLDER_API

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, addPost, removePost] = useFetch(`${API}/posts`);
    const [users] = useFetch(`${API}/users`);

    useEffect(() => {
        if (posts?.length > 0) {
            document.title = `My blog has ${posts?.length} entries`;
        }
    }, [posts]);

    return (
    <PageWrapper>
       <AuthProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Router>
                <Navigation />
                <Switch>
                <Route exact path="/">
                    <div style={ThemeConfig[theme]}>
                        <PageContainer>
                        <Header />
                        <PostListWrapper>
                        {posts?.length > 0 && users?.length > 0 ? (
                                <PostList
                                    posts={posts}
                                    users={users}
                                    removePost={removePost}
                                    theme={theme}
                                />
                            ) : (
                                <div>Loading...</div>
                        )}
                        </PostListWrapper>
                        </PageContainer>
                    </div>
                </Route>
                <PrivateRoute path="/create">
                    <Create addPost={addPost} />
                </PrivateRoute> 
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/post/:id" component={PostEntry}/>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route exact path="/404" component={NotFound} />
                    <Route>
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </Router>
        </ThemeContext.Provider>
        </AuthProvider>
        </PageWrapper>
    );
};

export default App;