// import Form from "./components/Form";
// import { GithubProfile } from "./containers/GithubProfile";
import React from "react";
import { DevToCard } from "./containers/DevToCard";
import { DevToModal } from "./containers/DevToModal";
import { GithubProfileCard } from "./containers/GithubProfileCard";
import { GithubRepoCard } from "./containers/GithubRepoCard";
import { GithubRepoModal } from "./containers/GithubRepoModal";
import { StackOverflowModal } from "./containers/StackOverflowModal";
import { StackOverflowCard } from "./containers/StackOverflowCard";
import { Dashboard } from "./dashboard/Dashboard";
import { HackerNewsCard } from "./containers/HackerNewsCard";
import { WidgetContextProvider } from "./context/WidgetContext";

function App() {
  return (
    <WidgetContextProvider>
      <Dashboard />
    </WidgetContextProvider>
  );
}

export default App;
