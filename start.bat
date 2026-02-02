@echo off
echo ========================================
echo   ClimatServ17 - Demarrage du serveur
echo ========================================
echo.

REM Arreter les processus existants pour eviter les conflits
echo Nettoyage des processus existants...
taskkill /F /IM node.exe 2>nul
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /F /PID %%a 2>nul
echo.

REM Verifier si node_modules existe
if not exist "node_modules\" (
    echo Installation des dependances...
    call npm install
    echo.
)

echo Demarrage du serveur de developpement...
echo.
echo Le site sera accessible sur: http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo ========================================
echo.

call npm run dev
