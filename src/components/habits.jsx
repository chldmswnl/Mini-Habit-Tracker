import React, { Component } from "react";
import Habit from "./habit";
import Addform from "./addform";

class Habits extends Component {
  render() {
    return (
      <div>
        <Addform onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            );
          })}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
