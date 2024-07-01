import React, { useState } from "react";

const ReadMore2 = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 0) : text}
            <br />
            <span
                onClick={toggleReadMore}
                className="read-or-hide"
            >
            {isReadMore ? <div className="flex mt-4"><div className="bg-orange-600 w-10 rounded-full hover:pr-32 hover:text-black transition-all"><button onClick={toggleReadMore} className='inline-flex w-36 text-sm pl-4 py-2 uppercase font-sans font-semibold'>
            Learn More<svg className="mt-1 rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></button></div></div>
            : <div className="flex mt-4"><div className="bg-orange-600 w-10 rounded-full hover:pr-28 hover:text-black transition-all"><button onClick={toggleReadMore} className='inline-flex w-36 text-sm pl-4 py-2 uppercase font-sans font-semibold'>
                Show Less</button></div>
            </div>}
            </span>
        </div>
    );
};

const LearnMore = () => {
    return (
        <div className="container">
            {/* <h2> */}
                <ReadMore2>
                Swami Vivekananda is widely regarded as one of the most influential spiritual leaders and youth icon in Indian history. Vivekananda's life story serves as a powerful example of courage, resilience and determination. His teachings and philosophy resonate deeply with youth, inspiring them to lead  lives of purpose, integrity and service to humanity. Swami Vivekananda's ideals profoundly influence the working of our NGO emphasizing service, compassion and selflessness. 
                Our NGO has adopted the principle of selfless service to humany by priortizing the welfare and empowerment of marginalised communities, providing them with education, healthcare, livelihood opportunities and other essential services. Swami Vivekananda believed in the transformative power of education to uplift individuals and societies. In the same way, our NGO focuses on educational initiative such as providing career counselling, vocational training etc. to empower the students. Along with that, he stressed the importance of spiritual and moral values in shaping individuals and society. N.A.V Yuva Foundation integrates ethical principle into its programs and activities fostering a culture of compassion, integrity and social responsibility among its members and volunteers.
                Vivekananda encouraged individuals to realise their inner potential and strive for self reliance and self development. He was also a staunch advocate for social justice and equality. N.A.V Yuva Foundation facilitate community lead development initiative empowering local residents to identify their needs and implement sustainable solution to address them. It addresses systematic injustice, advocate for policy reforms and promote human rights, gender equality and social inclusion.
                The list is long and so is our goal to meet the very parameters of these ideals. We, by embodying these ideals in our mission, values and activities, are effectively contributing to positive social change and collective well being inspired by the timeless wisdom of Swami Vivekananda.
                </ReadMore2>
            {/* </h2> */}
        </div>
    );
};

export default LearnMore;