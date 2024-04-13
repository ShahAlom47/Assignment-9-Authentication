

const Faq = () => {

    const faqFormHandel = (e) => {
        e.preventDefault()

    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-10/12 m-auto bg-[#8a9043] text-white  my-8 rounded-xl p-6">
            <div className=" pr-5">
                <h1 className="text-5xl mb-5 font-bold  ">Do you have any questions?</h1>
                <p className="text-lg text-gray-200">Have questions about real estate? Get in touch with our team for expert guidance and answers tailored to your needs. Contact us today!</p>

            </div>
            <div className="">
                <form onSubmit={faqFormHandel}>

                    <div className="p-1 flex  flex-col rounded-md">
                        <input className="p-2 border-t-2 rounded-md" type="name" name="name" id="name" placeholder="Your Name" />
                    </div>
                    <div className="p-1 flex  flex-col rounded-md">
                        <input className="p-2 border-t-2 rounded-md" type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="p-1 flex  flex-col rounded-md">
                        <textarea className="p-2 border-t-2 rounded-md" placeholder="Enter your question here.." name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="p-1 flex  flex-col rounded-md">
                        <input className="btn bg-[#24292b] border-none rounded-md w-full font-bold mt-3 text-white" type="submit" value="SUBMIT" />
                    </div>


                </form>


            </div>

        </div>
    );
};

export default Faq;