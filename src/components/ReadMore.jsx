import { useState } from "react";

const ReadMore2 = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 204) : text}
            <br />
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
            >
            {isReadMore ? <div className="flex mt-4"><div className="bg-orange-600 w-10 rounded-full hover:pr-32 hover:text-black transition-all"><button onClick={toggleReadMore} className='inline-flex w-36 text-sm pl-4 py-2 uppercase font-sans font-semibold'>
            Read More<svg className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></button></div></div>
             : <div className="flex mt-4"><div className="bg-orange-600 w-10 rounded-full hover:pr-28 hover:text-black transition-all"><button onClick={toggleReadMore} className='inline-flex w-36 text-sm pl-4 py-2 uppercase font-sans font-semibold'>
                Show Less</button></div>
            </div>}
            </span>
        </div>
    );
};

const ReadMore = () => {
    return (
        <div className="container">
            {/* <h2> */}
                <ReadMore2>
                    N.A.V Yuva Foundation, since October 2022, a Non- Government Organisation registered under Ministry of Corporate Affairs working as a platform where we believe in the inherent potential of every individual.
                    Driven by humanity and guided by kindness ,our team work tirelessly to address some of the most pressing challenges of our time. 
                    It is not only providing access to education but also promoting healthcare initiatives or advocating for environmental sustainability. 
                    Together we are building a bright future where every individual has the opportunity to inspire. 
                    Join us in our journey towards the world where dreams know no bounds and every heart beat with hope.
                </ReadMore2>
            {/* </h2> */}
        </div>
    );
};

export default ReadMore;