#!/bin/bash
# Duplo-clique para ver o site com todos os vídeos a funcionar.
# O YouTube e o Vimeo não tocam quando o ficheiro é aberto directamente
# (erro 153), por isso abrimos um pequeno servidor local.
cd "$(dirname "$0")" || exit 1
PORT=8000
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done
echo "A abrir http://localhost:$PORT  —  fecha esta janela para parar."
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
sleep 1
open "http://localhost:$PORT/index.html"
wait $SERVER_PID
