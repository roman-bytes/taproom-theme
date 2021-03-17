import React from 'react';
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FAQS />
    </QueryClientProvider>
  );
}

function OpenSVG() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48001 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="black" fillOpacity="0.54" />
    </svg>
  );
}

function CloseSVG() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48001 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48001 17.52 2 12 2ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12ZM7 11V13H17V11H7Z" fill="black" fillOpacity="0.54" />
    </svg>
  );
}

function FAQ({ faq }) {
  const [toggle, setToggle] = React.useState(true);

  return (
    <li className="accordion-wrapper">
      <div className="question" onClick={() => setToggle(!toggle)}>
        {faq.question}
        {toggle ? <OpenSVG/> : <CloseSVG/>}
      </div>
      <div className={toggle ? 'closed answer' : 'answer'}>{faq.answer}</div>
    </li>
  );
}

function FAQS() {
  const { isLoading, error, data } = useQuery('faqData', () =>
    fetch(
      "https://eloquent-chandrasekhar-84079d.netlify.app/.netlify/functions/faq"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading....";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="faqs">
      <ul>
        {data.map(d => <FAQ faq={d} />)}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("rb-faq");
ReactDOM.render(
    <App />,
  rootElement
);
