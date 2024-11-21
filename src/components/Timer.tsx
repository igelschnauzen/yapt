import { useEffect } from "react";

function Timer({isRunning, time, setTime} : {isRunning: boolean, time: number, setTime: any}) {
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();

    if(minutes.length == 1) {
        minutes = "0" + minutes;
    }

    if(seconds.length == 1) {
        seconds = "0" + seconds;
    }

    useEffect(() => {
        document.title = `${minutes}:${seconds} | Pomodoro`;
    }, [minutes, seconds])

    useEffect(() => {
        if(isRunning) {
            const timer = setInterval(() => {
                setTime((prevTime: number): number => {
                    if(prevTime <= 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isRunning]);

    return (
        <div className="pomodoro__timer">
            <h1>{minutes}:{seconds}</h1>
        </div>
    );
}

export default Timer;