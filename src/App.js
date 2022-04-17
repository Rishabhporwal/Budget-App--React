import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";

import NewEntryForm from "./components/NewEntryForm";
import MainHeader from "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModelEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.action";

function App() {
  const [incomeTotal, setincomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);

  const entries = useSelector((state) => state.entries);
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setincomeTotal(totalIncome);
  }, [entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());
  }, []);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
