import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { VenueList } from "./venue/VenueList";
import { VenueCreate } from "./venue/VenueCreate";
import { VenueEdit } from "./venue/VenueEdit";
import { VenueShow } from "./venue/VenueShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { CharityList } from "./charity/CharityList";
import { CharityCreate } from "./charity/CharityCreate";
import { CharityEdit } from "./charity/CharityEdit";
import { CharityShow } from "./charity/CharityShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { ConversationParticipantList } from "./conversationParticipant/ConversationParticipantList";
import { ConversationParticipantCreate } from "./conversationParticipant/ConversationParticipantCreate";
import { ConversationParticipantEdit } from "./conversationParticipant/ConversationParticipantEdit";
import { ConversationParticipantShow } from "./conversationParticipant/ConversationParticipantShow";
import { EntityMediaList } from "./entityMedia/EntityMediaList";
import { EntityMediaCreate } from "./entityMedia/EntityMediaCreate";
import { EntityMediaEdit } from "./entityMedia/EntityMediaEdit";
import { EntityMediaShow } from "./entityMedia/EntityMediaShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Charity Fitness Web App Service"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="Venue"
          list={VenueList}
          edit={VenueEdit}
          create={VenueCreate}
          show={VenueShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Charity"
          list={CharityList}
          edit={CharityEdit}
          create={CharityCreate}
          show={CharityShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
        <Resource
          name="ConversationParticipant"
          list={ConversationParticipantList}
          edit={ConversationParticipantEdit}
          create={ConversationParticipantCreate}
          show={ConversationParticipantShow}
        />
        <Resource
          name="EntityMedia"
          list={EntityMediaList}
          edit={EntityMediaEdit}
          create={EntityMediaCreate}
          show={EntityMediaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
