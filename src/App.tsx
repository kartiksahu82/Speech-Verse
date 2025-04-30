import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen bg-zinc-900 text-zinc-100 px-4'>
            <div className='w-full max-w-3xl flex flex-col justify-center items-center p-4 sm:p-6 rounded-xl shadow-xl bg-zinc-800/60 backdrop-blur-md border border-zinc-700'>
                <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent mb-2 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_15px_rgba(255,0,150,0.5)] text-center'>
                    Speech-Verse
                </h1>

                <h2 className='mt-2 mb-4 px-2 text-center text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-zinc-300'>
                    ML-powered speech recognition directly in your browser
                </h2>

                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
            </div>

            <div className='absolute bottom-4 text-sm sm:text-base text-zinc-400 text-center px-2'>
                Made with{" "}
                <a
                    className='underline hover:text-zinc-200 transition'
                    href='https://kartik-sahu-portfolio.vercel.app/'
                >
                    🤗 Kartik Sahu
                </a>
            </div>
        </div>
    );
}

export default App;
