@echo off
echo ========================================
echo   ClimatServ17 - Arret des processus
echo ========================================
echo.

echo Arret des processus Node.js en cours...
taskkill /F /IM node.exe 2>nul
if %errorlevel% equ 0 (
    echo Processus Node.js arretes avec succes
) else (
    echo Aucun processus Node.js actif
)

echo.
echo Arret des processus Next.js en cours...
taskkill /F /IM next.exe 2>nul

echo.
echo Liberation du port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (
    taskkill /F /PID %%a 2>nul
    if not errorlevel 1 echo Port 3000 libere
)

echo.
echo ========================================
echo   Tous les processus ont ete arretes
echo ========================================
timeout /t 2 >nul
