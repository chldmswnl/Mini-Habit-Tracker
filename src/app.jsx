import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Writing", count: 0 },
      { id: 3, name: "Speaking", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }

      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }

      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const index = this.state.habits.indexOf(habit);
    const new_habits = this.state.habits.splice(index, 1);
    this.setState(new_habits);
  };

  onAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  onReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }

      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.onAdd}
          onReset={this.onReset}
        />
      </div>
    );
  }
}

export default App;
