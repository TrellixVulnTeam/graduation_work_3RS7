import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from "../test/index";
import GuestBook from "../guestBook/index";
import Writing from "../writing/index";
import WritingPage from '../writing_page';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Test}/>
            <Route path="/guestbook" component={GuestBook}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/writingpage" component={WritingPage}/>
        </Switch>
    </BrowserRouter>
)