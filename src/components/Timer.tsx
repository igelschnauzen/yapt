import { useEffect, FC } from "react";

interface TimerProps {
    isRunning: boolean;
    time: number;
    setTime: (time: number | ((prevTime: number) => number)) => void;
}

const Timer: FC<TimerProps> = ({ isRunning, time, setTime }) => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = Math.floor(time % 60).toString();

    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }

    if (seconds.length === 1) {
        seconds = "0" + seconds;
    }

    useEffect(() => {
        document.title = `${minutes}:${seconds} | Pomodoro`;
    }, [minutes, seconds]);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                setTime((prevTime: number): number => {
                    if (prevTime <= 0) {
                        clearInterval(timer);

                        const sound = new Audio("../../public/sound.wav");
                        sound.play();

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
};

export default Timer;