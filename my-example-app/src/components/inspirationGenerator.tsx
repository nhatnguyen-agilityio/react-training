import { useState } from "react";
import quotes from "../mock/quotes";
import FancyText from "./fancyText";

export default function InspirationGenerator({ children }: Readonly<{ children: React.ReactNode }>) {
    const [index, setIndex] = useState(0);
    const quote = quotes[index]
    const next = () => setIndex((index + 1) % quotes.length);

    return (
        <>
            <p>Your inspiration quote is:</p>
            <FancyText text={quote}/>
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
}