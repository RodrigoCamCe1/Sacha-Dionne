document.getElementById('startBtn').addEventListener('click', startAnalysis);

function startAnalysis() {
    // Acceder a la cámara
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            let video = document.getElementById('camera');
            video.srcObject = stream;
            video.style.display = 'block';  // Mostrar el video de la cámara

            // Simular el análisis con un retraso de 3 segundos
            setTimeout(() => {
                simulateAnalysis();
                // Detener la cámara después de 5 segundos
                setTimeout(() => {
                    stream.getTracks().forEach(track => track.stop());
                    video.style.display = 'none';  // Ocultar video
                }, 5000);
            }, 3000);  // Simulación de análisis
        })
        .catch(function(error) {
            console.log("Error al acceder a la cámara: ", error);
        });
}

function simulateAnalysis() {
    // Resultados aleatorios
    const skinTypes = ['seca', 'grasa', 'mixta'];
    const hydration = getRandomValue(0, 100);
    const texture = getRandomValue(0, 100);
    const luminosity = getRandomValue(0, 100);
    const skinType = skinTypes[Math.floor(Math.random() * skinTypes.length)];

    // Mostrar resultados
    document.getElementById('skinType').textContent = skinType;
    document.getElementById('hydration').textContent = `${hydration}%`;
    document.getElementById('texture').textContent = `${texture}%`;
    document.getElementById('luminosity').textContent = `${luminosity}%`;

    document.getElementById('analysisResult').style.display = 'block';  // Mostrar resultados
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
