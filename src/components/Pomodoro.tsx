import Controls from "./Controls";
import Timer from "./Timer";
import Modes from "./Modes";
import { useState } from "react";
import { Mode } from "../types";

function Pomodoro() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [mode, setMode] = useState("break" as Mode);

    return (
        <div className="pomodoro">
            <Modes mode={mode} setMode={setMode} setIsRunning={setIsRunning} setTime={setTime} />
            <Timer isRunning={isRunning} time={time} setTime={setTime}/>
            <Controls isRunning={isRunning} setIsRunning={setIsRunning} setTime={setTime}/>
        </div>
    )       
}

export default Pomodoro;