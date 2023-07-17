import React from 'react';
// import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positivePercentage = Math.round((good / this.countTotalFeedback()) * 100);
    return positivePercentage;
  };

  render() {

    const total = this.countTotalFeedback();
   
    return (
      <div className='css.container'>

        <Section title="Please provide your feedback">
          <FeedbackOptions 
            options = {['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick} />
        </Section>

        <Section title="This is the statistics:">

          { !total ?
            <Notification message="There is no feedback" />
            :
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />} 

        </Section>
                  
      </div>
    )
  
  };
}
