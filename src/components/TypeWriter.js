import React, { useState, useEffect } from 'react';

// typewriter settings to customize text, delax between letters, cursor display, etc
function TypeWriter({
    text,
    delay = 100,
    className = "",
    onComplete,
    pauseDuration = 1000,
    showCursor = false,
    cursorChar = "|"
}) {
    
    // store initial dispaly of text, next letter to type, if done with text
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // typing effect for everytime the index changes to type next letter
    useEffect(() => {
        // typed everything then mark done
        if (currentIndex >= text.length) {
            if (!isComplete) {
                setIsComplete(true);
                if (onComplete) {
                    setTimeout(onComplete, pauseDuration);
                }
            }
            return;
        }
        
        const timer = setTimeout(() => {
            // add next char and update previous
            setDisplayText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
        }, delay);
        
        return () => clearTimeout(timer);
    }, [currentIndex, text, delay, isComplete, onComplete, pauseDuration]);

    return (
        <span className={`inline-block ${className}`}>
            
            {/* show text and cursor to viewer */}
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
