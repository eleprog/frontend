<template>
	<div class="module-container">
		<div class="sidebar">
			<h2>Сессия</h2>
			<ul>
				<li
					v-for="session in sessions" :key="session.id" :class="{ active: session.id === activeSessionId }" @click="selectSession(session.id)" >
					{{ session.name }}
				</li>
			</ul>
		</div>
		<div class="sidebar">
			<h2>Пилот</h2>
			<ul>
				<li v-for="racer in racers" :key="racer.id" :class="{ active: racer.id === activeRacerId }" @click="selectRacer(racer.id)">
					{{ racer.name }}
				</li>
			</ul>
		</div>
		<div class="sidebar">
			<h2>Автомобиль</h2>
			<ul>
				<li v-for="car in cars" :key="car.id" :class="{ active: car.id === activeCarId }" @click="selectCar(car.id)">
					{{ car.name }}
				</li>
			</ul>
		</div>



		<div class="table-container">
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>Дата</th>
						<th>Время</th>
						<th>Время круга</th>
						<th>Valid</th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="entry in entries" :key="entry.entryId">
						<td>{{ entry.entryId }}</td>
						<td>{{ entry.data }}</td>
						<td>{{ entry.timestamp }}</td>
						<td>{{ entry.lapTime }}</td>
						<td><button @click="entry.valid = !entry.valid" :class="{ active: entry.valid }">{{entry.valid ? 'True' : 'False'}}</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
			return {

				activeSessionId: null,
				activeRacerId: null,
				activeCarId: null,

				entries: [
					{ entryId: 1, data: '10 марта 2025', timestamp: '10:23.565', lapTime: '0:45.435', valid: true },
					{ entryId: 2, data: '10 марта 2025', timestamp: '11:15.123', lapTime: '0:50.200', valid: true },
					{ entryId: 3, data: '10 марта 2025', timestamp: '12:05.789', lapTime: '0:48.750', valid: false },
					{ entryId: 4, data: '10 марта 2025', timestamp: '13:45.456', lapTime: '0:42.300', valid: true },
					{ entryId: 5, data: '10 марта 2025', timestamp: '14:30.987', lapTime: '0:49.600', valid: true },
					{ entryId: 6, data: '10 марта 2025', timestamp: '15:20.654', lapTime: '0:47.890', valid: false },
					{ entryId: 7, data: '10 марта 2025', timestamp: '16:10.321', lapTime: '0:44.120', valid: true },
					{ entryId: 8, data: '10 марта 2025', timestamp: '17:55.234', lapTime: '0:51.500', valid: true },
					{ entryId: 9, data: '10 марта 2025', timestamp: '18:40.876', lapTime: '0:46.300', valid: false },
					{ entryId: 10, data: '10 марта 2025', timestamp: '19:25.543', lapTime: '0:43.750', valid: true },
				],
				sessions: [
					{ id: 1, name: 'Сессия 1' },
					{ id: 2, name: 'Сессия 2' },
					{ id: 3, name: 'Сессия 3' },
					{ id: 4, name: 'Сессия 4' },
				],

				racers: [
					{ id: 1, name: 'Алексей Е. Г.' },
					{ id: 2, name: 'Мария А. П.' },
					{ id: 3, name: 'Дмитрий С. В.' },
					{ id: 4, name: 'Елена И. Р.' },
					{ id: 5, name: 'Сергей Т. Н.' },
					{ id: 6, name: 'Анна К. Л.' },
					{ id: 7, name: 'Иван М. О.' },
					{ id: 8, name: 'Ольга Д. Ф.' },
					{ id: 9, name: 'Николай Ю. Х.' },
					{ id: 10, name: 'Татьяна Ж. Б.' },
				],

				cars: [
					{ id: 1, name: 'Honda Civic' },
					{ id: 2, name: 'Toyota Corolla' },
					{ id: 3, name: 'Ford Focus' },
					{ id: 4, name: 'Chevrolet Malibu' },
					{ id: 5, name: 'Nissan Sentra' },
					{ id: 6, name: 'Hyundai Elantra' },
					{ id: 7, name: 'Volkswagen Jetta' },
					{ id: 8, name: 'Subaru Impreza' },
					{ id: 9, name: 'Kia Forte' },
					{ id: 10, name: 'Mazda3' },
				]
			};
    },
		methods: {
			selectSession(id) {
				this.activeSessionId = id;
			},
			selectRacer(id) {
				this.activeRacerId = id;
			},
			selectCar(id) {
				this.activeCarId = id;
			},
		},
  };
</script>
  
<style scoped>

	.sidebar {
		border-right: 3px solid var(--primary-color-0);
		overflow-y: auto; /* Включаем вертикальную прокрутку */
		list-style-type: none; /* Убираем маркеры списка */
	}

	.sidebar h2 {
		margin: 0; /* Убираем отступы по умолчанию */
		padding: 10px;
    text-align: center; /* Центрируем текст заголовка */
	}

	.sidebar ul {
		padding: 10px; /* Убираем отступы у списка */
		margin: 0px; /* Убираем отступы по умолчанию */
		list-style-type: none; /* Убираем маркеры списка */
	}

	.sidebar li {
    padding: 0px; /* Добавляем отступы для элементов списка */
    cursor: pointer; /* Указываем, что элемент кликабельный */
	}

	li.active {
		background-color: var(--primary-color-0);
		color: white;
	}
	
	input:hover {
    background-color: var(--primary-color-1)
  }

	.table-container {
		justify-content: center; /* Центрируем по горизонтали */
		overflow-y: auto; /* Включаем вертикальную прокрутку */
		margin-top: 20px; /* Отступ сверху для таблицы */
		margin-left: 20px; /* Отступ сверху для таблицы */
	}

	button {
		padding: 0px 0px;
		border: none;
		background-color: #FF0000;
		color: var(--inv-text-color);
		cursor: pointer;
		border-radius: 0px;
		font-size: 16px;
	}

	button.active {
		background-color: #00FF00;
		color: var(--text-color);
	}

	

</style>