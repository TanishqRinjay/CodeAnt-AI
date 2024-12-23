import { useState } from "react";
import { FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";
import signIn1 from "../images/signIn1.png";
import logo from "../images/logo.png";
import gitLab from "../images/gitlab.svg";
import azure from "../images/azure.svg";
import bitBucket from "../images/bitbucket.svg";
import gitHub from "../images/github.svg";

function Login() {
    const [selectedOption, setSelectedOption] = useState<
        "saas" | "self-hosted"
    >("saas");

    const renderSignInOptions = () => {
        if (selectedOption === "saas") {
            return (
                <div className="space-y-4 px-8 pb-8 h-[250px]">
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                        <img src={gitHub} alt="GitHub" className="w-5 h-5" />
                        Sign in with GitHub
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                        <img
                            src={bitBucket}
                            alt="Bitbucket"
                            className="w-5 h-5"
                        />
                        Sign in with Bitbucket
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                        <img
                            src={azure}
                            alt="Azure DevOps"
                            className="w-5 h-5"
                        />
                        Sign in with Azure DevOps
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                        <img src={gitLab} alt="GitLab" className="w-5 h-5" />
                        Sign in with GitLab
                    </button>
                </div>
            );
        }

        return (
            <div className="space-y-4 px-8 pb-8 h-[250px]">
                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                    <img src={gitLab} alt="GitLab" className="w-5 h-5" />
                    Self Hosted GitLab
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border rounded-md hover:bg-gray-50">
                    <FiKey className="w-5 h-5" />
                    Sign in with SSO
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white flex">
            {/* Left side - Stats (visible only on desktop) */}
            <div className="hidden lg:flex lg:w-1/2 bg-white p-12 flex-col justify-center relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-60 h-60 opacity-20">
                    <img src={logo} alt="" className="w-full h-full" />
                </div>

                {/* Stats Cards Container */}
                <div className="relative flex justify-center items-center">
                    {/* First Card - Stats Grid */}
                    <div className="w-[400px] bg-white rounded-2xl shadow-even z-10">
                        <div className="flex items-center gap-2 mb-6 border-b px-6 py-4">
                            <img src={logo} alt="" className="w-6 h-6" />
                            <span className="font-bold">
                                AI to Detect & Autofix Bad Code
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-6 px-6 pb-6 text-center">
                            <div className="flex flex-col">
                                <div className="font-bold text-base">30+</div>
                                <div className="text-xs text-gray-600">
                                    Language Support
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-base">10K+</div>
                                <div className="text-xs text-gray-600">
                                    Developers
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-base">100K+</div>
                                <div className="text-xs text-gray-600">
                                    Hours Saved
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Issues Fixed */}
                    <div className="absolute bottom-[-120px] right-[80px] w-[200px] bg-white rounded-2xl shadow-even px-6 py-3 z-20">
                        <div className="flex justify-between">
                            <div>
                                <img src={signIn1} alt="" width={60} />
                                <div className="text-sm text-gray-600 mb-1">
                                    Issues Fixed
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    500K+
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-blue-500 font-medium flex items-center gap-1">
                                    ↑ 14%
                                </div>
                                <div className="text-xs text-gray-500">
                                    This week
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Login form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 border-l">
                <div className="w-full">
                    <div className=" rounded-lg bg-white border">
                        <div className="text-center mb-8 border-b border-gray-300 px-8 pt-8">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <img
                                    src={logo}
                                    alt="CodeAnt AI"
                                    className="h-8"
                                />
                                <span className="text-xl font-semibold">
                                    CodeAnt AI
                                </span>
                            </div>
                            <h1 className="text-2xl font-semibold mb-4">
                                Welcome to CodeAnt AI
                            </h1>
                            <div className="flex gap-4 mb-8">
                                <button
                                    className={`flex-1 py-2 rounded-md transition-colors ${
                                        selectedOption === "saas"
                                            ? "bg-blue-500 text-white border-blue-700 border"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                                    }`}
                                    onClick={() => setSelectedOption("saas")}
                                >
                                    SAAS
                                </button>
                                <button
                                    className={`flex-1 py-2 rounded-md transition-colors ${
                                        selectedOption === "self-hosted"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                    onClick={() =>
                                        setSelectedOption("self-hosted")
                                    }
                                >
                                    Self Hosted
                                </button>
                            </div>
                        </div>

                        {renderSignInOptions()}
                    </div>
                    <p className="text-center text-sm text-gray-800 mt-6">
                        By signing up you agree to the{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Privacy Policy
                        </a>
                    </p>

                    <Link
                        className="w-full text-xs text-blue-500 underline text-right"
                        to={"/dashboard"}
                    >
                        See dashboard page &gt;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
