import { Mode } from "../types.ts";

function Controls({isRunning, setIsRunning, setTime, mode} : {isRunning: boolean, setIsRunning: (isRunning: boolean) => void, setTime: (time: number) => void, mode: Mode}) {

    function handleToggle(): void {
        setIsRunning(!isRunning);
    }

    function handleReset(): void {
        setIsRunning(false);
        
        if (mode === "work") {
            setTime(25 * 60);
        } else if (mode === "break") {
            setTime(5 * 60);
        }
    }

    return (
        <div className="pomodoro__controls">
            <button className="pomodoro__button pomodoro__button--toggle" onClick={handleToggle}>{isRunning ? "pause" : "start"}</button>
            <button className="pomodoro__button pomodoro__button--inactivemode" onClick={handleReset}>reset</button>
        </div>
    );
}

export default Controls;