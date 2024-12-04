window.onload = function() {
    document.getElementById("startButton").addEventListener("click", startBreathingPractice);
};

function startBreathingPractice() {
    const instruction = document.getElementById("instruction");
    const circle = document.getElementById("circle");

    // Секунды для каждого этапа
    let inhaleTime = 4; // Время на вдох
    let holdTime = 2.5;   // Время на задержку
    let exhaleTime = 4; // Время на выдох
    let repetitions = 7; // Количество повторений

    // Полная длительность одного цикла (вдох, задержка, выдох)
    let totalTime = inhaleTime + holdTime + exhaleTime;

    instruction.innerText = "Готовьтесь к дыханию...";
    setTimeout(() => {
        doBreathing(inhaleTime, holdTime, exhaleTime, repetitions);
    }, 2000);
}

function doBreathing(inhale, hold, exhale, repetitions) {
    const instruction = document.getElementById("instruction");
    const circle = document.getElementById("circle");

    if (repetitions > 0) {
        instruction.innerText = "Вдохните..."; 
        circle.style.transform = "scale(1.2)"; // Увеличиваем круг для вдоха

        setTimeout(() => {
            instruction.innerText = "Задержите дыхание..."; 
            setTimeout(() => {
                instruction.innerText = "Выдохните..."; 
                circle.style.transform = "scale(1)"; // Уменьшаем круг для выдоха

                setTimeout(() => {
                    instruction.innerText = "Начните заново!";
                    circle.style.transform = "scale(1)"; // Возвращаем круг в исходное состояние

                    // Рекурсивный вызов doBreathing для следующего повторения
                    doBreathing(inhale, hold, exhale, repetitions - 1);
                }, exhale * 1000);
            }, hold * 1000);
        }, inhale * 1000);
    } else {
        instruction.innerText = "Практика завершена!";
    }
}
