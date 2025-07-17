import React, { useState, useEffect, useCallback, useRef } from 'react';

// Enhanced TypeWriter Component with better performance and features
function TypeWriter({
    text,
    delay = 100,
    className = "",
    onComplete,
    pauseDuration = 1000,
    showCursor = true,
    cursorChar = "|",
    startDelay = 0
}) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    // Initialize with start delay
    useEffect(() => {
        if (startDelay > 0) {
            const startTimer = setTimeout(() => {
                setIsStarted(true);
            }, startDelay);
            return () => clearTimeout(startTimer);
        } else {
            setIsStarted(true);
        }
    }, [startDelay]);

    // Main typing effect
    useEffect(() => {
        if (!isStarted || currentIndex >= text.length) {
            if (isStarted && currentIndex >= text.length && !isComplete) {
                setIsComplete(true);
                if (onComplete) {
                    setTimeout(onComplete, pauseDuration);
                }
            }
            return;
        }

        const timer = setTimeout(() => {
            setDisplayText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex, text, delay, isStarted, isComplete, onComplete, pauseDuration]);

    return (
        <span className={`inline-block ${className}`}>
            {displayText}
            {showCursor && (
                <span
                    className={`inline-block transition-opacity duration-300 ${isComplete ? 'opacity-30' : 'opacity-100'
                        } ${isComplete ? '' : 'animate-pulse'}`}
                    style={{
                        animationDuration: '1s',
                        animationTimingFunction: 'ease-in-out'
                    }}
                >
                    {cursorChar}
                </span>
            )}
        </span>
    );
}

export default TypeWriter;
