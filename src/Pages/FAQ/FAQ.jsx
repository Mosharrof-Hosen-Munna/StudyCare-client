import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className=''>
            


            <section className='container mx-auto mb-20'>
                <h1 className='text-6xl font-semibold text-indigo-700 text-center my-5'>FAQs</h1>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What are the payment method?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>You Can pay us by PayPal, Bkash and through bank</p>
                    </div>
                </div>
                <div className="collapse my-3">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        How Long This These courses last averagely?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Average all courses lasts for 12 month</p>
                    </div>
                </div>
                <div className="collapse my-3">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Is any free tryal available?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Yeah, You enjoy first 5 videos of every course</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FAQ;