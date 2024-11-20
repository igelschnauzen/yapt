function Controls({isRunning, setIsRunning, setTime} : {isRunning: boolean, setIsRunning: (isRunning: boolean) => void, setTime: (time: number) => void}) {

    function handleToggle(): void {
        setIsRunning(!isRunning);
    }

    function handleReset(): void {
        setIsRunning(false);
        setTime(25 * 60);
    }

    return (
        <div className="pomodoro__controls">
            <button className="pomodoro__button pomodoro__button--toggle" onClick={handleToggle}>{isRunning ? "pause" : "start"}</button>
            <button className="pomodoro__button pomodoro__button--reset" onClick={handleReset}>reset</button>
        </div>
    );
}

export default Controls;