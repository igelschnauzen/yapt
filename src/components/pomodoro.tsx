import Controls from "./controls";
import Timer from "./timer";
import { useState } from "react";

function Pomodoro() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25 * 60);

    return (
        <div className="pomodoro">
            <Timer isRunning={isRunning} time={time} setTime={setTime}/>
            <Controls isRunning={isRunning} setIsRunning={setIsRunning} setTime={setTime}/>
        </div>
    )       
}

export default Pomodoro;