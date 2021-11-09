import { Container } from "semantic-ui-react";
import "./App.css";

import NewEntryForm from "./components/NewEntryForm";
import MainHeader from "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value="2550.00" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Income" value="$10" isExpense="true" />
      <EntryLine description="Expense" value="$10" />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
