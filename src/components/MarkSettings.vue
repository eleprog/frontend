<template>
	<div class="module-container">
		<div class="data-container">
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>ФИО</th>
						<th>Автомобиль</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in data" :key="item.id">
						<td>{{ item.id }}</td>
						<td>
							<input
								v-if="isEditing === index"
								type="text"
								v-model="item.fullName"
							/>
							<span v-else>{{ item.fullName }}</span>
						</td>
						<td>
							<input
								v-if="isEditing === index"
								type="text"
								v-model="item.car"
							/>
							<span v-else>{{ item.car }}</span>
						</td>
						<td>
							<button v-if="isEditing === index" @click="saveEdit(index)">Сохранить</button>
							<button v-else @click="editRow(index)">Редактировать</button>
							<button @click="confirmDelete(index)">Удалить</button>
						</td>
					</tr>
					<tr>
						<td><input type="number" v-model="newId" placeholder="id" /></td>
						<td><input type="text" v-model="newFullName" placeholder="ФИО" /></td>
						<td><input type="text" v-model="newCar" placeholder="Автомобиль" /></td>
						<td><button @click="addRow">Добавить</button></td>
					</tr>
				</tbody>
			</table>










			<input
				type="text"
				v-model="selectedOption"
				list="optionsList"
				@focus="showAllOptions"
				@input="filterOptions"
				placeholder="Введите значение"
			/>
			<datalist id="optionsList">
      	<option v-for="(option, index) in filteredOptions" :key="index" :value="option" />
    	</datalist>

		</div>
	</div>

</template>

<script>
  export default {
    data() {
			return {
				data: [
					{ id: 1, fullName: 'Иванов Иван И', car: 'Toyota' },
					{ id: 2, fullName: 'Петров Петр П', car: 'Honda' },
				],
				newId: '',
				newFullName: '',
				newCar: '',
				isEditing: null, // Индекс редактируемой строки

        searchTerm: '',
				showDropdown: false,
				options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
				filteredOptions: [],
			};
    },
		methods: {
			addRow() {
				if (this.newId && this.newFullName && this.newCar) {
					this.data.push({
						id: this.newId,
						fullName: this.newFullName,
						car: this.newCar,
					});
					// Очистка полей ввода
					this.newId = '';
					this.newFullName = '';
					this.newCar = '';
				} else {
					alert('Пожалуйста, заполните все поля.');
				}
			},

			editRow(index) {
				this.isEditing = index; // Устанавливаем индекс редактируемой строки
			},
			saveEdit(index) {
				this.isEditing = null; // Сбрасываем редактирование
			},
			deleteRow(index) {
				this.data.splice(index, 1); // Удаляем строку по индексу
			},

			confirmDelete(index) {
				if (confirm('Вы уверены, что хотите удалить эту строку?')) {
					this.deleteRow(index);
				}
			},

			filterOptions() {
				this.filteredOptions = this.options.filter(option =>
					option.toLowerCase().includes(this.searchTerm.toLowerCase())
				);
			},

			showAllOptions() {
      	this.filteredOptions = this.options; // Показываем все опции при фокусе
    	},
		},

		mounted() {
			// Изначально заполняем filteredOptions всеми опциями
			this.filteredOptions = this.options;
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

	input {
    width: 100%; /* Полная ширина ячейки */

		box-sizing: border-box; /* Учитываем границы и отступы в ширине */
		padding: 5px; /* Отступы внутри поля ввода */
}



</style>