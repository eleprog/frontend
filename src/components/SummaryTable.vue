<template>
	<div class="module-container">
		<div class="table-container">
			<table>
				<thead>
					<tr>
						<th>№</th>
						<th>id</th>
						<th>ФИО</th>
						<th>Автомобиль</th>
						<th>Лучшее вр.</th>
						<th>В круге</th>
						<th>Разрыв</th>
						<th>Посл. вр</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.carId">
						<td>{{ user.carPos }}</td>
						<td>{{ user.carId }}</td>
						<td>{{ user.racerName }}</td>
						<td>{{ user.carName }}</td>
						<td>{{ user.lapTime }}</td>
						<td>{{ user.numberBestLap }}</td>
						<td>{{ user.gap }}</td>
						<td>{{ user.lastLapTime }}</td>
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
				users: [
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					{ carId: 1, carPos: 3, racerName: 'Алексей', carName: 'Honda Fit',    lapTime: '0:45.435', 	numberBestLap: 4, gap: '0:00.000', lastLapTime: '0:49.543'},
					{ carId: 2, carPos: 1, racerName: 'Антон',   carName: 'Honda Civic',  lapTime: '0:47.345', 	numberBestLap: 3, gap: '0:01.345', lastLapTime: '0:49.542'},
					{ carId: 3, carPos: 2, racerName: 'Егор',    carName: 'VAZ 2104',     lapTime: '0:48.244', 	numberBestLap: 1, gap: '0:01.453', lastLapTime: '0:49.543'},
					{ carId: 4, carPos: 4, racerName: 'Евгений', carName: 'Mark II',      lapTime: '0:49.543', 	numberBestLap: 6, gap: '0:01.533', lastLapTime: '0:49.543'},
					
				],
			};
    },
  };
</script>
  
<style scoped>
	.table-container {
		flex: 1; /* Занимает оставшееся пространство */
		justify-content: center; /* Центрируем по горизонтали */
		overflow-y: auto; /* Включаем вертикальную прокрутку */
		margin-top: 20px; /* Отступ сверху для таблицы */
	}
</style>