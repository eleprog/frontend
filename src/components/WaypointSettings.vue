<template>
	<div class="module-container">
		<div class="data-container">

			<table>
      <thead>
        <tr>
          <th>id</th>
          <th>Состояние</th>
					<th>GPS</th>
					<th>Кол-во спутников</th>
          <th>Режим работы</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.state }}</td>
					<td>{{ item.gpsState }}</td>
					<td>{{ item.gpsAmt }}</td>
          <td>
            <select v-model="item.mode">
              <option v-for="mode in modes" :key="mode" :value="mode">{{ mode }}</option>
            </select>
          </td>
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
				data: [
					{ id: 1, state: 'Активен', gpsState: 'Фиксация', gpsAmt: 10, mode: 'Старт/Финиш' },
					{ id: 2, state: 'Не активен', gpsState: 'Нет фиксации', gpsAmt: 0, mode: 'Старт/Финиш' },
					{ id: 3, state: 'Активен', gpsState: 'Нет фиксации', gpsAmt: 0, mode: 'Старт/Финиш' },
				],
				modes: ['Старт/Финиш'],
			};
    },
		methods: {
			filterOptions() {
				this.filteredOptions = this.options.filter(option =>
					option.toLowerCase().includes(this.searchTerm.toLowerCase())
				);
			},

			showAllOptions() {
				this.filteredOptions = this.options; // Показываем все опции при фокусе
				},
		},
  };
</script>
  
<style scoped>
	.data-container {
		flex: 1; /* Занимает оставшееся пространство */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 20px;
	}

	.input-form {
		margin-bottom: 20px;
	}

	.input-form input {
		margin-right: 10px;
	}



</style>