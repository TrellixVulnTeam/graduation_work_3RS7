import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from "../test/index";
import GuestBook from "../guestBook/index";
import Writing from "../writing/index";
import Read from '../read';
import WritingUpdate from '../writing_update';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Test}/>
            <Route path="/guestbook" component={GuestBook}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/read" component={Read}/>
            <Route path="/writingupdate" component={WritingUpdate}/>
        </Switch>
    </BrowserRouter>
)