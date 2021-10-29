import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from "../test/index";
import GuestBook from "../guestBook/index";
import Writing from "../writing/index";
import Read from '../read';
import WritingUpdate from '../writing_update';
import UpdatePasswordCheck from '../updatePasswordCheck';
import DeletePasswordCheck from '../deletePasswordCheck';
import Delete from "../delete";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Test}/>
            <Route path="/guestbook" component={GuestBook}/>
            <Route path="/writing" component={Writing}/>
            <Route path="/read/:id" component={Read}/>
            <Route path="/writingupdate/:id" component={WritingUpdate}/>
            <Route path="/updatepasswordcheck/:id" component={UpdatePasswordCheck}/>
            <Route path="/deletepasswordcheck/:id" component={DeletePasswordCheck}/>
            <Route path="/delete/:id" component={Delete}/>
        </Switch>
    </BrowserRouter>
)