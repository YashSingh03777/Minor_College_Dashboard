import React from 'react';
import './Presentations.css';

export default function Presentations() {
  return (
    <div className="presentations-container">
      <h1 className="presentation-title">📊 Stock Market Trading Platform</h1>

      <section className="section fade-in">
        <h2>What is a Trading Platform?</h2>
        <p>
          A trading platform is software used to manage market positions through opening, closing, and monitoring trades via a financial intermediary like an online broker. It gives investors access to real-time stock data, analysis tools, and the ability to place orders.
        </p>
      </section>

      <section className="section fade-in">
        <h2>Why Use a Trading Platform?</h2>
        <ul>
          <li>🔎 Access to real-time market data</li>
          <li>📈 Advanced charting tools and indicators</li>
          <li>💼 Manage investment portfolios efficiently</li>
          <li>⚡ Fast trade execution</li>
          <li>🔐 Secure and regulated environment</li>
        </ul>
      </section>

      <section className="section fade-in">
        <h2>Types of Trading Platforms</h2>
        <ul>
          <li><strong>Web-based platforms:</strong> Run directly in the browser without installation.</li>
          <li><strong>Desktop platforms:</strong> Installed on a computer for advanced trading features.</li>
          <li><strong>Mobile platforms:</strong> Optimized for smartphones to trade on-the-go.</li>
        </ul>
      </section>

      <section className="section fade-in">
        <h2>Popular Trading Platforms</h2>
        <ul>
          <li>💻 Zerodha (Kite)</li>
          <li>📱 Groww</li>
          <li>📉 Upstox</li>
          <li>💼 AngelOne</li>
          <li>🌐 Robinhood (US)</li>
        </ul>
      </section>

      <section className="section fade-in">
        <h2>Common Stock Market Terms</h2>
        <ul>
          <li><strong>IPO:</strong> Initial Public Offering — when a company first sells its shares.</li>
          <li><strong>Bull Market:</strong> A period when stock prices are rising.</li>
          <li><strong>Bear Market:</strong> A period when stock prices are falling.</li>
          <li><strong>Intraday Trading:</strong> Buying and selling stocks within the same day.</li>
          <li><strong>Limit Order:</strong> An order to buy/sell at a specific price.</li>
        </ul>
      </section>

      <section className="section fade-in">
        <h2>Difference Between Trading Platforms</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Interface</th>
              <th>Features</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zerodha</td>
              <td>Clean & Fast</td>
              <td>Charts, GTT, APIs</td>
              <td>Experienced Traders</td>
            </tr>
            <tr>
              <td>Groww</td>
              <td>User-Friendly</td>
              <td>Direct Mutual Funds</td>
              <td>Beginners</td>
            </tr>
            <tr>
              <td>Upstox</td>
              <td>Modern</td>
              <td>Advanced Orders</td>
              <td>Intermediate Users</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section fade-in">
        <h2>How a Trading Platform Works</h2>
        <p>
          A user signs up with a broker, deposits funds, and places buy/sell orders through the platform. These orders are routed to exchanges, and upon match, the transaction is executed. Users can then track performance, view charts, and make informed decisions using platform tools.
        </p>
      </section>

      <footer className="presentation-footer">
        <p>📘 This information is part of the SVVV Major Project – AI-Based Smart Farming System with Investment Insights.</p>
      </footer>
    </div>
  );
}
