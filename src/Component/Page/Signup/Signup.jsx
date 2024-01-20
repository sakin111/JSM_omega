
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUserAccount } from "../../lib/appwrite/api";


const Signup = () => {

    const { register, formState: { errors }, } = useForm()
    const onSubmit = async(data) => {
       try{
        const newUser = await createUserAccount(data)
        console.log(newUser, 'this is newUser')
       }catch(error){
        console.log(error,'user created unsuccessfully')
       }
    }



    return (


        <div className="flex justify-center sm:flex-grow md:flex-grow ">
            <div className="hero min-h-screen bg-gradient-to-r from-orange-100 via-[#977d4f] to-gray-950 login-container">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm blur-0">
                        <form className="card-body" onSubmit={onSubmit}>
                            <div>
                                <h2 className="h3-bold md:h2-bold text-gray-200 font-inter">Create a new account</h2>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200 ">name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered text-black" name="name" required  {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered text-black" name="email" required  {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-200">password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered text-black" name="password" required  {...register("password", { required: true, maxLength: 12, minLength: 8, pattern: /[A-Za-z]0-9/ })} />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="bg-gradient-to-r from-orange-100  via-[#977d4f] to-orange-300 text-white font-bold py-2 px-4 rounded">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Already have an account ? <Link to="/login" className="text-orange-300">login</Link></p>
                    </div>
                </div>
            </div>




            <div className="hero min-h-screen bg-gradient-to-r from-gray-950  via-[#977d4f]  to-orange-100 ">
                <p className=" gradient-text text-sm sm:text-sm px-8 md:text-sm lg:text-sm">Beneath the binary stars, a new horizon gleams, <br />
                    A canvas blank, where dreams take shape, in bits and streams.<br />
                    In the symphony of possibilities, a melody to compose,<br />
                    A sign-up page, where aspirations find repose.<br />

                    Enter the realm of creation, where fields await,<br />
                    In the kingdom of registration, at destiny&apos;s gate.<br />
                    Usernames bloom like flowers in a virtual garden,<br />
                    A journey begins, a tale to be written, a pardon.<br /><br />

                    Choose a name that echoes your digital identity,<br />
                    In the register of hopes, sow the seeds of serenity.<br />
                    A password, a secret, guard it with pride,<br />
                    As you embark on this journey, with nothing to hide.<br /><br />

                    Fill the form with details, like stars in the night,<br />
                    A constellation of information, sparkling bright.<br />
                    Emails like messages sent through cosmic winds,<br />
                    In the universe of sign-up, a destiny begins.<br /><br />

                    Click the button, a cosmic collision of fate,<br />
                    As you sign up for the adventure, no longer to wait.<br />
                    A confirmation, a spark, a constellation aligns,<br />
                    In the cosmic web of connections, your presence shines.<br /><br />

                    So, in the binary dance, where data twirls,<br />
                    Sign up, explorer, as the digital universe unfurls.<br />
                    A cosmic ballet, where every bit swirls,<br />
                    In the realm of registration, where your story whirls.</p>

            </div>



        </div>



    );
};

export default Signup;


