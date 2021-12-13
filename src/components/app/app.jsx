import appStyles from './app.module.css';
// Яндекс:
// Компоненты BurgerConstructor и BurgerIngredients используют данные.
// Пока вам не нужно делать запрос к API, поэтому ниже есть массив с захардкоженными данными,
// которыми можно воспользоваться на уровне компонента App:
import { myData } from '../../utils/data.js';
// компоненты
import AppHeader from '../appheader/appheader';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import BurgerIngredients from '../burgeringredients/burgeringredients.jsx';

// массивы ингредиентов (для конструктора)
// снизу и сверху фиксированные слои булок + посередине все-все остальное
const topItem = myData[0];
const middleItems = myData.slice(1, 14);
const bottomItem = myData[0];

export default function App() {
    return (
        <>
            {/*шапка*/}
            <AppHeader />
            {/*основной интерфейс*/}
            <div className={appStyles.container}>
                {/*левая часть - ингридиенты списком*/}
                <section className={appStyles.container_left + ' mr-5'}>
                    <BurgerIngredients items={myData} />
                </section>
                {/*правая часть - конструктор*/}
                <section className={appStyles.container_right + ' ml-5'}>
                    <BurgerConstructor topItem={topItem} middleItems={middleItems} bottomItem={bottomItem} />
                </section>
            </div>
        </>
    );
}