import Layout from "../communs/layout";

const Home = () => {
    return (
        <>
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">Home</h1>
                    <p className="text-lg text-gray-700 max-w-md text-center">
                        Welcome to the home page! We’re excited to have you here. Feel free to explore and enjoy the content.
                    </p>
                    <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                        Get Started
                    </button>
                </div>
            </Layout>
        </>
    )
}

export default Home;
