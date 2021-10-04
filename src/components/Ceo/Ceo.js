import React from 'react';
import img from '../../images/kamil.jpeg'

const Ceo = () => {
    return (
        <div>
            <section className="flex  space-x-4 mx-28 py-8">
                <div className="w-1/2 my-auto space-y-4">

                    <h4 className="text-2xl font-semibold">Kamil Hassan</h4>
                    <p>
                        Kamil Hassan is a Language professional who grew up in Bangladesh and currently studying in Malaysia. Through his life he has travelled many countries and mastered many different language.
                    </p>
                    <button className="border-2 p-4 rounded-md font-light text-purple-600 hover:shadow-md"> <a href="https://www.linkedin.com/in/kamil-hassan-545343175/" target="_blank">Explore More About Kamil  &gt;&gt;</a> </button>
                </div>
                <div className=" w-1/2">
                    <img className="w-3/4 mx-auto rounded-full" src={img} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Ceo;