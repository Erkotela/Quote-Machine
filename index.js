function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState("");
  const [color, setColor] = React.useState("#111");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let colorRandomIndex = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randomIndex]);
    setColor(colors[colorRandomIndex]);
  };

  return (
    <div id="container" style={{ backgroundColor: color, color: color }}>
      <div id="quote-box">
        <div className="box1">
          {randomQuotes ? (
            <>
              <h2 id="text">&quot;{randomQuotes.text}&quot;</h2>
              <p id="author">- {randomQuotes.author || "No Author"}</p>
            </>
          ) : (
            <h2>Loading</h2>
          )}
          <div className="box2">
            <button
              id="new-quote"
              onClick={getNewQuote}
              className="btn btn-primary"
            >
              New Quote
            </button>
            <a
              href={
                "https://www.tumblr.com/share/link?url=&quote=" +
                encodeURIComponent(
                  '"' + randomQuotes.text + '" - ' + randomQuotes.author
                )
              }
              id="tumbrl-quote"
              className="btn btn-warning"
              target="_blank"
            >
              <i className="fab fa-tumblr"></i>
            </a>
            <a
              href={
                "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                encodeURIComponent(
                  '"' + randomQuotes.text + '"' + randomQuotes.author
                )
              }
              id="tweet-quote"
              className="btn btn-info"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
