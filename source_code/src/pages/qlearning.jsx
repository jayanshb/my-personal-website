import React from "react";
import Project from "../components/project";

export default class QLearning extends React.Component {
  render() {
    return (
      <Project
        heading="AI Game playing bot"
        intro="This project implements a Gaming Bot for the game Frozen Lake from OpenAI Gym, trained using Q Learning. Q learning is very useful in automating processes which can be structured as markov processes. For a game with such a less state space, Q learning based on q tables works well. However, when the number of states increases, deep Q learning becomes more efficient.Generally, Reinforcement Learning is a family of machine learning techniques that allows us to create intelligent agents that learn from the environment by interacting with it. In doing so, they learn the optimal policy which would grant them the maximum future discounted rewards. This is useful in many real world applications where supervised learning might not be the best approach due to various reasons like nature of task itself, lack of appropriate labelled data, etc. The important idea here is that this technique can be applied to any real world task that can be described loosely as a Markovian process."
        challenges="One of the challenges I faced was understanding how q learning works. I always have believed in in-depth knowledge as opposed to superficial learning. Hence, I spent a good two days taking notes about the mathematical theory behind Reinforcement learning."
        learning="I learnt about how reinforcement learning can be very benifical when machines are dealing with new unlabeled data for the first time. "
        link="https://github.com/jayanshb/FrozenLakeGameQLearningAI"
        goals="Now that I have a deep sense of the theory behind reinforcement learning, I would want to challenge myself into implementing reinforcement learning to play the classic 'Atari Breakout' game."
        techs="•Python •NumPy •Matplotlib"
      />
    );
  }
}
