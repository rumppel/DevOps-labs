# DevOps-labs
Виконаємо команду для збірки образу:

` docker build -t rumppel/node_js_app .`

Щоб вивести перелік усіх існуючих образів, вводимо:

` docker images`

Запускаємо контейнер на основі вказаного образу (на 80-му порті, обмежуючи при цьому по cpu та memory):

` docker run --name node_js_app -p 80:8080 --cpus="2" --memory="200m" -d rumppel/node_js_app`

Вивести перелік усіх існуючих контейнерів:

` docker ps`

Запушимо в публічний репозиторій готовий образ:

` docker push rumppel/node_js_app`
