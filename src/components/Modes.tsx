import { Mode } from "../types.ts";

function Modes({
    mode,
    setMode,
    setTime,
    setIsRunning}: {
        mode: Mode, 
        setMode: (mode: Mode) => void, 
        setTime: (time: number) => void,
        setIsRunning: (isRunning: boolean) => void
    }) 
{
    function handleModeChange(newMode: Mode): void {
        setMode(newMode);
        setIsRunning(false);

        if(newMode === "work") {
            setTime(25 * 60);
        } else if(newMode === "break") {
            setTime(5 * 60);
        }
    }
    
    return (
        <div className="pomodoro__modes">
            <button className={"pomodoro__button pomodoro__button--work " + (mode === "work" ? "pomodoro__button--activemode" : "pomodoro__button--inactivemode")} onClick={() => handleModeChange("work")}>work</button>
            <button className={"pomodoro__button pomodoro__button--break " + (mode === "break" ? "pomodoro__button--activemode" : "pomodoro__button--inactivemode")} onClick={() => handleModeChange("break")}>break</button>
        </div>
    );
}

export default Modes;