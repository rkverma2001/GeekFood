import { useState, useEffect } from "react";

const QuotePage = () => {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/quote.json");
        const data = await response.json();
        setQuotesData(data);
        console.log(data);
      } catch (error) {
        console.error("Error in fetching quotes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-8 p-4 py-8 mx-auto lg:gap-12 max-w-7xl">
      {quotesData.map((quote, index) => (
        <Quote key={index} quote={quote.quote} author={quote.author} />
      ))}
    </div>
  );
};

const Quote = (props) => {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {props.quote}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {props.author}
      </p>
    </div>
  );
};

export default QuotePage;
