import emailjs from '@emailjs/browser'
import { useRef, useState } from "react"
import { toast } from "react-toastify"

function Contact() {
    const form = useRef()

    const formInitialDetails = {
        fillName: '',
        emailAdress: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nchjhj5', 'template_qz72thf', form.current, 'oIIyMATZXpZwIhwwU')
            .then((result) => {
                toast.success('Message sent successfully')
            }, (error) => {
                toast.warning('Something went wrong, please try again later.')
            });
        setFormDetails(formInitialDetails);
    };
    return (
        <section id="contact" className="py-16  bg-[#fdfdfd] dark:bg-[#162336] relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-28">
                <h2 className="text-4xl text-gray-900 dark:text-gray-200  font-semibold mb-3 text-center">Contact me</h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <form ref={form} onSubmit={handleSubmit} >
                            <div className="flex flex-wrap -mx-3 mb-6  px-3 py-4 rounded-sm">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-800 dark:text-gray-300 text-sm font-meduim mb-2"
                                        htmlFor="grid-first-name">
                                        Full Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-50 dark:bg-[#34364F] text-gray-800 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="john doe"
                                        name="fillName"
                                        value={formDetails.fillName}
                                        onChange={(e) => onFormUpdate('fillName', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-800 dark:text-gray-300 text-sm font-meduim mb-2"
                                        htmlFor="grid-last-name">
                                        Email Adress
                                    </label>
                                    <input
                                        className="appearance-none block w-full  bg-gray-50 dark:bg-[#34364F] text-gray-800 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="email"
                                        name="emailAdress"
                                        placeholder="johnDoe@gmail.com"
                                        value={formDetails.emailAdress}
                                        onChange={(e) => onFormUpdate('emailAdress', e.target.value)}
                                        required

                                    />
                                </div>
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-800 dark:text-gray-300 text-sm font-meduim mb-2"
                                        htmlFor="grid-last-name"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full  bg-gray-50 dark:bg-[#34364F] text-gray-800 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="text"
                                        placeholder=""
                                        aria-label="message content"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                        name="message"
                                        value={formDetails.message}
                                        required
                                    ></textarea>
                                </div>
                                <div className="w-full px-3">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        type="submit"
                                        onClick={()=>toast.success(status.message)}>
                                            
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-8 py-6">
                        <h3 className="text-gray-900 dark:text-gray-200 text-2xl font-semibold mb-4">Contact Information</h3>
                        <ul className="flex flex-col gap-2 ">
                            <li>
                                <h3 className="text-xl text-gray-800 dark:text-gray-300 font-medium mb-1">Mobile</h3>
                                <p className="text-xm text-gray-700 dark:text-gray-400">(+213)556839875</p>
                            </li>
                            <li>
                                <h3 className="text-xl text-gray-800 dark:text-gray-300 font-medium mb-1">Email</h3>
                                <p className="text-xm text-gray-700 dark:text-gray-400">mohammed.amin.mostefaoui@gmail.com </p>
                            </li>
                            <li>
                                <h3 className="text-xl text-gray-800 dark:text-gray-300 font-medium mb-1">Address</h3>
                                <p className="text-xm text-gray-700 dark:text-gray-400">Chlef, Algeria (Open to relocation)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact