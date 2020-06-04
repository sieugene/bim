
//Функция для сортировки по ID, NAME, AGE
export const Sorting = async (type, copyarray, setArray, toggleSortActive, options) => {
    let isSorted;
    let toggleSort;
    let essences;
    let essencesRev;
    if (type === "id") {
        isSorted = options.isSortedOfId
        toggleSort = options.toggleForId
        essences = (a, b) => {
            return (Number(a.ID) > Number(b.ID))
        }
        essencesRev = (a, b) => {
            return (Number(a.ID) < Number(b.ID))
        }
    }
    if (type === "age") {
        isSorted = options.isSortedOfAge
        toggleSort = options.toggleForAge
        essences = (a, b) => {
            return (Number(a.Age) > Number(b.Age))
        }
        essencesRev = (a, b) => {
            return (Number(a.Age) < Number(b.Age))
        }
    }
    if (type === "name") {
        isSorted = options.isSortedOfName
        toggleSort = options.toggleForName
        essences = (a, b) => {
            return (a.Name > b.Name)
        }
        essencesRev = (a, b) => {
            return (a.Name < b.Name)
        }
    }
    toggleSortActive(true)
    if (isSorted === false) {
        let sort = copyarray.sort(function (a, b) {
            if (essences(a, b)) {
                return 1;
            } else if (essencesRev(a, b)) {
                return -1;
            } else {
                return 0;
            }
        });
        await setArray(sort)
        toggleSortActive(false)
        toggleSort(true);
    } else if (isSorted === true) {
        let sort = copyarray.sort(function (a, b) {
            if (essences(a, b)) {
                return -1;
            } else if (essencesRev(a, b)) {
                return 1;
            } else {
                return 0;
            }
        });
        await setArray(sort)
        toggleSortActive(false)
        toggleSort(false)
    }
}

//Валидация из тестового значения
//нет проверки на Number, так как JSON значения имеют изначально String
//из-за чего могут возникнуть проблемы, для этого создаваемым input, назначен type="Number"
export const Validate = (id, name, age) => {
    if (!id || !name || !age) {
        alert('Не правильно!')
        return true
    } else if (name.length >= 100) {
        alert('Имя больше 100!')
        return true
    } else if (Number(age) > 1000) {
        alert('Ошибка возраст не может быть более 1000!')
        return true
    }
}

//Вспомогательная функция для того, чтобы назначить значения из стейта при изменение
//так как отслеживание всех input, может сказать на производительности
//для этого сделан простой обработчик 
export const TrackChangeValue = (e, valueFromState) => {
    if (e.target.value.length <= 0 || undefined) {
        e.target.value = valueFromState
    } else {
        return e.target.value
    }
}

//Проверка на undefined значения для редактирования таблиц
export const checkOnUndefined = (e) => {
    if (!e.currentTarget.children[0].children[0].value || !e.currentTarget.children[1].children[0].value ||
        !e.currentTarget.children[2].children[0].value
    ) {
        debugger
        return true
    } else {
        return false
    }

}
