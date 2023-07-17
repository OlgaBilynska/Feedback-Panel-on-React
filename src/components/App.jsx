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

  handleGood = () => {
   this.setState(prevState => ({
     good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    console.log('click on bad');
    this.countTotalFeedback();
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
            options = {[this.state.good, this.state.neutral, this.state.bad]}
            onLeaveFeedback={[this.handleGood, this.handleNeutral, this.handleBad]} />
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
