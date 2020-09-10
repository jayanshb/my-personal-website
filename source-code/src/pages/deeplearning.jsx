import React from "react";
import Project from "../components/project";
export default class Deeplearning extends React.Component {
  render() {
    return (
      <Project
        heading="AI Algorithmic Trading Bot"
        intro="The following project is an ongoing developmental work for deep learning based algorithmic trading bot. The goal is to backtest stratergies after every trading session and tune learning parameters in order to maximize profit. The first approach to algorothmic trading is done using the implementation of technical indicators in trading."
        challenges="One of major challenges I faced was incorporating interactive data visualization while visualizing the overall trades made by the technical indicators. I had always known the very popular Matplotlib library. Finally, I made the choice of migrating to Plotly — which I learnt thereafter — which provides interactive visualizations. My other challenge was reducing overfitting in the LSTM stock price prediction. After, carrying out some hyperparameter tuning through grid-search, I was able to hypertune the number of epochs to reduce the testing RSME loss. "
        learning="Through this project, I got to learn about trading indicators which I use on a daily basis for my own trading portfolio. Now having backested these stratergies on the AAPL stock, it has become more clear to me on how the stock behaves and what should be the buying and selling points. I also learnt about RNN and the vanishing gradient problem because of which I chose to use the LSTM cells for my stock price modelling. "
        link="https://github.com/jayanshb/Quant-Trading"
        goals="I am also currently implementing deep Q reinforcement learning in order to automate my trading profits. My stratergy would be to reward the agent the difference of my portfolio everytime a trade is made. "
        techs="•Python •NumPy •Matplotlib •Plotly •Keras"
      />
    );
  }
}
