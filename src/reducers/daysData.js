import { CHANGE_EAT } from '../constants/Page'
import { LOGIN_FORM } from '../constants/Page'

const daysData = {
    eat: true,
    days: [
        {
            date: new Date(),
            courses_group: [
                {
                    name: 'Салаты',
                    courses: [
                        {name: 'Нежный', isDefault: true},
                        {name: 'Винегрет овощной со свежим горошком', isDefault: false},
                    ],
                    disabled: true,
                },
                {
                    name: 'Мясо',
                    courses: [
                        {name: 'Купаты купательные', isDefault: false},
                        {name: 'Сосиски немецкие с сыром, приправами, чесноком и базиликом', isDefault: true},
                    ],
                    disabled: false,
                },
                {
                    name: 'Супы',
                    courses: [
                        {name: 'Борщ с галушками по-украински', isDefault: false},
                        {name: 'Щи щецкие по щщам дающие на серьёзных щщах', isDefault: true},
                    ],
                    disabled: false,
                },
                {
                    name: 'Гарниры',
                    courses: [
                        {name: 'Рис-хуис', isDefault: true},
                        {name: 'Макарохи', isDefault: false},
                    ],
                    disabled: false,
                },
                {
                    name: 'Вторые блюда',
                    courses: [
                        {name: 'Уберкарбонара с соусом из усов шанхайского барса', isDefault: true},
                        {name: 'Пельмехи зачотные', isDefault: false},
                    ],
                    disabled: false,
                },

            ],
            comment: 'Когда будет холодец?!'
        },
        {
            date: new Date('2018-04-25'),
            courses_group: [
                {
                    name: 'Салаты',
                    courses: [
                        {name: 'Нежный', isDefault: true},
                        {name: 'Винегрет овощной со свежим горошком', isDefault: false},
                    ],
                    disabled: true,
                },
                {
                    name: 'Мясо',
                    courses: [
                        {name: 'Купаты купательные', isDefault: false},
                        {name: 'Сосиски немецкие с сыром, приправами, чесноком и базиликом', isDefault: true},
                    ],
                    disabled: false,
                },
                {
                    name: 'Супы',
                    courses: [
                        {name: 'Борщ с галушками по-украински', isDefault: false},
                        {name: 'Щи щецкие по щщам дающие на серьёзных щщах', isDefault: true},
                    ],
                    disabled: false,
                },
                {
                    name: 'Гарниры',
                    courses: [
                        {name: 'Рис-хуис', isDefault: true},
                        {name: 'Макарохи', isDefault: false},
                    ],
                    disabled: false,
                },
                {
                    name: 'Вторые блюда',
                    courses: [
                        {name: 'Уберкарбонара с соусом из усов шанхайского барса', isDefault: true},
                        {name: 'Пельмехи зачотные', isDefault: false},
                    ],
                    disabled: false,
                },

            ],
            comment: 'Хочу другой супец!'
        },
    ]
};

export default function(state = daysData, action) {
    let newState = {...state};
    if (window.localStorage.getItem('authorization') &&  window.location.pathname === '/') {
        window.location = '/menu';
    }
    if (!window.localStorage.getItem('authorization') && window.location.pathname !== '/') {
        window.location = '/';
    }
    switch(action.type) {
        case CHANGE_EAT:
            newState.eat = !newState.eat;
            return newState;
        case LOGIN_FORM:
            if(action.payload.email === '123@123.ru' && action.payload.password === '123') {
                window.localStorage.setItem('authorization', true);
                window.location = '/menu';
            } else {
                alert('Введены некорректные данные!')
            }
            return newState;
        default:
            return state;
    }
}