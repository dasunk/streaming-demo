# Real-Time Streaming Application

This project demonstrates a real-time streaming application built with React and TypeScript. The application connects to a streaming API and displays data incrementally as it is received.

## Description

1. **Start and Stop Streaming**:
    - Start the stream by clicking the "Stream Text" or "Stream Characters" button.
    - Stop the stream at any time using the "Stop" button.

2. **Real-time Display**:
    - Streamed data is displayed in a scrollable console.

3. **Abort Functionality**:
    - The stream can be interrupted using an `AbortController`.

4. **Clear Console**:
    - Users can clear the console display with a single click.

5. **Automatic Scrolling**:
    - The console automatically scrolls to show the latest data.

6. **Error Handling**:
    - Gracefully handles API errors, server unavailability, and network interruptions.

7. **TypeScript Integration**:
    - Ensures type safety and clean, scalable code.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A running streaming API (e.g., `http://localhost:5000/stream-chars`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dasunk/streaming-demo.git
   cd streaming-demo
